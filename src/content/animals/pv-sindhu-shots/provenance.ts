import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "P. V. Sindhu (Shots) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/PVSindhu/shots/shots.glb",
      accessedOn: '2026-08-20',
      sha256: 'c40785bc231e05497643f73aabf6c9619ed47f9f3a399733f8b71e252b6e10a1',
      bytes: 12970828,
    },
    runtime: {
      sha256: '994d8ca1706f50cf50c8b76ebfa4d3a4e37911a6e071550233e1db3ac2904df7',
      bytes: 7414536,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.40; height ≈ 0.619 m, length ≈ 2.1 m).',
      'Kept the idle animation clip “All Animations” (5.033s, 486 channels).',
    ],
    redistributionAllowed: true,
  },
]
