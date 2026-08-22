import { definePublishedAnimal } from '@/src/content/types'
import { en } from '@/src/content/animals/pteranodon/content.en'
import { zhCN } from '@/src/content/animals/pteranodon/content.zh-CN'
import { provenance } from '@/src/content/animals/pteranodon/provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'pteranodon',
  status: 'published',
  kind: 'pterosaur',
  habitat: 'air',
  atmosphere: 'air',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 1.5,
    initialYawDegrees: -20,
    safeAreaPadding: 0.05,
    shadow: 'none',
    toneMappingExposure: 1.35,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 0.7,
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
