import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  GridComponent,
  ImageBannerComponent,
  ImageScrollerComponent,
  ImageSliderComponent,
  ProductScrollerComponent,
  QuickPickComponent,
  SpacerComponent,
  TabBarComponent,
  VideoComponent,
} from '@/blocks/Supertails/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

// Supertails app sections stack edge to edge, like the app. reorder/widget are app-only.
const supertailsComponents = {
  grid: GridComponent,
  imageBanner: ImageBannerComponent,
  imageScroller: ImageScrollerComponent,
  imageSlider: ImageSliderComponent,
  productScroller: ProductScrollerComponent,
  quickPick: QuickPickComponent,
  spacer: SpacerComponent,
  tabBar: TabBarComponent,
  video: VideoComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType in supertailsComponents) {
            const Block = supertailsComponents[blockType as keyof typeof supertailsComponents]
            // @ts-expect-error block is narrowed by blockType at runtime
            return <Block {...block} key={index} />
          }

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
