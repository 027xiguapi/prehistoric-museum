import landscapeUrl from './backgrounds/landscape.webp'
import portraitUrl from './backgrounds/portrait.webp'
import posterUrl from './images/poster.webp'
import posterPortraitUrl from './images/poster-portrait.webp'
import thumbnailUrl from './images/thumbnail.webp'

import { createRuntimeAnimal } from '../../create-runtime-animal'
import { animalAssetUrl } from '../../remote-assets'
import { animalDefinition } from './package'

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
