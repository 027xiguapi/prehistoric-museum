import type { StaticImageData } from 'next/image'

import type {
  PublishedAnimalPackage,
  PublishedAnimalDefinition,
} from './types'

type ImageAsset = string | StaticImageData

function imageUrl(asset: ImageAsset): string {
  return typeof asset === 'string' ? asset : asset.src
}

export interface PublishedAnimalAssetUrls {
  readonly backgroundLandscape: ImageAsset
  readonly backgroundPortrait: ImageAsset
  readonly model: string
  readonly narration: {
    readonly 'zh-CN': string
    readonly en: string
  }
  readonly poster: ImageAsset
  readonly posterPortrait: ImageAsset
  readonly thumbnail: ImageAsset
}

export function createRuntimeAnimal(
  definition: PublishedAnimalDefinition,
  urls: PublishedAnimalAssetUrls,
): PublishedAnimalPackage {
  const modelRecord = definition.provenance.find(
    (record) => record.assetPath === 'model/model.glb',
  )
  if (!modelRecord) {
    throw new Error(`动物 “${definition.id}” 缺少模型来源记录。`)
  }

  return {
    ...definition,
    assets: {
      model: urls.model,
      modelBytes: modelRecord.runtime.bytes,
      poster: imageUrl(urls.poster),
      posterPortrait: imageUrl(urls.posterPortrait),
      thumbnail: imageUrl(urls.thumbnail),
      backgrounds: {
        landscape: imageUrl(urls.backgroundLandscape),
        portrait: imageUrl(urls.backgroundPortrait),
      },
      narration: {
        'zh-CN': {
          ...definition.narration['zh-CN'],
          url: urls.narration['zh-CN'],
        },
        en: {
          ...definition.narration.en,
          url: urls.narration.en,
        },
      },
    },
  }
}
