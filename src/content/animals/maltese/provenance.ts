import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Maltese (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Maltese/Maltese.glb",
      accessedOn: '2026-08-20',
      sha256: '4e257cd1236c6bd9d98f88f8bc3046498e1111fec38b01dc2904c88b99432598',
      bytes: 9978916,
    },
    runtime: {
      sha256: '06b17f0ac8553320446cd5c7b3b62abfefc20c1d24d47a0486559643fe89566a',
      bytes: 7246296,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.52; height ≈ 0.42 m, length ≈ 0.5 m).',
      'Kept the idle animation clip “All Animations” (8.667s, 156 channels).',
    ],
    redistributionAllowed: true,
  },
]
