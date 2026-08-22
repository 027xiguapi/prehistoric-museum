import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Emu (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Emu.glb",
      accessedOn: '2026-08-20',
      sha256: 'e069e204a0b047cd18fffb23153d8d9be8fa4fbe1403309dd88847694bd74640',
      bytes: 8869280,
    },
    runtime: {
      sha256: '1cb44cddd39a4e18d9e555075704bc19a44ef691858de41c5528afc3c411f921',
      bytes: 4278192,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.16; height ≈ 1.629 m, length ≈ 1.7 m).',
      'Kept the idle animation clip “All Animations” (14.958s, 231 channels).',
    ],
    redistributionAllowed: true,
  },
]
