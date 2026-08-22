import landscapeUrl from '@/src/content/animals/mosasaurus/backgrounds/landscape.webp'
import portraitUrl from '@/src/content/animals/mosasaurus/backgrounds/portrait.webp'
import posterUrl from '@/src/content/animals/mosasaurus/images/poster.webp'
import posterPortraitUrl from '@/src/content/animals/mosasaurus/images/poster-portrait.webp'
import thumbnailUrl from '@/src/content/animals/mosasaurus/images/thumbnail.webp'

import { createRuntimeAnimal } from '@/src/content/create-runtime-animal'
import { animalAssetUrl } from '@/src/content/remote-assets'
import { animalDefinition } from '@/src/content/animals/mosasaurus/package'

export const animal = createRuntimeAnimal(animalDefinition, {
  backgroundLandscape: landscapeUrl,
  backgroundPortrait: portraitUrl,
  model: animalAssetUrl(animalDefinition.id, 'model.glb'),
  narration: {
    'zh-CN': animalAssetUrl(animalDefinition.id, 'narration.zh-CN.mp3'),
    en: animalAssetUrl(animalDefinition.id, 'narration.en.mp3'),
  },
  poster: posterUrl,
  posterPortrait: posterPortraitUrl,
  thumbnail: thumbnailUrl,
})
