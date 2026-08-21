import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Mallard (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/MallardDuck/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'b5c39205b3fa26d0639945efdbf28e497bcb987cbbd78b7732c44ed88e767443',
      bytes: 1796780,
    },
    runtime: {
      sha256: 'fa8beeb9e70fe56ec23978b626851e9ad9f3ad96c208aa1c01fd6b2d77df6027',
      bytes: 1574680,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.90; height ≈ 0.512 m, length ≈ 0.65 m).',
      'Kept the idle animation clip “Animation” (15s, 165 channels).',
    ],
    redistributionAllowed: true,
  },
]
