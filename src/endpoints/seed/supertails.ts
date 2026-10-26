// Upserts the Supertails app content exported from the Strapi CMS: every Page (published),
// the screen Layouts (header slot + body page) and the bottom Navigation.
// Run: pnpm payload run src/endpoints/seed/supertails.ts
import config from '@payload-config'
import { getPayload } from 'payload'

import pagesJson from './supertails-pages.json'
import shell from './supertails-shell.json'

type StrapiBlock = { __component: string } & Record<string, unknown>

const pages = pagesJson as { title: string; slug: string; sections: StrapiBlock[] }[]

// Strapi component name -> Payload block slug
const blockTypes: Record<string, string> = {
  'blocks.banner': 'imageBanner',
  'blocks.grid': 'grid',
  'blocks.image-scroller': 'imageScroller',
  'blocks.image-slider': 'imageSlider',
  'blocks.product-scroller': 'productScroller',
  'blocks.quick-pick': 'quickPick',
  'blocks.reorder': 'reorder',
  'blocks.spacer': 'spacer',
  'blocks.tab-bar': 'tabBar',
  'blocks.video': 'video',
  'blocks.widget': 'widget',
  'header.toolbar': 'toolbar',
  'header.address-bar': 'addressBar',
  'header.search-bar': 'searchBar',
}

// Strapi exports unset components as null; Payload wants them absent.
// Payload's slug field lowercases slugs, so page references are lowercased to match.
const normalize = (value: unknown): unknown => {
  if (Array.isArray(value)) return value.map(normalize)
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([, v]) => v !== null)
        .map(([k, v]) => {
          const isPageRef = k === 'pageId' || (k === 'target' && obj.type === 'openPage')
          return [k, isPageRef && typeof v === 'string' ? v.toLowerCase() : normalize(v)]
        }),
    )
  }
  return value
}

const toBlocks = (blocks: StrapiBlock[], where: string) =>
  blocks.map(({ __component, ...block }) => {
    const blockType = blockTypes[__component]
    if (!blockType) throw new Error(`No Payload block for ${__component} in ${where}`)
    return { blockType, ...(normalize(block) as object) }
  })

const payload = await getPayload({ config })
const context = { disableRevalidate: true }
const pageIds = new Map<string, number>()

for (const page of pages) {
  const slug = page.slug.toLowerCase()
  const layout = toBlocks(page.sections, `page ${slug}`)
  const data = { title: page.title, slug, hero: { type: 'none' as const }, layout, _status: 'published' as const }

  const { docs } = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, limit: 1, depth: 0 })
  let id = docs[0]?.id
  if (id) {
    // @ts-expect-error layout is built from JSON, validated by Payload at write time
    await payload.update({ collection: 'pages', id, data, context })
  } else {
    // @ts-expect-error layout is built from JSON, validated by Payload at write time
    id = (await payload.create({ collection: 'pages', data, context })).id
  }

  pageIds.set(slug, id)
  payload.logger.info(`${docs[0] ? 'Updated' : 'Created'} page ${slug} (${layout.length} sections)`)
}

for (const { page, header, ...rest } of shell.layouts) {
  const pageId = page ? pageIds.get(page.toLowerCase()) : undefined
  if (page && !pageId) throw new Error(`Layout ${rest.key} points at missing page ${page}`)
  const data = { ...(normalize(rest) as object), header: toBlocks(header as StrapiBlock[], `layout ${rest.key}`), page: pageId }

  const { docs } = await payload.find({ collection: 'layouts', where: { key: { equals: rest.key } }, limit: 1, depth: 0 })
  if (docs[0]) {
    // @ts-expect-error header is built from JSON, validated by Payload at write time
    await payload.update({ collection: 'layouts', id: docs[0].id, data })
  } else {
    // @ts-expect-error header is built from JSON, validated by Payload at write time
    await payload.create({ collection: 'layouts', data })
  }
  payload.logger.info(`${docs[0] ? 'Updated' : 'Created'} layout ${rest.key}`)
}

await payload.updateGlobal({ slug: 'navigation', data: normalize(shell.navigation) as object })
payload.logger.info(`Updated navigation (${shell.navigation.tabs.length} tabs)`)

process.exit(0)
