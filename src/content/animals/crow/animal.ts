import posterPortraitUrl from './images/poster-portrait.webp'
import posterUrl from './images/poster.webp'
import thumbnailUrl from './images/thumbnail.webp'

// Draft preview only: borrow the pteranodon backdrop until a crow
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '../pteranodon/backgrounds/landscape.webp'
import portraitUrl from '../pteranodon/backgrounds/portrait.webp'

import { imageUrl } from '../../create-runtime-animal'
import { animalAssetUrl } from '../../remote-assets'
import { animalDefinition } from './package'
import type { DraftAnimalPackage } from '../../types'
import type { LegacyLocalReviewAnimalPackage } from '../../../review/types'

// Draft pilot package assembled as a review-style displayable so the dev
// server can preview it at /{locale}/animal/crow/. Production builds
// filter drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: animalAssetUrl(animalDefinition.id, 'model.glb'),
    modelBytes: 12329916,
    poster: imageUrl(posterUrl),
    posterPortrait: imageUrl(posterPortraitUrl),
    thumbnail: imageUrl(thumbnailUrl),
    backgrounds: {
      landscape: imageUrl(landscapeUrl),
      portrait: imageUrl(portraitUrl),
    },
    narration: {
      'zh-CN': {
        status: 'ready',
        sourcePath: 'audio/narration.zh-CN.mp3',
        mimeType: 'audio/mpeg',
        url: animalAssetUrl(animalDefinition.id, 'narration.zh-CN.mp3'),
      },
      en: {
        status: 'ready',
        sourcePath: 'audio/narration.en.mp3',
        mimeType: 'audio/mpeg',
        url: animalAssetUrl(animalDefinition.id, 'narration.en.mp3'),
      },
    },
  },
  review: {
    badge: '试点草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      '待机动画 clip “Fly_land” 待真实浏览器验收',
      '缩略图与海报已从模型渲染',
    ],
    accent: {
      strong: '#3c3f4a',
      soft: '#d5d8e2',
    },
  },
}
