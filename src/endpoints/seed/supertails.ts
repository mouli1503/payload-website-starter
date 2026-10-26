// Upserts the Supertails home pages (exported from the Strapi CMS) as published Pages.
// Run: pnpm payload run src/endpoints/seed/supertails.ts
import config from '@payload-config'
import { getPayload } from 'payload'

import pages from './supertails-home.json'

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

const payload = await getPayload({ config })

for (const { title, slug: strapiSlug, sections } of pages) {
  const slug = strapiSlug.toLowerCase()
  const layout = sections.map(({ __component, ...section }) => {
    const blockType = blockTypes[__component]
    if (!blockType) throw new Error(`No Payload block for ${__component} on page ${slug}`)
    return { blockType, ...(normalize(section) as object) }
  })

  const data = {
    title,
    slug,
    hero: { type: 'none' as const },
    layout,
    _status: 'published' as const,
  }

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })

  const context = { disableRevalidate: true }
  if (docs[0]) {
    // @ts-expect-error layout is built from JSON, validated by Payload at write time
    await payload.update({ collection: 'pages', id: docs[0].id, data, context })
  } else {
    // @ts-expect-error layout is built from JSON, validated by Payload at write time
    await payload.create({ collection: 'pages', data, context })
  }

  payload.logger.info(`${docs[0] ? 'Updated' : 'Created'} ${slug} (${layout.length} sections)`)
}

process.exit(0)
