import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Eurasian Lynx (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Nordic/Lynx/lynx.glb",
      accessedOn: '2026-08-20',
      sha256: '2515759b73e4572185c8f9e78953c9f0aaa59346e3ab9f1b0ae0743839aa0ab5',
      bytes: 6392544,
    },
    runtime: {
      sha256: '53e71f365dba46ab30c5f411ffd495f702563a407aaefe4f7271a3582d3cbb38',
      bytes: 2785180,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.07, yaw 45°; height ≈ 0.754 m, length ≈ 1.454 m).',
      'Kept the idle animation clip “Animation” (9.967s, 133 channels).',
    ],
    redistributionAllowed: true,
  },
]
