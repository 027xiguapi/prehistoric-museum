import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Eagle (owner-supplied modern-animal model)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-eagle-source-attribution',
      accessedOn: '2026-08-21',
      sha256: 'a72a2176fa4d189f14869b375ef0983b6103dad58e79142f1efc7faa762ca514',
      bytes: 886568,
    },
    runtime: {
      sha256: '4110c2989d0f3c962fab1ff1b1ef78d5c47152c1d2d8910a25f31501cbf82c24',
      bytes: 689984,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.0517; height ≈ 1.814 m, length ≈ 2 m).',
      'Kept the idle animation clip “CINEMA_4D_Principal” (0.6s, 98 channels).',
    ],
    redistributionAllowed: false,
  },
]
