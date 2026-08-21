import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Sphynx Cat (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Sphynx/Sphynx.glb",
      accessedOn: '2026-08-20',
      sha256: '9648a7d558d61cc83e05c76ee1fe7ccb9d84a7d83cf89489f62ef0505cb23dfd',
      bytes: 9185180,
    },
    runtime: {
      sha256: '3180bbe62b7fe429f887bfe5d288cefb0cd6f4ed1dac81eca7dd0b33ad694741',
      bytes: 6294196,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.07; height ≈ 0.321 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “Take 001” (10s, 258 channels).',
    ],
    redistributionAllowed: true,
  },
]
