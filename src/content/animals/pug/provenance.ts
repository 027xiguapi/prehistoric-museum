import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Pug (owner-supplied “1048动物” drop, 哈巴狗)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-pug-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '7d39fe18bc6b79cbf190efec8c5c61c06897e4c65d6f48b05a7f9f1fc15c0662',
      bytes: 2684052,
    },
    runtime: {
      sha256: '713516b691846eb4e9f39e31f7aedefe2cc64329d6c0b743233ac00dce52c41f',
      bytes: 2113096,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.466 m, length ≈ 0.55 m).',
      'Kept the idle animation clip “Animation_Armature” (5.5s, 249 channels).',
    ],
    redistributionAllowed: true,
  },
]
