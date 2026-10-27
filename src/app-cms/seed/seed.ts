// Rebuilds the Supertails app content from the production Appmaker export:
// drops every app page/screen (and the v0 copies in the website Pages collection),
// then recreates them with the v1 block set.
// Pipeline: supertails-cms/scripts/crawl.py -> appmaker_to_sections.py -> appmaker-pages.json -> this.
// Run: NODE_OPTIONS=--no-deprecation ./node_modules/.bin/payload run src/app-cms/seed/seed.ts
import config from '@payload-config'
import { getPayload } from 'payload'

import appmakerPages from './appmaker-pages.json'
import shell from './screens.json'

type V0 = Record<string, unknown> & { __component?: string }
type Visibility = {
  audience?: string
  tags?: string | null
  matchAllTags?: boolean
  excludeTags?: string | null
  matchAllExcludeTags?: boolean
  quickCommerce?: string
  startsAt?: string | null
  endsAt?: string | null
} | null

const pages = appmakerPages as { title: string; slug: string; sections: V0[] }[]

const targeting = (v: Visibility | undefined) =>
  v
    ? {
        audience: v.audience ?? 'all',
        includeTags: v.tags ?? undefined,
        matchAllInclude: v.matchAllTags ?? false,
        excludeTags: v.excludeTags ?? undefined,
        matchAllExclude: v.matchAllExcludeTags ?? false,
        quickCommerce: v.quickCommerce ?? 'any',
        startsAt: v.startsAt ?? undefined,
        endsAt: v.endsAt ?? undefined,
      }
    : undefined

const action = (a: unknown) => (a ? (a as object) : undefined)

const image = (i: V0) => ({
  imageUrl: i.imageUrl,
  width: i.width ?? undefined,
  height: i.height ?? undefined,
  action: action(i.action),
  analyticsId: i.analyticsId ?? undefined,
  targeting: targeting(i.visibility as Visibility),
})

const items = (s: V0) => ((s.items as V0[]) ?? []).map(image)

// v0 (Appmaker-derived) section -> v1 block body
const convert: Record<string, (s: V0) => Record<string, unknown>> = {
  'blocks.banner': (s) => {
    const { analyticsId, targeting: _, ...img } = image(s.image as V0)
    return { blockType: 'image', ...img, analyticsId }
  },
  'blocks.grid': (s) => ({ blockType: 'imageGrid', columns: s.columns, gap: s.gap ? 8 : 0, items: items(s) }),
  'blocks.image-slider': (s) => ({ blockType: 'carousel', showDots: s.showPagination ?? true, items: items(s) }),
  'blocks.image-scroller': (s) => ({ blockType: 'imageRail', itemHeight: s.height, gap: s.gap ?? 0, items: items(s) }),
  'blocks.spacer': (s) => ({ blockType: 'spacer', height: s.height, animation: 'none' }),
  'blocks.video': (s) => ({
    blockType: 'video',
    videoUrl: s.videoUrl,
    posterUrl: s.posterUrl,
    width: s.width,
    height: s.height,
    action: action(s.action),
    analyticsId: s.analyticsId ?? undefined,
  }),
  'blocks.product-scroller': (s) => ({ blockType: 'productRail', title: s.title, collectionId: s.collectionId }),
  'blocks.reorder': (s) => ({ blockType: 'reorder', headerText: s.headerText }),
  'blocks.widget': (s) => ({ blockType: 'widget', type: s.type, config: s.config ?? undefined }),
  'blocks.quick-pick': (s) => ({
    blockType: 'categoryTabs',
    sticky: true,
    itemWidth: s.itemWidth,
    itemHeight: s.itemHeight,
    gap: s.itemGap,
    items: ((s.items as V0[]) ?? []).map((i) => ({
      label: i.label ?? undefined,
      activeImageUrl: i.activeImageUrl ?? undefined,
      inactiveImageUrl: i.inactiveImageUrl ?? undefined,
      page: i.pageId,
      analyticsId: i.analyticsId ?? undefined,
    })),
  }),
  'blocks.tab-bar': (s) => ({
    blockType: 'segmentTabs',
    sticky: true,
    items: ((s.items as V0[]) ?? []).map((i) => ({ label: i.label ?? undefined, iconUrl: i.iconUrl ?? undefined, page: i.pageId })),
  }),
}

// Strapi-era exports use null for unset; Payload wants absent.
const dropNulls = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(dropNulls)
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([, v]) => v !== null && v !== undefined)
        .map(([k, v]) => [k, dropNulls(v)]),
    )
  }
  return value
}

const toBlock = (s: V0, slug: string) => {
  const to = convert[s.__component ?? '']
  if (!to) throw new Error(`No v1 block for ${s.__component} on ${slug}`)
  return dropNulls({
    ...to(s),
    backgroundColor: s.backgroundColor,
    targeting: targeting(s.visibility as Visibility),
  }) as Record<string, unknown>
}

const payload = await getPayload({ config })

// Drop everything app-related, including the v0 copies that lived in the website Pages collection.
await payload.delete({ collection: 'screens', where: { id: { exists: true } } })
await payload.delete({ collection: 'app-pages', where: { id: { exists: true } } })
const v0Slugs = pages.map((p) => p.slug.toLowerCase())
const removed = await payload.delete({
  collection: 'pages',
  where: { slug: { in: v0Slugs } },
  context: { disableRevalidate: true },
})
payload.logger.info(`Dropped ${removed.docs.length} v0 website pages`)

const ids = new Map<string, number>()
for (const p of pages) {
  const blocks = p.sections.map((s) => toBlock(s, p.slug))
  // @ts-expect-error blocks are built from JSON, validated by Payload at write time
  const doc = await payload.create({ collection: 'app-pages', data: { title: p.title, slug: p.slug, blocks } })
  ids.set(p.slug, doc.id)
}
payload.logger.info(`Created ${ids.size} app pages`)

for (const s of shell.screens) {
  const body = s.body ? ids.get(s.body) : undefined
  if (s.body && !body) throw new Error(`Screen ${s.key} points at missing page ${s.body}`)
  // @ts-expect-error header is built from JSON, validated by Payload at write time
  await payload.create({ collection: 'screens', data: { key: s.key, title: s.title, header: s.header, body } })
}
payload.logger.info(`Created ${shell.screens.length} screens`)

await payload.updateGlobal({ slug: 'app-navigation', data: shell.navigation })
payload.logger.info(`Updated app navigation (${shell.navigation.tabs.length} tabs)`)

process.exit(0)
