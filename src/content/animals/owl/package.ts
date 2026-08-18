import type { DraftAnimalDefinition } from '../../types'
import { en } from './content.en'
import { zhCN } from './content.zh-CN'
import { provenance } from './provenance'

// Draft pilot package: the model, bilingual copy and rendered previews are in
// place; the final Serena narration audio, licence confirmation and owner
// review gates are still open, so the animal stays out of production lists.
export const animalDefinition: DraftAnimalDefinition = {
  id: 'owl',
  status: 'draft',
  kind: 'other-prehistoric-animal',
  habitat: 'air',
  atmosphere: 'air',
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
    clip: "fly fast lol",
    loop: 'repeat',
    speed: 1,
  },
  narration: {
    'zh-CN': {
      status: 'pending-review',
      expectedPath: 'audio/narration.zh-CN.mp3',
      message: '等待 Qwen3-TTS Serena 中文旁白生成与人工听审。',
      gate: {
        id: 'final-narration',
        locale: 'zh-CN',
        reason: '旁白音频尚未生成。',
      },
    },
    en: {
      status: 'pending-review',
      expectedPath: 'audio/narration.en.mp3',
      message: 'Awaiting Qwen3-TTS Serena English narration and human review.',
      gate: {
        id: 'final-narration',
        locale: 'en',
        reason: 'Narration audio has not been generated yet.',
      },
    },
  },
  provenance,
  draftNotes: [
    '试点草稿：模型已按米制规范化并落地（高约 0.576 米、长约 0.6 米）。',
    '待机动画 clip 名为 “fly fast lol”，在真实浏览器中验证动作幅度后再决定是否重命名或调速度。',
    '源模型来自 1048动物 素材包，许可未确认，标记为不可再分发。',
    '旁白音频、缩略图/海报审校与所有者批准流程未完成。',
  ],
}
