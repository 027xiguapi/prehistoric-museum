import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Great Dane (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/GreatDane/GreatDane.glb",
      accessedOn: '2026-08-20',
      sha256: 'dadff5f02d210dd7a5620727e6e67244e5cc1e06af2468178c87053171e86609',
      bytes: 6812356,
    },
    runtime: {
      sha256: '093fc431ef07950bee73e15ba13158867ee8d34f4d9b1f6fd04605d984c11c34',
      bytes: 4037668,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.19; height ≈ 1.271 m, length ≈ 1.5 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 384 channels).',
    ],
    redistributionAllowed: true,
  },
]
