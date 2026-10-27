import type { Block, Field } from 'payload'

// Supertails app v1 block set. Every block shares the same envelope:
// - targeting: who sees it (resolved server-side by the BFF, see personalize.ts)
// - sticky:    pins to the top of the screen on scroll, stacking under earlier pinned blocks
// - animation: how it enters the screen
// - backgroundColor / analyticsId
// Images are CDN URL strings (Shopify), not Media uploads, to match the app payload.

export const action: Field = {
  name: 'action',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Open page', value: 'openPage' },
        { label: 'Open collection', value: 'openCollection' },
        { label: 'Open product', value: 'openProduct' },
        { label: 'Open search', value: 'openSearch' },
        { label: 'Open URL', value: 'openUrl' },
      ],
    },
    { name: 'target', type: 'text', admin: { description: 'Page slug, collection/product GID or URL' } },
    { name: 'title', type: 'text' },
  ],
}

export const targeting: Field = {
  name: 'targeting',
  type: 'group',
  admin: { description: 'Personalisation: leave empty to show to everyone' },
  fields: [
    {
      name: 'audience',
      type: 'select',
      defaultValue: 'all',
      options: [
        { label: 'Everyone', value: 'all' },
        { label: 'Logged in', value: 'loggedIn' },
        { label: 'Logged out', value: 'loggedOut' },
      ],
    },
    { name: 'includeTags', type: 'text', admin: { description: 'Comma separated, e.g. city:Bangalore' } },
    { name: 'matchAllInclude', type: 'checkbox', defaultValue: false },
    { name: 'excludeTags', type: 'text' },
    { name: 'matchAllExclude', type: 'checkbox', defaultValue: false },
    {
      name: 'quickCommerce',
      type: 'select',
      defaultValue: 'any',
      // ponytail: short enum name, the default one passes Postgres' 63-char limit inside nested arrays
      enumName: 'enum_app_qc',
      options: ['any', 'enabled', 'disabled'],
    },
    { name: 'startsAt', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'endsAt', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
  ],
}

const envelope = (stickyByDefault = false): Field[] => [
  {
    type: 'row',
    fields: [
      { name: 'sticky', type: 'checkbox', defaultValue: stickyByDefault, admin: { description: 'Pin to top on scroll' } },
      {
        name: 'animation',
        type: 'select',
        defaultValue: 'fade',
        enumName: 'enum_app_anim',
        options: ['none', 'fade', 'slideUp', 'zoom'],
      },
      { name: 'backgroundColor', type: 'text' },
      { name: 'analyticsId', type: 'text' },
    ],
  },
  targeting,
]

const imageCore: Field[] = [
  { name: 'imageUrl', type: 'text', required: true },
  { type: 'row', fields: [{ name: 'width', type: 'number' }, { name: 'height', type: 'number' }] },
  action,
]

// List items carry their own analytics id and targeting.
const imageFields: Field[] = [...imageCore, { name: 'analyticsId', type: 'text' }, targeting]

const imageItems: Field = { name: 'items', type: 'array', fields: imageFields }

const block = (slug: string, fields: Field[], stickyByDefault = false): Block => ({
  slug,
  interfaceName: `App${slug[0].toUpperCase()}${slug.slice(1)}Block`,
  fields: [...fields, ...envelope(stickyByDefault)],
})

// Content
export const ImageBlock = block('image', imageCore)
export const ImageGrid = block('imageGrid', [
  { name: 'columns', type: 'number', defaultValue: 2 },
  { name: 'gap', type: 'number', defaultValue: 0 },
  imageItems,
])
export const Carousel = block('carousel', [
  { name: 'autoplay', type: 'checkbox', defaultValue: true },
  { name: 'intervalMs', type: 'number', defaultValue: 3500 },
  { name: 'showDots', type: 'checkbox', defaultValue: true },
  imageItems,
])
export const ImageRail = block('imageRail', [
  { name: 'itemHeight', type: 'number' },
  { name: 'gap', type: 'number', defaultValue: 0 },
  imageItems,
])
export const Video = block('video', [
  { name: 'videoUrl', type: 'text' },
  { name: 'posterUrl', type: 'text' },
  { type: 'row', fields: [{ name: 'width', type: 'number' }, { name: 'height', type: 'number' }] },
  action,
])
export const Spacer = block('spacer', [{ name: 'height', type: 'number', defaultValue: 12 }])
export const Text = block('text', [
  { name: 'text', type: 'textarea', required: true },
  { name: 'align', type: 'select', defaultValue: 'left', options: ['left', 'center', 'right'] },
  { name: 'fontSize', type: 'number', defaultValue: 16 },
  { name: 'bold', type: 'checkbox', defaultValue: false },
  { name: 'color', type: 'text' },
])

// Commerce (data comes from Shopify inside the app)
export const ProductRail = block('productRail', [
  { name: 'title', type: 'text' },
  { name: 'collectionId', type: 'text', admin: { description: 'Shopify collection GID' } },
])
export const Reorder = block('reorder', [{ name: 'headerText', type: 'text' }])

// Navigation inside a page: each item opens another app page below the bar.
export const SegmentTabs = block(
  'segmentTabs',
  [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'iconUrl', type: 'text' },
        { name: 'page', type: 'text', required: true, admin: { description: 'App page slug' } },
        targeting,
      ],
    },
    {
      name: 'colors',
      type: 'group',
      fields: [
        { name: 'background', type: 'text', defaultValue: '#FEF5E1' },
        { name: 'activeFrom', type: 'text', defaultValue: '#c62144' },
        { name: 'activeTo', type: 'text', defaultValue: '#9a1a3a' },
        { name: 'activeText', type: 'text', defaultValue: '#ffffff' },
        { name: 'inactiveText', type: 'text', defaultValue: '#111827' },
        { name: 'border', type: 'text', defaultValue: '#f6ce69' },
      ],
    },
  ],
  true,
)
export const CategoryTabs = block(
  'categoryTabs',
  [
    {
      type: 'row',
      fields: [
        { name: 'itemWidth', type: 'number', defaultValue: 85 },
        { name: 'itemHeight', type: 'number', defaultValue: 65 },
        { name: 'gap', type: 'number', defaultValue: 0 },
      ],
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'activeImageUrl', type: 'text' },
        { name: 'inactiveImageUrl', type: 'text' },
        { name: 'page', type: 'text', required: true, admin: { description: 'App page slug' } },
        { name: 'analyticsId', type: 'text' },
        targeting,
      ],
    },
  ],
  true,
)

