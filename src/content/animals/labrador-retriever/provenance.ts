import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Labrador Retriever (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/LabradorRetriever/model.glb",
      accessedOn: '2026-08-20',
      sha256: '5d4f6af86d205b1b0da8f48030f794db067dbacb9c57a3dd06be97f61554d974',
      bytes: 2003760,
    },
    runtime: {
      sha256: 'c7e8fd4794f77f91d2263589232da98d8bad1a911da216cf0e624f1c353c316a',
      bytes: 1243764,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.48; height ≈ 0.815 m, length ≈ 1.15 m).',
      'Kept the idle animation clip “Animation” (15s, 288 channels).',
    ],
    redistributionAllowed: true,
  },
]
