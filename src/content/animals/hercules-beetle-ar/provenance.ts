import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Hercules Beetle (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/hercules_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7464195159646ef3931de18ca6df41c4bd604934b48b962506beebcadb829362',
      bytes: 2223704,
    },
    runtime: {
      sha256: '361096c091f8f5c0520567ca1feb97e0826945aae023d83a04758982db24c0d0',
      bytes: 1054324,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.00; height ≈ 0.069 m, length ≈ 0.17 m).',
      'Kept the idle animation clip “hurkyury” (12s, 119 channels).',
    ],
    redistributionAllowed: true,
  },
]
