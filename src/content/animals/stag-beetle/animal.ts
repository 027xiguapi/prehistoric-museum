import narrationEnUrl from './audio/narration.en.mp3'
import narrationZhCNUrl from './audio/narration.zh-CN.mp3'
import modelUrl from './model/model.glb'
import posterPortraitUrl from './images/poster-portrait.webp'
import posterUrl from './images/poster.webp'
import thumbnailUrl from './images/thumbnail.webp'

// Draft preview only: borrow the stegosaurus backdrop until a stag-beetle
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '../stegosaurus/backgrounds/landscape.webp'
import portraitUrl from '../stegosaurus/backgrounds/portrait.webp'

import { imageUrl } from '../../create-runtime-animal'
import { animalDefinition } from './package'
import type { DraftAnimalPackage } from '../../types'
import type { LegacyLocalReviewAnimalPackage } from '../../../review/types'

// Draft pilot package assembled as a review-style displayable so the dev
// server can preview it at /{locale}/animal/stag-beetle/. Production builds
// filter drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: modelUrl,
    modelBytes: 1893420,
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
        url: narrationZhCNUrl,
      },
      en: {
        status: 'ready',
        sourcePath: 'audio/narration.en.mp3',
        mimeType: 'audio/mpeg',
        url: narrationEnUrl,
      },
    },
  },
  review: {
    badge: '试点草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      '待机动画 clip “ookuwa” 待真实浏览器验收',
      '缩略图与海报已从模型渲染',
    ],
    accent: {
      strong: '#4a3b2a',
      soft: '#d9c9a8',
    },
  },
}
