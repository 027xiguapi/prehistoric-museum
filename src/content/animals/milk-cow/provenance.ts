import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dairy Cow (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/MilkCow/MilkCow.glb",
      accessedOn: '2026-08-20',
      sha256: '9d5ccc0dccb696b9a3f2ec98da75f4f17b84835925ac88675cba10649496f9a7',
      bytes: 7025040,
    },
    runtime: {
      sha256: '2affe2c0d9562e39c48e6a65d9a05098ff444882bb21b561efe28b9a42fa3316',
      bytes: 5097760,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.99; height ≈ 1.411 m, length ≈ 2.6 m).',
      'Kept the idle animation clip “All Animations” (11s, 120 channels).',
    ],
    redistributionAllowed: true,
  },
]
