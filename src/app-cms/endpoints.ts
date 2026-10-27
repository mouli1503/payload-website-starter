import type { Endpoint, Payload, PayloadRequest } from 'payload'

import { personalize, type AppContext } from './personalize'

// BFF for the Supertails app: one call returns a screen already personalised for the caller,
// plus the pages its default tabs open, so the first paint needs no follow-up request.
//   POST /api/app/screen/:key  { context }  -> { screen, navigation, pages }
//   POST /api/app/page/:slug   { context }  -> { page }
// GET works too (anonymous context) for debugging in a browser.

type Block = { blockType: string; items?: { page?: string }[] } & Record<string, unknown>
type AppPage = { slug: string; title: string; blocks: Block[] }

// ponytail: tab pages prefetched per screen; raise if deeper default tabs should paint instantly.
const PREFETCH_DEPTH = 3

// Payload returns unset groups (action, targeting) as objects of nulls; the app wants null.
function compact(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(compact)
  if (!value || typeof value !== 'object') return value
  const entries = Object.entries(value)
    .filter(([k]) => k !== 'blockName')
    .map(([k, v]) => [k, compact(v)] as const)
  return entries.length && entries.every(([, v]) => v === null) ? null : Object.fromEntries(entries)
}

async function readContext(req: PayloadRequest): Promise<AppContext> {
  if (req.method !== 'POST') return {}
  const body = (await req.json?.().catch(() => null)) as { context?: AppContext } | null
  return body?.context ?? {}
}

async function loadPage(payload: Payload, slug: string, ctx: AppContext): Promise<AppPage | null> {
  const { docs } = await payload.find({
    collection: 'app-pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const doc = docs[0]
  if (!doc) return null
  return { slug: doc.slug, title: doc.title, blocks: personalize(compact(doc.blocks) as Block[], ctx) }
}

// The page each tabs block shows first (its first visible item), recursively.
async function prefetch(payload: Payload, slug: string, ctx: AppContext, pages: Record<string, AppPage>, depth: number) {
  if (depth > PREFETCH_DEPTH || pages[slug]) return
  const page = await loadPage(payload, slug, ctx)
  if (!page) return
  pages[slug] = page
  const first = page.blocks
    .filter((b) => b.blockType === 'segmentTabs' || b.blockType === 'categoryTabs')
    .map((b) => b.items?.[0]?.page)
    .filter((s): s is string => !!s)
  await Promise.all(first.map((s) => prefetch(payload, s, ctx, pages, depth + 1)))
}

const screen: Endpoint['handler'] = async (req) => {
  const key = String(req.routeParams?.key ?? '')
  const ctx = await readContext(req)
  const { docs } = await req.payload.find({
    collection: 'screens',
    where: { key: { equals: key } },
    limit: 1,
    depth: 1,
  })
  const doc = docs[0]
  if (!doc) return Response.json({ error: `No screen "${key}"` }, { status: 404 })

  const body = doc.body && typeof doc.body === 'object' ? doc.body.slug : null
  const pages: Record<string, AppPage> = {}
  if (body) await prefetch(req.payload, body, ctx, pages, 0)

  const nav = await req.payload.findGlobal({ slug: 'app-navigation', depth: 0 })
  const navigation = compact({ ...nav, tabs: personalize(compact(nav.tabs) as Block[], ctx) })

  return Response.json({
    screen: { key: doc.key, title: doc.title, header: personalize(compact(doc.header) as Block[], ctx), body },
    navigation,
    pages,
  })
}

const page: Endpoint['handler'] = async (req) => {
  const slug = String(req.routeParams?.slug ?? '')
  const found = await loadPage(req.payload, slug, await readContext(req))
  if (!found) return Response.json({ error: `No page "${slug}"` }, { status: 404 })
  return Response.json({ page: found })
}

export const appEndpoints: Endpoint[] = [
  { path: '/app/screen/:key', method: 'post', handler: screen },
  { path: '/app/screen/:key', method: 'get', handler: screen },
  { path: '/app/page/:slug', method: 'post', handler: page },
  { path: '/app/page/:slug', method: 'get', handler: page },
]
