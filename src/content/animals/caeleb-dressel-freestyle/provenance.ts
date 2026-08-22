import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Caeleb Dressel (Freestyle) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/CaelebDressel/freestyle/freestyle.glb",
      accessedOn: '2026-08-20',
      sha256: 'f2dfbbeab7c5c305861e070bc59988fac09afc954d544be459a51cd9b13b56cd',
      bytes: 11596440,
    },
    runtime: {
      sha256: '6b1586236333c49c302cb6af834e34bb29a841eda8401b90209a3f0b8daf8d74',
      bytes: 6442280,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.22; height ≈ 2.3 m, length ≈ 1.209 m).',
      'Kept the idle animation clip “inPlace” (9.3s, 429 channels).',
    ],
    redistributionAllowed: true,
  },
]
