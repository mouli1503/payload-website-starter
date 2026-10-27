// Personalisation layer: a pipeline of resolvers over CMS blocks for one request context.
// The BFF endpoint runs `personalize`; another BFF or an extension layer can register its own
// resolvers (A/B buckets, recommendations, re-ranking) or call the raw REST API and run its own.

export type AppContext = {
  loggedIn?: boolean
  tags?: string[] // segments, e.g. city:Bangalore, first_order_placed
  quickCommerce?: boolean // delivery location has 30-min delivery
  now?: number // ms epoch; defaults to request time
  platform?: 'ios' | 'android' | 'web'
}

export type Targeting = {
  audience?: 'all' | 'loggedIn' | 'loggedOut' | null
  includeTags?: string | null
  matchAllInclude?: boolean | null
  excludeTags?: string | null
  matchAllExclude?: boolean | null
  quickCommerce?: 'any' | 'enabled' | 'disabled' | null
  startsAt?: string | null
  endsAt?: string | null
}

type Node = { targeting?: Targeting | null; [key: string]: unknown }
export type Resolver = <T extends Node>(nodes: T[], ctx: Required<Pick<AppContext, 'now'>> & AppContext) => T[]

const splitTags = (tags?: string | null) =>
  (tags ?? '')
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)

export function matches(t: Targeting | null | undefined, ctx: AppContext & { now: number }): boolean {
  if (!t) return true
  if (t.audience === 'loggedIn' && !ctx.loggedIn) return false
  if (t.audience === 'loggedOut' && ctx.loggedIn) return false
  if (t.startsAt && ctx.now < Date.parse(t.startsAt)) return false
  if (t.endsAt && ctx.now >= Date.parse(t.endsAt)) return false
  if (t.quickCommerce === 'enabled' && !ctx.quickCommerce) return false
  if (t.quickCommerce === 'disabled' && ctx.quickCommerce) return false
  const has = (tag: string) => (ctx.tags ?? []).includes(tag)
  const include = splitTags(t.includeTags)
  if (include.length && !(t.matchAllInclude ? include.every(has) : include.some(has))) return false
  const exclude = splitTags(t.excludeTags)
  if (exclude.length && (t.matchAllExclude ? exclude.every(has) : exclude.some(has))) return false
  return true
}

// Drops blocks and nested items (images, tabs) the context doesn't match, and strips the rules.
export const byTargeting: Resolver = (nodes, ctx) =>
  nodes
    .filter((n) => matches(n.targeting, ctx))
    .map(({ targeting: _, ...n }) => {
      const items = n.items
      return (Array.isArray(items) ? { ...n, items: byTargeting(items as Node[], ctx) } : n) as typeof nodes[number]
    })

export const resolvers: Resolver[] = [byTargeting]

export const personalize = <T extends Node>(nodes: T[] | null | undefined, ctx: AppContext): T[] => {
  const full = { ...ctx, now: ctx.now ?? Date.now() }
  return resolvers.reduce<T[]>((acc, resolve) => resolve(acc, full), nodes ?? [])
}
