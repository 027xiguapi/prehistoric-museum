import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Cheetah (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Cheetah/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'cb5f29e0a15c20bcafbbd5c17f3fd991aa7305a5ed891da646f19961b312d18c',
      bytes: 2449304,
    },
    runtime: {
      sha256: '742f6ac989af69b7f770a3f355c4e1c27fff9d462d79d96681bcf1f27de91e31',
      bytes: 2081660,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.22; height ≈ 1.088 m, length ≈ 2 m).',
      'Kept the idle animation clip “Animation” (15s, 267 channels).',
    ],
    redistributionAllowed: true,
  },
]
