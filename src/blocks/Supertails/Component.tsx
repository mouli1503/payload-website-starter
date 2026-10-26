/* eslint-disable @next/next/no-img-element -- Shopify CDN URLs, already sized by the CDN */
import Link from 'next/link'
import React from 'react'

import type {
  GridBlock,
  ImageBannerBlock,
  ImageScrollerBlock,
  ImageSliderBlock,
  ProductScrollerBlock,
  QuickPickBlock,
  SpacerBlock,
  TabBarBlock,
  VideoBlock,
} from '@/payload-types'

// Web preview of the Supertails app blocks. Visibility rules and app actions
// (openCollection/openProduct) are app-side; the web shows every section as-is.
// ponytail: no visibility filtering on web, add when the site needs per-user content

type ImageLink = NonNullable<GridBlock['items']>[number]

const Section: React.FC<{ bg?: string | null; children: React.ReactNode }> = ({ bg, children }) => (
  <section className="mx-auto w-full max-w-[480px]" style={{ backgroundColor: bg || undefined }}>
    {children}
  </section>
)

const Img: React.FC<{ item: ImageLink; className?: string; style?: React.CSSProperties }> = ({
  item,
  className,
  style,
}) => (
  <img
    alt={item.action?.title || item.analyticsId || ''}
    className={className}
    loading="lazy"
    src={item.imageUrl}
    style={{
      aspectRatio: item.width && item.height ? `${item.width} / ${item.height}` : undefined,
      ...style,
    }}
  />
)

export const ImageBannerComponent: React.FC<ImageBannerBlock> = ({ image, backgroundColor }) => (
  <Section bg={backgroundColor}>
    <Img className="block w-full" item={image} />
  </Section>
)

export const GridComponent: React.FC<GridBlock> = ({ columns, gap, items, backgroundColor }) => (
  <Section bg={backgroundColor}>
    <div
      className={gap ? 'grid gap-2 p-2' : 'grid'}
      style={{ gridTemplateColumns: `repeat(${columns || 2}, minmax(0, 1fr))` }}
    >
      {items?.map((item) => <Img className="block w-full" item={item} key={item.id} />)}
    </div>
  </Section>
)

export const ImageSliderComponent: React.FC<ImageSliderBlock> = ({ items, backgroundColor }) => (
  <Section bg={backgroundColor}>
    <div className="flex snap-x snap-mandatory overflow-x-auto">
      {items?.map((item) => (
        <Img className="block w-full shrink-0 snap-center" item={item} key={item.id} />
      ))}
    </div>
  </Section>
)

export const ImageScrollerComponent: React.FC<ImageScrollerBlock> = ({
  height,
  gap,
  items,
  backgroundColor,
}) => (
  <Section bg={backgroundColor}>
    <div className="flex overflow-x-auto" style={{ gap: gap || 0 }}>
      {items?.map((item) => (
        <Img className="block shrink-0" item={item} key={item.id} style={{ height: height || 180 }} />
      ))}
    </div>
  </Section>
)

export const SpacerComponent: React.FC<SpacerBlock> = ({ height, backgroundColor }) => (
  <Section bg={backgroundColor}>
    <div style={{ height: height || 0 }} />
  </Section>
)

export const VideoComponent: React.FC<VideoBlock> = ({
  videoUrl,
  posterUrl,
  width,
  height,
  backgroundColor,
}) =>
  videoUrl ? (
    <Section bg={backgroundColor}>
      <video
        autoPlay
        className="block w-full"
        loop
        muted
        playsInline
        poster={posterUrl || undefined}
        src={videoUrl}
        style={{ aspectRatio: width && height ? `${width} / ${height}` : undefined }}
      />
    </Section>
  ) : null

export const QuickPickComponent: React.FC<QuickPickBlock> = ({
  itemWidth,
  itemHeight,
  itemGap,
  items,
  backgroundColor,
}) => (
  <Section bg={backgroundColor}>
    <div className="flex overflow-x-auto" style={{ gap: itemGap || 0 }}>
      {items?.map((item, i) => (
        <Link className="shrink-0" href={`/${item.pageId}`} key={item.id}>
          <img
            alt={item.label || item.analyticsId || item.pageId}
            src={(i === 0 ? item.activeImageUrl : item.inactiveImageUrl) || ''}
            style={{ width: itemWidth || 85, height: itemHeight || 65 }}
          />
        </Link>
      ))}
    </div>
  </Section>
)

// Products come from Shopify inside the app; the web shows where the rail sits.
export const ProductScrollerComponent: React.FC<ProductScrollerBlock> = ({
  title,
  collectionId,
  backgroundColor,
}) => (
  <Section bg={backgroundColor}>
    <div className="px-3 py-4">
      {title && <h3 className="mb-2 font-semibold">{title}</h3>}
      <div className="rounded border border-dashed p-3 text-xs opacity-70">
        Product rail · {collectionId}
      </div>
    </div>
  </Section>
)

export const TabBarComponent: React.FC<TabBarBlock> = ({ items, backgroundColor }) => (
  <Section bg={backgroundColor}>
    <div className="flex gap-4 overflow-x-auto px-3 py-2 text-sm">
      {items?.map((item) => (
        <Link className="shrink-0" href={`/${item.pageId}`} key={item.id}>
          {item.label}
        </Link>
      ))}
    </div>
  </Section>
)
