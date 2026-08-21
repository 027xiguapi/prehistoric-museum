import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Brown Bear (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/BrownBear/model.glb",
      accessedOn: '2026-08-20',
      sha256: '6428246400ec3bade9f5553c6238f4fe54743a6968102c103b3be31bb825a272',
      bytes: 2445900,
    },
    runtime: {
      sha256: '6b492e56141c3921f51816894d9ee946f2a7b11d809acd43e6ca014486155f54',
      bytes: 1076940,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.99; height ≈ 1.576 m, length ≈ 2.4 m).',
      'Kept the idle animation clip “Animation” (24.333s, 258 channels).',
    ],
    redistributionAllowed: true,
  },
]
