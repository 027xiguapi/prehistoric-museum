import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Arabian Horse (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/ArabianHorse/model.glb",
      accessedOn: '2026-08-20',
      sha256: '1aa3e8fedb0775c43424bef0d0a01ebf7b718ff1b982dd135bbeafc265fb3f3e',
      bytes: 1669100,
    },
    runtime: {
      sha256: '551dd9b7ddfd16999201f752a72aa2b63917b388ece89425bc3a90c43c2e44b6',
      bytes: 727720,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.82; height ≈ 1.739 m, length ≈ 2.2 m).',
      'Kept the idle animation clip “Animation” (17.6s, 204 channels).',
    ],
    redistributionAllowed: true,
  },
]
