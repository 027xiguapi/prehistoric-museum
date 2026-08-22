import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Raccoon (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Raccoon/model.glb",
      accessedOn: '2026-08-20',
      sha256: '7d06236300d46b7805d66c86b305700946fb7f1166d05e6f3c9b816a8116d05e',
      bytes: 2299536,
    },
    runtime: {
      sha256: '6946ede997056b825c7f8d825f5e7c05ffe483af973d49912475bfef8c2124f5',
      bytes: 1767208,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.40; height ≈ 0.507 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “Animation” (15s, 294 channels).',
    ],
    redistributionAllowed: true,
  },
]
