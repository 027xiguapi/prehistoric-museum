import posterPortraitUrl from '@/src/content/animals/anglerfish/images/poster-portrait.webp'
import posterUrl from '@/src/content/animals/anglerfish/images/poster.webp'
import thumbnailUrl from '@/src/content/animals/anglerfish/images/thumbnail.webp'

// Draft preview only: borrow the mosasaurus backdrop until a anglerfish
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '@/src/content/animals/mosasaurus/backgrounds/landscape.webp'
import portraitUrl from '@/src/content/animals/mosasaurus/backgrounds/portrait.webp'

import { imageUrl } from '@/src/content/create-runtime-animal'
import { animalAssetUrl } from '@/src/content/remote-assets'
import { animalDefinition } from '@/src/content/animals/anglerfish/package'
import type { DraftAnimalPackage } from '@/src/content/types'
import type { LegacyLocalReviewAnimalPackage } from '@/src/review/types'

// Draft package assembled as a review-style displayable so the dev server can
// preview it at /{locale}/animal/anglerfish/. Production builds filter
// drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: animalAssetUrl(animalDefinition.id, 'model.glb'),
    modelBytes: 2169828,
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
      '待机动画 clip “Animation” 待真实浏览器验收',
      '缩略图与海报已从模型渲染',
    ],
    accent: {
      strong: '#24344d',
      soft: '#b8c8e0',
    },
  },
}
