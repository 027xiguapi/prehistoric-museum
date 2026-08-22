import posterPortraitUrl from '@/src/content/animals/golden-retriever/images/poster-portrait.webp'
import posterUrl from '@/src/content/animals/golden-retriever/images/poster.webp'
import thumbnailUrl from '@/src/content/animals/golden-retriever/images/thumbnail.webp'

// Draft preview only: borrow the apatosaurus backdrop until a golden-retriever
// scene exists. Never shipped to production (drafts are excluded there).
import landscapeUrl from '@/src/content/animals/apatosaurus/backgrounds/landscape.webp'
import portraitUrl from '@/src/content/animals/apatosaurus/backgrounds/portrait.webp'

import { imageUrl } from '@/src/content/create-runtime-animal'
import { animalAssetUrl } from '@/src/content/remote-assets'
import { animalDefinition } from '@/src/content/animals/golden-retriever/package'
import type { DraftAnimalPackage } from '@/src/content/types'
import type { LegacyLocalReviewAnimalPackage } from '@/src/review/types'

// Draft package assembled as a review-style displayable so the dev server can
// preview it at /{locale}/animal/golden-retriever/. Production builds filter
// drafts out of every catalog, so this shape never ships publicly.
export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: animalAssetUrl(animalDefinition.id, 'model.glb'),
    modelBytes: 1746384,
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
      strong: '#a4762c',
      soft: '#f0dcae',
    },
  },
}
