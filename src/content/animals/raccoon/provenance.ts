import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Raccoon (owner-supplied “1048动物” drop, 浣熊)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-raccoon-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'c5250c0043e688a575c809d8c59bc53aa10b9bc5517bf7a7af32f10a5cadaf8b',
      bytes: 3440176,
    },
    runtime: {
      sha256: 'b2448cd5834279346f308ddca4df888a52accbc915f3d5cdfd6d44232f7c7315',
      bytes: 1288596,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.507 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “Animation_Armature.001” (15s, 297 channels).',
    ],
    redistributionAllowed: true,
  },
]
