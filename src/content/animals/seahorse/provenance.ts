import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Seahorse (owner-supplied modern-animal model)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-seahorse-source-attribution',
      accessedOn: '2026-08-21',
      sha256: '67063e7102887481f562890d6ee374a9d2e623962b685916cd4bc93a71ed9253',
      bytes: 4207208,
    },
    runtime: {
      sha256: 'a0bb3991d24eb4f06fcc731b033b40e113af07c216275db75e30d736ccb5ff45',
      bytes: 2561844,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.0034; height ≈ 0.15 m, length ≈ 0.034 m).',
      'The source model contains no animation clip; the draft renders as a static pose.',
    ],
    redistributionAllowed: false,
  },
]
