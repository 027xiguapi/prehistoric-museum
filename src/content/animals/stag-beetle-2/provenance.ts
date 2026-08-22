import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Stag Beetle (Model Two) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/stag_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'df760270d17927efb9a63c9dc72ffc966205e2867712b5492692e5f66ce7da50',
      bytes: 3367636,
    },
    runtime: {
      sha256: '1258644c7efe23003e5802d9e97906eb2d82983a3bf40f8bfc4b59bf34bdcf0f',
      bytes: 2097792,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.27, yaw 180°; height ≈ 0.014 m, length ≈ 0.08 m).',
      'Kept the idle animation clip “noko” (12s, 136 channels).',
    ],
    redistributionAllowed: true,
  },
]
