import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Kangaroo (owner-supplied “1048动物” drop, 袋鼠)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-kangaroo-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '0736e14296e4ae0ad1613384847b540bd7b332b2396fa7a53862b56cfc098429',
      bytes: 3751408,
    },
    runtime: {
      sha256: '71cfbb3f7487ba532a3e65e3ec857441196c8576b9ae461c4360c8daf4777f1a',
      bytes: 2107676,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.84; height ≈ 1.005 m, length ≈ 1.7 m).',
      'Kept the idle animation clip “kan_idle” (9.958s, 309 channels).',
    ],
    redistributionAllowed: true,
  },
]
