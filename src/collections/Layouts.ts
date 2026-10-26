import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { headerBlocks } from '../blocks/Supertails/config'

// A Supertails app screen: header slot, how it behaves on scroll, and the Page that fills the body.
export const Layouts: CollectionConfig = {
  slug: 'layouts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['key', 'title', 'page', 'updatedAt'],
    useAsTitle: 'key',
  },
  fields: [
    { name: 'key', type: 'text', required: true, unique: true, index: true },
    { name: 'title', type: 'text' },
    {
      name: 'headerBehavior',
      type: 'select',
      defaultValue: 'reveal',
      options: ['fixed', 'collapse', 'reveal'],
    },
    { name: 'header', type: 'blocks', blocks: headerBlocks, admin: { initCollapsed: true } },
    { name: 'page', type: 'relationship', relationTo: 'pages' },
  ],
}
