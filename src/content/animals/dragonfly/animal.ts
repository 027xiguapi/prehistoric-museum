import posterPortraitUrl from './images/poster-portrait.webp'
import posterUrl from './images/poster.webp'
import thumbnailUrl from './images/thumbnail.webp'

// Draft preview only: borrow the pteranodon backdrop until a dragonfly
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '../pteranodon/backgrounds/landscape.webp'
import portraitUrl from '../pteranodon/backgrounds/portrait.webp'

import { imageUrl } from '../../create-runtime-animal'
import { animalAssetUrl } from '../../remote-assets'
import { animalDefinition } from './package'
import type { DraftAnimalPackage } from '../../types'
import type { LegacyLocalReviewAnimalPackage } from '../../../review/types'

// Draft package assembled as a review-style displayable so the dev server can
// preview it at /{locale}/animal/dragonfly/. Production builds filter
// drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: animalAssetUrl(animalDefinition.id, 'model.glb'),
    modelBytes: 1698792,
    poster: imageUrl(posterUrl),
    posterPortrait: imageUrl(posterPortraitUrl),
    thumbnail: imageUrl(thumbnailUrl),
    backgrounds: {
      landscape: imageUrl(landscapeUrl),
      portrait: imageUrl(portraitUrl),
    },
    narration: {},
  },
  review: {
    badge: '下载批次草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      '待机动画 clip “oniyanma” 待真实浏览器验收',
      '缩略图与海报已从模型渲染',
    ],
    accent: {
      strong: '#3f7a8a',
      soft: '#cfe4ea',
    },
  },
}
