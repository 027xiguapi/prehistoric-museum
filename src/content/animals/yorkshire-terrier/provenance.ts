import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Yorkshire Terrier (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Yorkshireterrier/Yorkshireterrier.glb",
      accessedOn: '2026-08-20',
      sha256: '9f7900e38ea930b38cd7ed4dee15a68ef36e5b8f983ad24c6fe600244e97a5a9',
      bytes: 8129748,
    },
    runtime: {
      sha256: '4832949cd26d5de63bb4cc64833f2f92850d93dc9d1a66b00876b90b893c9419',
      bytes: 4357964,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.72; height ≈ 0.415 m, length ≈ 0.45 m).',
      'Kept the idle animation clip “All Animations” (9.167s, 162 channels).',
    ],
    redistributionAllowed: true,
  },
]
