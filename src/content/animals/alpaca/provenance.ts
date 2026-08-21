import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Alpaca (owner-supplied “1048动物” drop, 羊驼)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-alpaca-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'bfb50d0d62039ec2ee885a3fca517fd6aa334649414435acdbe3d37f11258ae8',
      bytes: 8083148,
    },
    runtime: {
      sha256: '0a3bfe5fccebc1d426e9185d2de9caccc43ec8ea8ea2d2c52c59c59830418385',
      bytes: 4348408,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.26; height ≈ 1.6 m, length ≈ 1.354 m).',
      'Kept the idle animation clip “All Animations_skeleton #0” (9.958s, 138 channels).',
    ],
    redistributionAllowed: true,
  },
]
