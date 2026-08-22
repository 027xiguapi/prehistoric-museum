import { definePublishedAnimal } from '@/src/content/types'
import { en } from '@/src/content/animals/rhamphorhynchus/content.en'
import { zhCN } from '@/src/content/animals/rhamphorhynchus/content.zh-CN'
import { provenance } from '@/src/content/animals/rhamphorhynchus/provenance'

export const animalDefinition = definePublishedAnimal({
  id: "rhamphorhynchus",
  status: 'published',
  kind: "pterosaur",
  habitat: "air",
  atmosphere: "air",
  content: { 'zh-CN': zhCN, en },
  presentation: {
    "cameraLightScale": 1.45,
    "initialYawDegrees": -15,
    "portraitSafeAreaPadding": 0.12,
    "preciseBounds": true,
    "safeAreaPadding": 0.08,
    "shadow": "none",
    "toneMappingExposure": 1.15
  },
  animation: {
    "clip": "Idle",
    "loop": "repeat",
    "speed": 1
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
