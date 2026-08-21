import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Bengal Cat (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Bengal/Bengal.glb",
      accessedOn: '2026-08-20',
      sha256: '8c2510248abe4374d829dbb66bff71b6ddbb3f5da9a947ff92bd9e591ae79417',
      bytes: 5654828,
    },
    runtime: {
      sha256: '72d898671a63be9638efaa5c48c55e89f400400370c0f46a45ea0637ee4d9567',
      bytes: 3499676,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.29; height ≈ 0.557 m, length ≈ 0.7 m).',
      'Kept the idle animation clip “All Animations” (10.067s, 219 channels).',
    ],
    redistributionAllowed: true,
  },
]
