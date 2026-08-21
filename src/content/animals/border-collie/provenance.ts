import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Border Collie (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Bordercollie/Bordercollie.glb",
      accessedOn: '2026-08-20',
      sha256: '0bd1ad34b21a7e7d9c618fc385da63cffd326e88fb69a3f14a0dedb3d7d33b8a',
      bytes: 9048056,
    },
    runtime: {
      sha256: '6e6f690ac6eeec700d4dc2d5ab336d45900c0ba849f765da2830b6128c547551',
      bytes: 6596496,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.98; height ≈ 0.73 m, length ≈ 1.05 m).',
      'Kept the idle animation clip “All Animations” (10.667s, 126 channels).',
    ],
    redistributionAllowed: true,
  },
]
