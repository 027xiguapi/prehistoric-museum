import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Whale (owner-supplied modern-animal model)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-whale-source-attribution',
      accessedOn: '2026-08-21',
      sha256: '94d5c9d0ff66cecd4ea9da200345b40b7654fae013cf039ece7b20ab2fa13a9c',
      bytes: 12056888,
    },
    runtime: {
      sha256: '2af63324d8641b0053ad533a58a60c87e2d48b1ef54fdd7a90af5f248aacc8f5',
      bytes: 11926580,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.0105; height ≈ 3.354 m, length ≈ 15 m).',
      'Kept the idle animation clip “Swimming” (4.125s, 9 channels).',
    ],
    redistributionAllowed: false,
  },
]
