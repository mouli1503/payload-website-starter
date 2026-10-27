// Run: npx tsx src/app-cms/personalize.check.ts
import assert from 'node:assert/strict'

import { personalize, resolvers, type Resolver } from './personalize'

const now = Date.parse('2026-10-27T12:00:00Z')
const blocks = [
  { id: 'all' },
  { id: 'blr', targeting: { audience: 'loggedIn' as const, includeTags: 'city:Bangalore' } },
  { id: 'notBlr', targeting: { audience: 'loggedIn' as const, excludeTags: 'city:Bangalore' } },
  { id: 'out', targeting: { audience: 'loggedOut' as const } },
  { id: 'qc', targeting: { quickCommerce: 'enabled' as const } },
  { id: 'expired', targeting: { endsAt: '2026-10-01T00:00:00Z' } },
  { id: 'future', targeting: { startsAt: '2026-11-01T00:00:00Z' } },
  { id: 'both', targeting: { includeTags: 'a, b', matchAllInclude: true } },
  { id: 'grid', items: [{ id: 'i1' }, { id: 'i2', targeting: { audience: 'loggedIn' as const } }] },
]
const ids = (ctx: Parameters<typeof personalize>[1]) => personalize(blocks, { now, ...ctx }).map((b) => b.id)

assert.deepEqual(ids({}), ['all', 'out', 'grid'])
assert.deepEqual(ids({ loggedIn: true, tags: ['city:Bangalore'] }), ['all', 'blr', 'grid'])
assert.deepEqual(ids({ loggedIn: true, tags: ['city:Pune'], quickCommerce: true }), ['all', 'notBlr', 'qc', 'grid'])
assert.deepEqual(ids({ tags: ['a', 'b'] }), ['all', 'out', 'both', 'grid'])
assert.deepEqual(ids({ tags: ['a'] }), ['all', 'out', 'grid'])

// Nested items are filtered and rules never reach the app.
const [grid] = personalize([blocks[8]], { now })
assert.deepEqual(grid, { id: 'grid', items: [{ id: 'i1' }] })

// Extension layer: a registered resolver runs after targeting.
const pinFirst: Resolver = (nodes) => [...nodes].reverse()
resolvers.push(pinFirst)
assert.deepEqual(ids({}), ['grid', 'out', 'all'])
resolvers.pop()

console.log('personalize: ok')
