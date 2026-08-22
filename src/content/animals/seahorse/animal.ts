import posterPortraitUrl from '@/src/content/animals/seahorse/images/poster-portrait.webp'
import posterUrl from '@/src/content/animals/seahorse/images/poster.webp'
import thumbnailUrl from '@/src/content/animals/seahorse/images/thumbnail.webp'

// Draft preview only: borrow the mosasaurus backdrop until a seahorse scene exists.
import landscapeUrl from '@/src/content/animals/mosasaurus/backgrounds/landscape.webp'
import portraitUrl from '@/src/content/animals/mosasaurus/backgrounds/portrait.webp'

import { imageUrl } from '@/src/content/create-runtime-animal'
import { animalAssetUrl } from '@/src/content/remote-assets'
import { animalDefinition } from '@/src/content/animals/seahorse/package'
import type { DraftAnimalPackage } from '@/src/content/types'
import type { LegacyLocalReviewAnimalPackage } from '@/src/review/types'

export const animal: DraftAnimalPackage & LegacyLocalReviewAnimalPackage = {
  ...animalDefinition,
  content: {
    'zh-CN': animalDefinition.content['zh-CN']!,
    en: animalDefinition.content.en!,
  },
  assets: {
    model: animalAssetUrl(animalDefinition.id, 'model.glb'),
    modelBytes: 2561844,
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
    badge: '现代动物草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      '源模型无动画 clip，暂以静态姿势展示',
      '缩略图与海报已从模型渲染',
    ],
    accent: {"strong":"#b87333","soft":"#f4e0c8"},
  },
}
