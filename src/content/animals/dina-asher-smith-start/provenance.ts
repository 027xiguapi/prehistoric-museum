import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dina Asher-Smith (Block Start) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/DinaAsherSmith/start/start.glb",
      accessedOn: '2026-08-20',
      sha256: '0baa94092a4a870f181930cd49c859fe8245cf849cea3a654525d293b6ea5521',
      bytes: 13687296,
    },
    runtime: {
      sha256: 'facb3e1df7d38dacf1609ed04aa8b6e4d2d25c0822b72186a172f1bc952b2632',
      bytes: 7210272,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.23, yaw 270°; height ≈ 2 m, length ≈ 1.869 m).',
      'Kept the idle animation clip “All Animations” (18.033s, 418 channels).',
    ],
    redistributionAllowed: true,
  },
]
