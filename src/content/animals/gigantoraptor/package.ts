import { definePublishedAnimal } from '@/src/content/types'
import { en } from '@/src/content/animals/gigantoraptor/content.en'
import { zhCN } from '@/src/content/animals/gigantoraptor/content.zh-CN'
import { provenance } from '@/src/content/animals/gigantoraptor/provenance'

export const animalDefinition = definePublishedAnimal({
  id: 'gigantoraptor',
  status: 'published',
  kind: 'dinosaur',
  habitat: 'land',
  atmosphere: 'plains',
  content: { 'zh-CN': zhCN, en },
  presentation: {
    initialYawDegrees: -90,
    safeAreaPadding: 0.14,
    shadow: 'ground',
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
