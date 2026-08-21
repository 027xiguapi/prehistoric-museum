import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Shining Dung Scarab (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/shining_ball_scarab_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7957cf2e8e7e70d82e6a784a207e4479a3d6c36306b7474738dd407854cbb07d',
      bytes: 2881932,
    },
    runtime: {
      sha256: '58885194f192a91747820c05a4bea18c793828d2ca08f21eb03e4d972423a3be',
      bytes: 1329624,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×6.68; height ≈ 0.025 m, length ≈ 0.044 m).',
      'Kept the idle animation clip “New animation” (12s, 145 channels).',
    ],
    redistributionAllowed: true,
  },
]
