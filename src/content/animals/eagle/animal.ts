import posterPortraitUrl from '@/src/content/animals/eagle/images/poster-portrait.webp'
import posterUrl from '@/src/content/animals/eagle/images/poster.webp'
import thumbnailUrl from '@/src/content/animals/eagle/images/thumbnail.webp'

// Draft preview only: borrow the pteranodon backdrop until a eagle scene exists.
import landscapeUrl from '@/src/content/animals/pteranodon/backgrounds/landscape.webp'
import portraitUrl from '@/src/content/animals/pteranodon/backgrounds/portrait.webp'

import { imageUrl } from '@/src/content/create-runtime-animal'
import { animalAssetUrl } from '@/src/content/remote-assets'
import { animalDefinition } from '@/src/content/animals/eagle/package'
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
    modelBytes: 689984,
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
    badge: '现代动物草稿',
    status: 'draft-preview',
    note: '模型、双语文案与预览图已就位；旁白音频、许可确认与所有者审校未完成。',
    checks: [
      '模型已按米制规范化并落地',
      '待机动画 clip “CINEMA_4D_Principal” 待真实浏览器验收',
      '缩略图与海报已从模型渲染',
    ],
    accent: {"strong":"#6b5430","soft":"#e9dfc8"},
  },
}
