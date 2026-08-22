import { definePublishedAnimal } from '@/src/content/types'
import { en } from '@/src/content/animals/mammoth/content.en'
import { zhCN } from '@/src/content/animals/mammoth/content.zh-CN'
import { provenance } from '@/src/content/animals/mammoth/provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'mammoth',
  status: 'published',
  kind: 'other-prehistoric-animal',
  habitat: 'land',
  atmosphere: 'ice',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 2.2,
    initialYawDegrees: -35,
    safeAreaPadding: 0.12,
    shadow: 'ground',
    toneMappingExposure: 1.75,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 0.9,
  },
  narration: {
    'zh-CN': {
      status: 'ready',
      sourcePath: 'audio/narration.zh-CN.mp3',
      mimeType: 'audio/mpeg',
      speaker: 'Serena',
      language: 'Chinese',
      humanReviewStatus: 'approved',
    },
    en: {
      status: 'ready',
      sourcePath: 'audio/narration.en.mp3',
      mimeType: 'audio/mpeg',
      speaker: 'Serena',
      language: 'English',
      humanReviewStatus: 'approved',
    },
  },
  provenance,
})
