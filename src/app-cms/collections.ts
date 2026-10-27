import type { CollectionConfig, GlobalConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { headerBlocks, pageBlocks, targeting } from './blocks'

const access = { create: authenticated, delete: authenticated, read: anyone, update: authenticated }

// A block list the app renders; tabs blocks link pages together by slug.
export const AppPages: CollectionConfig = {
  slug: 'app-pages',
  labels: { singular: 'App page', plural: 'App pages' },
  access,
  admin: { group: 'App', useAsTitle: 'title', defaultColumns: ['title', 'slug', 'updatedAt'] },
  fields: [
    { name: 'title', type: 'text', required: true },
    // Plain text, not the website slug field: app links keep their original (mixed) case.
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'blocks', type: 'blocks', blocks: pageBlocks, admin: { initCollapsed: true } },
  ],
}

// One app screen: header zone over a body page. Sticky header blocks pin on scroll.
export const Screens: CollectionConfig = {
  slug: 'screens',
  access,
  admin: { group: 'App', useAsTitle: 'key', defaultColumns: ['key', 'title', 'body', 'updatedAt'] },
  fields: [
    { name: 'key', type: 'text', required: true, unique: true, index: true },
    { name: 'title', type: 'text' },
    { name: 'header', type: 'blocks', blocks: headerBlocks, admin: { initCollapsed: true } },
    { name: 'body', type: 'relationship', relationTo: 'app-pages' },
  ],
}

// Footer: the bottom tab bar; each tab opens a screen by key.
export const AppNavigation: GlobalConfig = {
  slug: 'app-navigation',
  label: 'App navigation',
  admin: { group: 'App' },
  access: { read: () => true },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'activeColor', type: 'text', defaultValue: '#2c340c' },
        { name: 'inactiveColor', type: 'text', defaultValue: '#848484' },
        { name: 'backgroundColor', type: 'text', defaultValue: '#ffffff' },
      ],
    },
    {
      name: 'tabs',
      type: 'array',
      fields: [
        { name: 'screen', type: 'text', required: true, admin: { description: 'Screen key' } },
        { name: 'label', type: 'text' },
        { name: 'iconUrl', type: 'text' },
        { name: 'activeIconUrl', type: 'text' },
        { name: 'iconSize', type: 'number', defaultValue: 22 },
        targeting,
      ],
    },
  ],
}
