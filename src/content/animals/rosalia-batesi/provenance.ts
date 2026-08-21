import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Rosalia Batesi Longicorn Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/rosalia_batesi/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7dad46f22bf2eccf70689c409cd9b492e69e7723f43bed14ea8375add88be556',
      bytes: 3334116,
    },
    runtime: {
      sha256: 'ff459234ff40a1a05edc8989791c94ce6b7b03df16aa212f233b3f1e269044c9',
      bytes: 1438604,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.87; height ≈ 0.011 m, length ≈ 0.039 m).',
      'Kept the idle animation clip “ruriboshi” (12.033s, 161 channels).',
    ],
    redistributionAllowed: true,
  },
]
