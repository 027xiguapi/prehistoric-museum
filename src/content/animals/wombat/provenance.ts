import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Wombat (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Wombat.glb",
      accessedOn: '2026-08-20',
      sha256: '9c6ee6b45199e2b3ce719c01aea342836a3501ddd778485f194ab680e5ad65b7',
      bytes: 10219144,
    },
    runtime: {
      sha256: 'c2c7ac82081f9fdd96a67c0f7a48e1b49d15b08a181a0ac1a54d47feb8498189',
      bytes: 4963748,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.68; height ≈ 0.613 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “All Animations” (9.633s, 204 channels).',
    ],
    redistributionAllowed: true,
  },
]
