'use client'
/* eslint-disable @next/next/no-img-element -- CDN icons */
import { useLivePreview } from '@payloadcms/live-preview-react'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { getClientSideURL } from '@/utilities/getURL'
import { compact, personalize, type AppContext } from '../personalize'
import { BlockPreview, Placeholder, type PreviewBlock } from './registry'

// Phone-sized render of an app page or screen inside the admin's Live Preview, updating as the
// editor types. Tabs open their pages through the BFF, so what shows is what the app would get
// for the chosen persona.

// Same personas as the Expo demo's picker (src/lib/persona.tsx).
const PERSONAS: Record<string, AppContext> = {
  Guest: {},
  'Bangalore, 30-min delivery': { loggedIn: true, tags: ['city:Bangalore'], quickCommerce: true },
  'Pune, repeat buyer': { loggedIn: true, tags: ['city:Pune', 'first_order_placed'], quickCommerce: false },
}

const isTabs = (b: PreviewBlock) => b.blockType === 'segmentTabs' || b.blockType === 'categoryTabs'

type Row = { key: string; block?: PreviewBlock; tabs?: string; missing?: string }

// Flattens a page and the pages its tabs open into one scrolling list, as the app's feed does:
// a segment bar is followed by its remaining siblings and then the open page; a category strip
// by the open page directly.
function buildRows(
  blocks: PreviewBlock[],
  pages: Record<string, PreviewBlock[] | undefined>,
  selection: Record<string, string>,
  seen: string[],
  path: string,
): Row[] {
  const out: Row[] = []
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i]
    const key = `${path}/${b.id ?? i}`
    if (!isTabs(b)) {
      out.push({ key, block: b })
      continue
    }
    out.push({ key, block: b, tabs: key })
    const slug: string | undefined = selection[key] ?? b.items?.[0]?.page
    let child: Row[] = []
    if (slug && !seen.includes(slug)) {
      const sub = pages[slug]
      child = sub ? buildRows(sub, pages, selection, [...seen, slug], `${key}>${slug}`) : [{ key: `${key}>${slug}`, missing: slug }]
    }
    if (b.blockType === 'segmentTabs') {
      return [...out, ...buildRows(blocks.slice(i + 1), pages, selection, seen, path), ...child]
    }
    out.push(...child)
  }
  return out
}

// Reports its height so pinned rows below it can stack under it.
function Sticky({ top, onHeight, children }: { top: number; onHeight: (h: number) => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const report = useRef(onHeight)
  report.current = onHeight
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(() => report.current(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return (
    <div ref={ref} className="ap-sticky" style={{ top }}>
      {children}
    </div>
  )
}

type Doc = Record<string, any>

export function AppPreview({
  collection,
  initialData,
  navigation,
}: {
  collection: 'app-pages' | 'screens'
  initialData: Doc
  navigation: Doc | null
}) {
  const { data } = useLivePreview<Doc>({ initialData, serverURL: getClientSideURL(), depth: 1 })
  const [persona, setPersona] = useState('Guest')
  const [showJson, setShowJson] = useState(false)
  const [selection, setSelection] = useState<Record<string, string>>({})
  const [pages, setPages] = useState<Record<string, PreviewBlock[] | undefined>>({})
  const [heights, setHeights] = useState<Record<string, number>>({})
  const requested = useRef(new Set<string>())
  const ctx = PERSONAS[persona]

  const run = (blocks: unknown) => personalize(compact(blocks ?? []) as PreviewBlock[], ctx)
  const isScreen = collection === 'screens'
  const body = isScreen ? (typeof data.body === 'object' ? data.body : null) : data
  const header = isScreen ? run(data.header) : []
  const root = run(body?.blocks)

  const rows = [
    ...header.map((b, i) => ({ key: `h/${b.id ?? i}`, block: b }) as Row),
    ...buildRows(root, pages, selection, body?.slug ? [body.slug] : [], ''),
  ]

  // Tab pages come from the BFF, personalised for the persona; refetched when it changes.
  useEffect(() => {
    requested.current.clear()
    setPages({})
  }, [persona])
  const missing = rows.filter((r) => r.missing).map((r) => r.missing!)
  useEffect(() => {
    for (const slug of missing) {
      if (requested.current.has(slug)) continue
      requested.current.add(slug)
      fetch(`${getClientSideURL()}/api/app/page/${encodeURIComponent(slug)}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ context: { platform: 'ios', ...ctx } }),
      })
        .then((r) => (r.ok ? r.json() : { page: { blocks: [] } }))
        .then(({ page }) => setPages((p) => ({ ...p, [slug]: page.blocks })))
    }
    // `missing` changes identity every render; its contents are what matter.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [missing.join('|'), ctx])

  // ponytail: pinned rows stack cumulatively; the app's "same kind pushes the earlier one out" isn't modelled.
  const tops: Record<string, number> = {}
  let pinned = 0
  for (const r of rows) {
    if (!r.block?.sticky) continue
    tops[r.key] = pinned
    pinned += heights[r.key] ?? 0
  }

  const navTabs = isScreen && navigation ? run(navigation.tabs) : []

  return (
    <div className="ap-root">
      <div className="ap-controls">
        <select value={persona} onChange={(e) => setPersona(e.target.value)} aria-label="Persona">
          {Object.keys(PERSONAS).map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
        <button onClick={() => setShowJson((v) => !v)}>{showJson ? 'Preview' : 'JSON'}</button>
      </div>

      {showJson ? (
        <pre className="ap-json">
          {JSON.stringify(isScreen ? { header, body: body?.slug, blocks: root, pages } : { blocks: root, pages }, null, 2)}
        </pre>
      ) : (
        <div className="ap-feed">
          {rows.map((r) => {
            if (r.missing) {
              return pages[r.missing] === undefined ? (
                <div key={r.key} className="ap-loading">Loading {r.missing}…</div>
              ) : (
                <Placeholder key={r.key} label={`No app page "${r.missing}"`} />
              )
            }
            const b = r.block!
            const cell = (
              <BlockPreview
                block={b}
                selected={r.tabs ? (selection[r.tabs] ?? b.items?.[0]?.page) : undefined}
                onSelect={r.tabs ? (page) => setSelection((s) => ({ ...s, [r.tabs!]: page })) : undefined}
              />
            )
            return b.sticky ? (
              <Sticky key={r.key} top={tops[r.key] ?? 0} onHeight={(h) => setHeights((s) => (s[r.key] === h ? s : { ...s, [r.key]: h }))}>
                {cell}
              </Sticky>
            ) : (
              <React.Fragment key={r.key}>{cell}</React.Fragment>
            )
          })}
          {!rows.length && <Placeholder label="No blocks for this persona" />}
        </div>
      )}

      {navTabs.length > 0 && (
        <nav className="ap-nav" style={{ background: navigation?.backgroundColor ?? '#fff' }}>
          {navTabs.map((t: any, i: number) => {
            const on = t.screen === data.key
            const icon = on ? (t.activeIconUrl ?? t.iconUrl) : t.iconUrl
            return (
              <span key={t.id ?? i} style={{ color: on ? navigation?.activeColor : navigation?.inactiveColor }}>
                {icon && <img alt="" src={icon} style={{ width: t.iconSize ?? 22, height: t.iconSize ?? 22 }} />}
                {t.label}
              </span>
            )
          })}
        </nav>
      )}
    </div>
  )
}
