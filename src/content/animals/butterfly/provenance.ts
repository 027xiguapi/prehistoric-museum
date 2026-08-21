import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Butterfly (owner-supplied modern-animal model)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-butterfly-source-attribution',
      accessedOn: '2026-08-21',
      sha256: '30ca36c15730c7bb49572cca2cae2be64bfb23eaacb3a8af67cbe0ddd04d6aa8',
      bytes: 8201644,
    },
    runtime: {
      sha256: 'eec1143710682356e654c50aa40105006c2b9352c7fb59cc88ea11796c39089b',
      bytes: 5197588,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.6899; height ≈ 0.034 m, length ≈ 0.06 m).',
      'Kept the idle animation clip “Animation” (9.6s, 214 channels).',
    ],
    redistributionAllowed: false,
  },
]
