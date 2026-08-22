import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Anglerfish (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/AnglerFish/model.glb",
      accessedOn: '2026-08-20',
      sha256: '8f2b5cf7b6e72999b59abf3b60848bc66b9d48803bd2ba1995d6a0c52b993053',
      bytes: 3900656,
    },
    runtime: {
      sha256: 'fdc3b24c54441a2a55143543e19037c513e93f08f867896b17e0127a8aeb0f69',
      bytes: 2169828,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.29; height ≈ 0.298 m, length ≈ 0.5 m).',
      'Kept the idle animation clip “Animation” (44.1s, 202 channels).',
    ],
    redistributionAllowed: true,
  },
]
