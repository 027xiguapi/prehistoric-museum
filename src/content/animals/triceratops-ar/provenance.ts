import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Triceratops (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Triceratop.glb",
      accessedOn: '2026-08-20',
      sha256: '6bd56c45c8ae4b4c8be947bb294c9ee9f5e76b17a9f221732573604536ce35d1',
      bytes: 9901644,
    },
    runtime: {
      sha256: '671cacf0ac16667b3dbbf4e43ffda6cd164368104a3cdacdf114de64b666e171',
      bytes: 7781212,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.25, yaw 90°; height ≈ 4.582 m, length ≈ 9 m).',
      'Kept the idle animation clip “All Animations” (9.1s, 120 channels).',
    ],
    redistributionAllowed: true,
  },
]
