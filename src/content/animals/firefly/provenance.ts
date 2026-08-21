import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Firefly (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/firefly/model.glb",
      accessedOn: '2026-08-20',
      sha256: '0bcc4b4e0e79bbca7dfbbe052866ea8535da755a56bff3c58e5ea207eb4a6574',
      bytes: 2857628,
    },
    runtime: {
      sha256: '0ef3e9c0cb4a0b077061fda3080f8efbfaa519e8897fbd2e3aa80753f96395c3',
      bytes: 1603764,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.34; height ≈ 0.007 m, length ≈ 0.025 m).',
      'Kept the idle animation clip “heike” (10s, 138 channels).',
    ],
    redistributionAllowed: true,
  },
]
