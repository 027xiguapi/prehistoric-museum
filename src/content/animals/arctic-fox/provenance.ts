import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Arctic Fox (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Nordic/ArcticFox/arcticfox.glb",
      accessedOn: '2026-08-20',
      sha256: '593d89f6b71ea6bd247e8a5ee1ec045321187d1983610e5d0c6b1129e220fc47',
      bytes: 9583524,
    },
    runtime: {
      sha256: '6df7c27b67db21f6ab88f17e3f4cd8b444a7c1a2bef2e39f16ace3155cfcc850',
      bytes: 5302404,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.16, yaw 45°; height ≈ 0.637 m, length ≈ 1.324 m).',
      'Kept the idle animation clip “All Animations” (12.233s, 120 channels).',
    ],
    redistributionAllowed: true,
  },
]
