import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Crow (owner-supplied “1048动物” drop, 乌鸦)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-crow-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'ffa2c1f5baea9e253efaf0b0fd66940a9d6361d4c114c1685b50a77ac01e109e',
      bytes: 24817744,
    },
    runtime: {
      sha256: '6b4c003842dc95b3ff65860fa17e3b865e5ab8b5697f8412b6107e1c9ee34001',
      bytes: 12329916,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.48; height ≈ 0.14 m, length ≈ 0.271 m).',
      'Kept the idle animation clip “Fly_land” (3.083s, 741 channels).',
    ],
    redistributionAllowed: true,
  },
]
