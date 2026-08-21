import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "P. V. Sindhu (Rally) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/PVSindhu/rally/rally.glb",
      accessedOn: '2026-08-20',
      sha256: '21e4cca5e7fffa5f551bb17fae2fc604bf7b3fdc562d0cc06a0f61ce30cfee1c',
      bytes: 16189084,
    },
    runtime: {
      sha256: '931ed909710817c3fa0a72c893d6b04e85f55ea30e0f7eac5f2eea2665028ca9',
      bytes: 7479428,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.59; height ≈ 0.947 m, length ≈ 2.1 m).',
      'Kept the idle animation clip “All Animations” (9.2s, 486 channels).',
    ],
    redistributionAllowed: true,
  },
]
