'use client'
/* eslint-disable @next/next/no-img-element -- CDN URLs at their own sizes, like the app */
import { Bell, ChevronDown, CircleUser, Coins, Gift, Heart, MapPin, Search, ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'

// Web stand-ins for the app's block components, used by the admin's mobile live preview.
// Register a renderer for a new blockType (or a widget `type`) here; anything unregistered
// shows as a labelled placeholder with its JSON, so new blocks are visible before they're drawn.

export type PreviewBlock = { blockType: string; id?: string; [key: string]: any }

export type PreviewProps = {
  block: PreviewBlock
  // Tabs blocks: which item page is open, and how to switch it.
  selected?: string
  onSelect?: (page: string) => void
}

export type BlockRenderer = React.FC<PreviewProps>

const ratio = (w?: number | null, h?: number | null) => (w && h ? `${w} / ${h}` : undefined)

const Img = ({ item, style }: { item: any; style?: React.CSSProperties }) =>
  item?.imageUrl ? (
    <img
      alt=""
      src={item.imageUrl}
      style={{ display: 'block', width: '100%', aspectRatio: ratio(item.width, item.height), objectFit: 'cover', ...style }}
    />
  ) : (
    <Placeholder label="image (no imageUrl)" />
  )

export const Placeholder = ({ label, json }: { label: string; json?: unknown }) => (
  <details className="ap-placeholder">
    <summary>{label}</summary>
    {json !== undefined && <pre>{JSON.stringify(json, null, 2)}</pre>}
  </details>
)

function Carousel({ block: b }: PreviewProps) {
  const items: any[] = b.items ?? []
  const [page, setPage] = useState(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const interval = b.autoplay === false ? 0 : (b.intervalMs ?? 3500)
  useEffect(() => {
    if (!interval || items.length < 2) return
    const t = setInterval(() => {
      const el = ref.current
      if (!el) return
      const next = (Math.round(el.scrollLeft / el.clientWidth) + 1) % items.length
      el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
    }, interval)
    return () => clearInterval(t)
  }, [interval, items.length])
  return (
    <div>
      <div
        className="ap-pager"
        ref={ref}
        onScroll={(e) => setPage(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
      >
        {items.map((item, i) => (
          <div key={item.id ?? i}>
            <Img item={item} />
          </div>
        ))}
      </div>
      {b.showDots !== false && items.length > 1 && (
        <div className="ap-dots">
          {items.map((item, i) => (
            <span key={item.id ?? i} className={i === page ? 'on' : undefined} />
          ))}
        </div>
      )}
    </div>
  )
}

function SearchBar({ block: b }: PreviewProps) {
  const hints: string[] = (b.hints ?? []).map((h: any) => h.text)
  const [i, setI] = useState(0)
  useEffect(() => {
    if (hints.length < 2) return
    const t = setInterval(() => setI((n) => n + 1), 2500)
    return () => clearInterval(t)
  }, [hints.length])
  const hint = hints[i % (hints.length || 1)]
  return (
    <div className="ap-search">
      <Search size={18} />
      <span key={hint} className="ap-hint">
        Search{hint ? ` “${hint}”` : ''}
      </span>
    </div>
  )
}

const ICONS: Record<string, React.FC<{ size?: number }>> = {
  search: Search,
  wishlist: Heart,
  cart: ShoppingBag,
  coins: Coins,
  referral: Gift,
  notifications: Bell,
  profile: CircleUser,
}

function SegmentTabs({ block: b, selected, onSelect }: PreviewProps) {
  const c = b.colors ?? {}
  return (
    <div className="ap-segments" style={{ background: c.background ?? '#FEF5E1' }}>
      {(b.items ?? []).map((t: any, i: number) => {
        const on = t.page === selected
        return (
          <button
            key={t.id ?? i}
            onClick={() => onSelect?.(t.page)}
            style={{
              borderColor: c.border ?? '#f6ce69',
              color: on ? (c.activeText ?? '#fff') : (c.inactiveText ?? '#111827'),
              background: on
                ? `linear-gradient(180deg, ${c.activeFrom ?? '#c62144'}, ${c.activeTo ?? '#9a1a3a'})`
                : '#fff',
            }}
          >
            {t.iconUrl && <img alt="" src={t.iconUrl} />}
            {t.label}
          </button>
        )
      })}
    </div>
  )
}

function CategoryTabs({ block: b, selected, onSelect }: PreviewProps) {
  return (
    <div className="ap-rail" style={{ gap: b.gap ?? 0 }}>
      {(b.items ?? []).map((t: any, i: number) => {
        const on = t.page === selected
        const src = on ? (t.activeImageUrl ?? t.inactiveImageUrl) : (t.inactiveImageUrl ?? t.activeImageUrl)
        return (
          <button key={t.id ?? i} className="ap-category" onClick={() => onSelect?.(t.page)} title={t.label ?? t.page}>
            {src ? (
              <img alt={t.label ?? ''} src={src} style={{ width: b.itemWidth ?? 85, height: b.itemHeight ?? 65 }} />
            ) : (
              <span style={{ width: b.itemWidth ?? 85, height: b.itemHeight ?? 65 }}>{t.label}</span>
            )}
          </button>
        )
      })}
    </div>
  )
}

const registry: Record<string, BlockRenderer> = {
  image: ({ block }) => <Img item={block} />,
  spacer: ({ block }) => <div style={{ height: block.height ?? 12 }} />,
  text: ({ block: b }) => (
    <p
      className="ap-text"
      style={{ textAlign: b.align ?? 'left', fontSize: b.fontSize ?? 16, fontWeight: b.bold ? 700 : 400, color: b.color ?? undefined }}
    >
      {b.text}
    </p>
  ),
  video: ({ block: b }) =>
    b.videoUrl ? (
      <video
        src={b.videoUrl}
        poster={b.posterUrl ?? undefined}
        autoPlay
        muted
        loop
        playsInline
        style={{ display: 'block', width: '100%', aspectRatio: ratio(b.width, b.height), objectFit: 'cover' }}
      />
    ) : (
      <Img item={{ imageUrl: b.posterUrl, width: b.width, height: b.height }} />
    ),
  imageGrid: ({ block: b }) => {
    const gap = b.gap ?? 0
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${b.columns || 2}, 1fr)`, gap, padding: gap }}>
        {(b.items ?? []).map((item: any, i: number) => (
          <Img key={item.id ?? i} item={item} />
        ))}
      </div>
    )
  },
  carousel: Carousel,
  imageRail: ({ block: b }) => {
    const h = b.itemHeight ?? 150
    return (
      <div className="ap-rail" style={{ gap: b.gap ?? 0, paddingInline: b.gap ?? 0 }}>
        {(b.items ?? []).map((item: any, i: number) => (
          <Img key={item.id ?? i} item={item} style={{ height: h, width: 'auto', flex: 'none' }} />
        ))}
      </div>
    )
  },
  // ponytail: no Shopify call from the admin; the app fills the cards from `collectionId`.
  productRail: ({ block: b }) => (
    <div className="ap-rail ap-products" title={b.collectionId ?? ''}>
      {[0, 1, 2].map((i) => (
        <div key={i} className="ap-card">
          <div />
          <span>{i === 0 ? (b.title ?? 'Products') : ''}</span>
        </div>
      ))}
    </div>
  ),
  reorder: ({ block: b }) => <Placeholder label={`reorder: ${b.headerText ?? 'Buy again'} (signed-in customers)`} />,
  segmentTabs: SegmentTabs,
  categoryTabs: CategoryTabs,
  widget: ({ block: b }) => {
    const W = widgets[b.type]
    return W ? <W block={b} /> : <Placeholder label={`widget: ${b.type}`} json={b.config} />
  },
  toolbar: ({ block: b }) => (
    <div className="ap-toolbar">
      {b.logoUrl ? (
        <img alt="logo" src={b.logoUrl} style={{ width: b.logoWidth ?? 130, height: b.logoHeight ?? 30, objectFit: 'contain' }} />
      ) : (
        <span />
      )}
      <div>
        {(b.icons ?? []).map((i: any, n: number) => {
          const Icon = ICONS[i.icon] ?? CircleUser
          return <Icon key={i.id ?? n} size={22} />
        })}
      </div>
    </div>
  ),
  addressBar: ({ block: b }) => (
    <div className="ap-address" style={{ color: b.textColor ?? '#0B1215' }}>
      <MapPin size={16} />
      <span>{b.placeholder ?? 'Deliver to: Select your location'}</span>
      <ChevronDown size={14} />
    </div>
  ),
  searchBar: SearchBar,
}

// Widgets by `type` (clevertap, bookingFlow, ...), mirroring the app's widget registry.
const widgets: Record<string, BlockRenderer> = {}

export function registerPreviewBlock(blockType: string, render: BlockRenderer) {
  registry[blockType] = render
}

export function registerPreviewWidget(type: string, render: BlockRenderer) {
  widgets[type] = render
}

export function BlockPreview(props: PreviewProps) {
  const Render = registry[props.block.blockType]
  return (
    <div className="ap-block" style={{ background: props.block.backgroundColor ?? undefined }}>
      {Render ? <Render {...props} /> : <Placeholder label={props.block.blockType} json={props.block} />}
    </div>
  )
}
