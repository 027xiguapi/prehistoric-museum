import type { DraftAnimalDefinition } from '@/src/content/types'
import { en } from '@/src/content/animals/saber-toothed-tiger/content.en'
import { zhCN } from '@/src/content/animals/saber-toothed-tiger/content.zh-CN'
import { provenance } from '@/src/content/animals/saber-toothed-tiger/provenance'

// Draft pilot package: the model, bilingual copy and rendered previews are in
// place; the final Serena narration audio, licence confirmation and owner
// review gates are still open, so the animal stays out of production lists.
export const animalDefinition: DraftAnimalDefinition = {
  id: 'saber-toothed-tiger',
  status: 'draft',
  kind: 'other-prehistoric-animal',
  habitat: 'land',
  atmosphere: 'ice',
  content: {
    'zh-CN': zhCN,
    en,
  },
  presentation: {
    initialYawDegrees: 0,
    landscapeVerticalOffset: 0,
    portraitVerticalOffset: 0,
    safeAreaPadding: 0.08,
    shadow: 'ground',
    shadowOpacity: 0.56,
    shadowScale: 0.7,
  },
  narration: {
    'zh-CN': {
      status: 'ready',
      sourcePath: 'audio/narration.zh-CN.mp3',
      mimeType: 'audio/mpeg',
    },
    en: {
      status: 'ready',
      sourcePath: 'audio/narration.en.mp3',
      mimeType: 'audio/mpeg',
    },
  },
  provenance,
  draftNotes: [
    '试点草稿：模型已按米制规范化并落地（高约 0.919 米、长约 1.9 米）。',
    '源模型没有动画 clip，当前以静态姿势展示；后续再决定是否补充待机动画。',
    '源模型来自 1048动物 素材包，许可未确认，标记为不可再分发。',
    '旁白音频、缩略图/海报审校与所有者批准流程未完成。',
  ],
}
