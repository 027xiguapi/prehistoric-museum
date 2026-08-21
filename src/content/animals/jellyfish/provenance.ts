import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Jellyfish (owner-supplied modern-animal model)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-jellyfish-source-attribution',
      accessedOn: '2026-08-21',
      sha256: '13fd01ba169bb7ad7129b581e4229a424181527d2a55c16374a95139b9dee6f8',
      bytes: 6565932,
    },
    runtime: {
      sha256: 'f09434e4cae69c0894109f03d1192d29522046fbf3b5e7e396d9decaf74bea5f',
      bytes: 5669480,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.0404; height ≈ 0.211 m, length ≈ 0.228 m).',
      'The source model contains no animation clip; the draft renders as a static pose.',
    ],
    redistributionAllowed: false,
  },
]
