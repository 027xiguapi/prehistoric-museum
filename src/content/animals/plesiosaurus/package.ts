import { definePublishedAnimal } from '@/src/content/types'
import { en } from '@/src/content/animals/plesiosaurus/content.en'
import { zhCN } from '@/src/content/animals/plesiosaurus/content.zh-CN'
import { provenance } from '@/src/content/animals/plesiosaurus/provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'plesiosaurus',
  status: 'published',
  kind: 'marine-reptile',
  habitat: 'water',
  atmosphere: 'underwater',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    cameraLightScale: 2.2,
    initialYawDegrees: -90,
    landscapeHorizontalOffset: -0.04,
    landscapeVerticalOffset: 0.065,
    portraitHorizontalOffset: -0.04,
    portraitSafeAreaPadding: 0.05,
    portraitVerticalOffset: 0,
    safeAreaPadding: 0.09,
    shadow: 'none',
    toneMappingExposure: 1.3,
  },
  animation: {
    clip: 'Idle',
    loop: 'repeat',
    speed: 1,
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
