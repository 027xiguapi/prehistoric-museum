import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Rabbit (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Rabbit/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7e71ab974f45834564703011559a1ddca71a08de475343695449914b4f26c085',
      bytes: 8429764,
    },
    runtime: {
      sha256: '8f5d3754ad9ace4de06ecc4d8ad140fcf43b58db13cd36edb86abff21081369e',
      bytes: 6849468,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.08; height ≈ 0.45 m, length ≈ 0.35 m).',
      'Kept the idle animation clip “All Animations” (10.5s, 105 channels).',
    ],
    redistributionAllowed: true,
  },
]
