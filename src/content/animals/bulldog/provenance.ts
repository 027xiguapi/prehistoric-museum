import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Bulldog (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Bulldog/Bulldog.glb",
      accessedOn: '2026-08-20',
      sha256: '2d4df048caa0d9534b015db70d637e5cd2a9616dea113fcdbb547cf7c24798b6',
      bytes: 4463556,
    },
    runtime: {
      sha256: '6d0b9e25eac8f4d48e60a3a38ee632c39aace81de58c9711cd5a5482729b555a',
      bytes: 1855712,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.00; height ≈ 0.463 m, length ≈ 0.7 m).',
      'Kept the idle animation clip “Take 001” (10s, 318 channels).',
    ],
    redistributionAllowed: true,
  },
]
