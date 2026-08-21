import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Rabbit (owner-supplied “1048动物” drop, 兔子)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-rabbit-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'fdcd0b71e64f55e4c59abb2ae9475d3ae1584c66d198f8aaac51a5ae9dcfc0ae',
      bytes: 8816556,
    },
    runtime: {
      sha256: 'cfe79ef034ddad1b4375bb36611784551e173f2d3b9a63b8ca95a63ac9083e8e',
      bytes: 6803144,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.86; height ≈ 0.45 m, length ≈ 0.35 m).',
      'Kept the idle animation clip “All Animations_Armature” (10.5s, 105 channels).',
    ],
    redistributionAllowed: true,
  },
]
