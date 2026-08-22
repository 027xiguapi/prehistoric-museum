import type { DraftAnimalDefinition } from '@/src/content/types'
import { en } from '@/src/content/animals/whale/content.en'
import { zhCN } from '@/src/content/animals/whale/content.zh-CN'
import { provenance } from '@/src/content/animals/whale/provenance'

// Draft modern-animal package: the model, bilingual copy and rendered previews
// are in place; narration audio, licence confirmation and owner review gates
// are still open, so the animal stays out of production lists.
export const animalDefinition: DraftAnimalDefinition = {
  id: 'whale',
  status: 'draft',
  kind: 'modern-animal',
  habitat: 'water',
  atmosphere: 'underwater',
  content: {
    'zh-CN': zhCN,
    en,
  },
  presentation: {
    initialYawDegrees: 0,
    landscapeVerticalOffset: 0,
    portraitVerticalOffset: 0,
    safeAreaPadding: 0.08,
    shadow: 'none',
  },
  animation: {
    clip: "Swimming",
    loop: 'repeat',
    speed: 1,
  },
  narration: {
    'zh-CN': {
      status: 'pending-review',
      expectedPath: 'audio/narration.zh-CN.mp3',
      message: '等待 Qwen3-TTS Serena 中文旁白生成与人工听审。',
      gate: { id: 'final-narration', locale: 'zh-CN', reason: '旁白音频尚未生成。' },
    },
    en: {
      status: 'pending-review',
      expectedPath: 'audio/narration.en.mp3',
      message: 'Awaiting Qwen3-TTS Serena English narration and human review.',
      gate: { id: 'final-narration', locale: 'en', reason: 'Narration audio has not been generated yet.' },
    },
  },
  provenance,
  draftNotes: [
    '现代动物草稿：模型已按米制规范化并落地（高约 3.354 米、长约 15 米）。',
    '待机动画 clip 名为 “Swimming”，在真实浏览器中验证动作幅度后再决定是否重命名或调速度。',
    '源模型来自所有者提供的现代动物模型，许可未确认，标记为不可再分发。',
    '旁白音频、缩略图/海报审校与所有者批准流程未完成。',
  ],
}
