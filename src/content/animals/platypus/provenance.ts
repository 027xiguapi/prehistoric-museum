import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Platypus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Platypus.glb",
      accessedOn: '2026-08-20',
      sha256: '62ca9eb6877e88b2bc92e7f216eaa9f7a638f40c0c02e96c8a68e941d9806dab',
      bytes: 6071488,
    },
    runtime: {
      sha256: '7ecc6a80fe7beedb59860cd370a9bfb09c8cbab431a164fc7ffe6299f0eaf81f',
      bytes: 3884112,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.80; height ≈ 0.276 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “All Animations” (10s, 360 channels).',
    ],
    redistributionAllowed: true,
  },
]
