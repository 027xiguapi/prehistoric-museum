import type { DraftAnimalDefinition } from '@/src/content/types'
import { en } from '@/src/content/animals/crab/content.en'
import { zhCN } from '@/src/content/animals/crab/content.zh-CN'
import { provenance } from '@/src/content/animals/crab/provenance'

// Draft pilot package: the model, bilingual copy and rendered previews are in
// place; the final Serena narration audio, licence confirmation and owner
// review gates are still open, so the animal stays out of production lists.
export const animalDefinition: DraftAnimalDefinition = {
  id: 'crab',
  status: 'draft',
  kind: 'other-prehistoric-animal',
  habitat: 'water',
  atmosphere: 'underwater',
  content: {
    'zh-CN': zhCN,
    en,
  },
  presentation: {
    initialYawDegrees: 180,
    landscapeVerticalOffset: 0,
    portraitVerticalOffset: 0,
    safeAreaPadding: 0.08,
    shadow: 'none',
  },
  animation: {
    clip: "crab_run_anim",
    loop: 'repeat',
    speed: 1,
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
    '试点草稿：模型已按米制规范化并落地（高约 0.119 米、长约 0.217 米，初始朝向 180°）。',
    '待机动画 clip 名为 “crab_run_anim”，在真实浏览器中验证动作幅度后再决定是否重命名或调速度。',
    '源模型来自 1048动物 素材包，许可未确认，标记为不可再分发。',
    '旁白音频、缩略图/海报审校与所有者批准流程未完成。',
  ],
}
