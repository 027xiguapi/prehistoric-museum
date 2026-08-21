import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Emperor Penguin (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/EmperorPenguin/model.glb",
      accessedOn: '2026-08-20',
      sha256: '3da0c34231a3053de3a1b4b27668a21419ea529c46bbff920c0fd14f927cab31',
      bytes: 1736640,
    },
    runtime: {
      sha256: '148881f8ac5378122da0aba7d59d990a052cc2fbc89431446adb8fa1d94bbb36',
      bytes: 1007256,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.09; height ≈ 1.2 m, length ≈ 0.647 m).',
      'Kept the idle animation clip “Animation” (23.733s, 162 channels).',
    ],
    redistributionAllowed: true,
  },
]
