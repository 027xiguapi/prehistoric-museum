import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Woodpecker (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Nordic/Woodpecker/woodpecker.glb",
      accessedOn: '2026-08-20',
      sha256: '4bda8d4387894c799bcf9afa076c6d9363180f28a3db1c6c0286aa0cc41a05f6',
      bytes: 4824180,
    },
    runtime: {
      sha256: '04741119f53cd365107717fc6087db149bca971a3b0f42b98c542651e7f1669c',
      bytes: 2605624,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.28; height ≈ 0.4 m, length ≈ 0.166 m).',
      'Kept the idle animation clip “Animation” (11.967s, 134 channels).',
    ],
    redistributionAllowed: true,
  },
]