// Extension point: the app registers a component per `type` (clevertap, bookingFlow, ...).
export const Widget = block('widget', [
  { name: 'type', type: 'text', required: true },
  { name: 'config', type: 'json' },
])

// Header zone
export const Toolbar = block('toolbar', [
  { name: 'logoUrl', type: 'text' },
  { type: 'row', fields: [{ name: 'logoWidth', type: 'number', defaultValue: 130 }, { name: 'logoHeight', type: 'number', defaultValue: 30 }] },
  {
    name: 'icons',
    type: 'array',
    fields: [
      {
        name: 'icon',
        type: 'select',
        required: true,
        options: ['search', 'wishlist', 'cart', 'coins', 'referral', 'notifications', 'profile'],
      },
      action,
    ],
  },
])
export const AddressBar = block('addressBar', [
  { name: 'placeholder', type: 'text', defaultValue: 'Deliver to: Select your location' },
  { name: 'textColor', type: 'text' },
])
export const SearchBar = block(
  'searchBar',
  [
    { name: 'hints', type: 'array', fields: [{ name: 'text', type: 'text', required: true }], admin: { description: 'Rotating placeholder words' } },
  ],
  true,
)

export const pageBlocks: Block[] = [
  ImageBlock,
  ImageGrid,
  Carousel,
  ImageRail,
  Video,
  Spacer,
  Text,
  ProductRail,
  Reorder,
  SegmentTabs,
  CategoryTabs,
  Widget,
]

export const headerBlocks: Block[] = [Toolbar, AddressBar, SearchBar, ImageBlock, Spacer, Text]
