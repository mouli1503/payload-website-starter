import type { GlobalConfig } from 'payload'

import { visibility } from '@/blocks/Supertails/config'

// Supertails app bottom tab bar; each tab opens a Layout by key.
export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'activeColor', type: 'text' },
    { name: 'inactiveColor', type: 'text' },
    { name: 'backgroundColor', type: 'text' },
    {
      name: 'tabs',
      type: 'array',
      fields: [
        { name: 'layoutKey', type: 'text', required: true },
        { name: 'label', type: 'text' },
        { name: 'iconUrl', type: 'text' },
        { name: 'activeIconUrl', type: 'text' },
        { name: 'iconSize', type: 'number', defaultValue: 22 },
        visibility,
      ],
    },
  ],
}
