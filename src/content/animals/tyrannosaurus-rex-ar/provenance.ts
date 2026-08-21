import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Tyrannosaurus Rex (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Tyrannosa.glb",
      accessedOn: '2026-08-20',
      sha256: '41ea626e266396d6e9b825e8bbfd4cd5e19cc9bdf615c91af31b0bec7d1209f4',
      bytes: 9549588,
    },
    runtime: {
      sha256: '5b6c045f93d6000bb3e9dd8c1ceeaf68c7b7fcd4c24daf9b39e34481eecc8f2d',
      bytes: 7336848,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.57, yaw 270°; height ≈ 7.383 m, length ≈ 12.3 m).',
      'Kept the idle animation clip “All Animations” (10.833s, 177 channels).',
    ],
    redistributionAllowed: true,
  },
]
