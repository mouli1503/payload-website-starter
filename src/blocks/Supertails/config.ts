import type { Block, Field } from 'payload'

// Supertails app home blocks, ported 1:1 from the Strapi `blocks.*` components.
// Images are CDN URL strings (Shopify), not Media uploads, to match the app payload.

export const action: Field = {
  name: 'action',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Open Page', value: 'openPage' },
        { label: 'Open Collection', value: 'openCollection' },
        { label: 'Open Product', value: 'openProduct' },
      ],
    },
    { name: 'target', type: 'text' },
    { name: 'title', type: 'text' },
  ],
}

export const visibility: Field = {
  name: 'visibility',
  type: 'group',
  admin: { description: 'Who sees this section in the app' },
  fields: [
    {
      name: 'audience',
      type: 'select',
      defaultValue: 'all',
      options: [
        { label: 'All', value: 'all' },
        { label: 'Logged in', value: 'loggedIn' },
        { label: 'Logged out', value: 'loggedOut' },
      ],
    },
    { name: 'tags', type: 'text' },
    { name: 'matchAllTags', type: 'checkbox', defaultValue: false },
    { name: 'excludeTags', type: 'text' },
    { name: 'matchAllExcludeTags', type: 'checkbox', defaultValue: false },
    {
      name: 'quickCommerce',
      type: 'select',
      defaultValue: 'any',
      // ponytail: short enum name, the default one passes Postgres' 63-char limit inside nested arrays
      enumName: 'enum_st_vis_qc',
      options: [
        { label: 'Any', value: 'any' },
        { label: 'Enabled', value: 'enabled' },
        { label: 'Disabled', value: 'disabled' },
      ],
    },
    { name: 'startsAt', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
    { name: 'endsAt', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
  ],
}

const backgroundColor: Field = { name: 'backgroundColor', type: 'text' }

const imageLinkFields: Field[] = [
  { name: 'imageUrl', type: 'text', required: true },
  { name: 'width', type: 'number' },
  { name: 'height', type: 'number' },
  action,
  visibility,
  { name: 'analyticsId', type: 'text' },
]

const imageItems: Field = { name: 'items', type: 'array', fields: imageLinkFields }

export const ImageBanner: Block = {
  slug: 'imageBanner',
  interfaceName: 'ImageBannerBlock',
  fields: [{ name: 'image', type: 'group', fields: imageLinkFields }, visibility, backgroundColor],
}

export const Grid: Block = {
  slug: 'grid',
  interfaceName: 'GridBlock',
  fields: [
    { name: 'columns', type: 'number', defaultValue: 2 },
    { name: 'gap', type: 'checkbox', defaultValue: false },
    imageItems,
    visibility,
    backgroundColor,
  ],
}

export const ImageSlider: Block = {
  slug: 'imageSlider',
  interfaceName: 'ImageSliderBlock',
  fields: [
    { name: 'showPagination', type: 'checkbox', defaultValue: true },
    imageItems,
    visibility,
    backgroundColor,
  ],
}

export const ImageScroller: Block = {
  slug: 'imageScroller',
  interfaceName: 'ImageScrollerBlock',
  fields: [
    { name: 'height', type: 'number' },
    { name: 'gap', type: 'number', defaultValue: 0 },
    imageItems,
    visibility,
    backgroundColor,
  ],
}

export const Spacer: Block = {
  slug: 'spacer',
  interfaceName: 'SpacerBlock',
  fields: [{ name: 'height', type: 'number' }, visibility, backgroundColor],
}

export const Video: Block = {
  slug: 'video',
  interfaceName: 'VideoBlock',
  fields: [
    { name: 'videoUrl', type: 'text' },
    { name: 'posterUrl', type: 'text' },
    { name: 'width', type: 'number' },
    { name: 'height', type: 'number' },
    action,
    { name: 'analyticsId', type: 'text' },
    visibility,
    backgroundColor,
  ],
}

export const QuickPick: Block = {
  slug: 'quickPick',
  interfaceName: 'QuickPickBlock',
  fields: [
    { name: 'itemWidth', type: 'number' },
    { name: 'itemHeight', type: 'number' },
    { name: 'itemGap', type: 'number' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'activeImageUrl', type: 'text' },
        { name: 'inactiveImageUrl', type: 'text' },
        { name: 'pageId', type: 'text', required: true, admin: { description: 'Slug of the page this tab opens' } },
        { name: 'label', type: 'text' },
        { name: 'analyticsId', type: 'text' },
      ],
    },
    visibility,
    backgroundColor,
  ],
}

export const ProductScroller: Block = {
  slug: 'productScroller',
  interfaceName: 'ProductScrollerBlock',
  fields: [
    { name: 'collectionId', type: 'text', admin: { description: 'Shopify collection GID' } },
    { name: 'title', type: 'text' },
    visibility,
    backgroundColor,
  ],
}

export const Reorder: Block = {
  slug: 'reorder',
  interfaceName: 'ReorderBlock',
  fields: [{ name: 'headerText', type: 'text' }, visibility, backgroundColor],
}

export const Widget: Block = {
  slug: 'widget',
  interfaceName: 'WidgetBlock',
  fields: [
    { name: 'type', type: 'text', required: true, admin: { description: 'App-owned widget key, e.g. clevertap' } },
    { name: 'config', type: 'json' },
    visibility,
    backgroundColor,
  ],
}

export const TabBar: Block = {
  slug: 'tabBar',
  interfaceName: 'TabBarBlock',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'pageId', type: 'text' },
        { name: 'iconUrl', type: 'text' },
        { name: 'isAll', type: 'checkbox', defaultValue: false },
      ],
    },
    visibility,
    backgroundColor,
  ],
}

export const supertailsBlocks: Block[] = [
  ImageBanner,
  Grid,
  ImageSlider,
  ImageScroller,
  Spacer,
  Video,
  QuickPick,
  ProductScroller,
  Reorder,
  Widget,
  TabBar,
]

// Layout header slot blocks (Strapi `header.*`).
export const Toolbar: Block = {
  slug: 'toolbar',
  interfaceName: 'ToolbarBlock',
  fields: [
    { name: 'logoUrl', type: 'text' },
    { name: 'logoWidth', type: 'number', defaultValue: 130 },
    { name: 'logoHeight', type: 'number', defaultValue: 30 },
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
        visibility,
      ],
    },
    visibility,
    backgroundColor,
  ],
}

export const AddressBar: Block = {
  slug: 'addressBar',
  interfaceName: 'AddressBarBlock',
  fields: [
    { name: 'placeholder', type: 'text', defaultValue: 'Deliver to: Select your location' },
    { name: 'textColor', type: 'text' },
    visibility,
    backgroundColor,
  ],
}

export const SearchBar: Block = {
  slug: 'searchBar',
  interfaceName: 'SearchBarBlock',
  fields: [
    { name: 'imageUrl', type: 'text' },
    { name: 'width', type: 'number' },
    { name: 'height', type: 'number' },
    { name: 'placeholder', type: 'text' },
    visibility,
    backgroundColor,
  ],
}

export const headerBlocks: Block[] = [Toolbar, AddressBar, SearchBar, ImageBanner, Spacer]
