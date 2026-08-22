import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Santa Claus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/SantaClaus/model.glb",
      accessedOn: '2026-08-20',
      sha256: '22bcaadad48f6d8c8024ed8301c10a361a7ddfcefc992ebc5e588bf0e534cd1e',
      bytes: 1225684,
    },
    runtime: {
      sha256: '886ff8a32eafba2c62d965bacddcde6673ef321c65665218b85d489292be70d9',
      bytes: 287204,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.85; height ≈ 1.9 m, length ≈ 0.829 m).',
      'Kept the idle animation clip “_MED” (7.5s, 130 channels).',
    ],
    redistributionAllowed: true,
  },
]
