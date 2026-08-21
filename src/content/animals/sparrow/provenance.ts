import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Sparrow (owner-supplied “1048动物” drop, 麻雀gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sparrow-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '6ad9c6328ecdd5cd5515c794e9a8268eba36f83436c542ed62e2b36326df2d02',
      bytes: 221712,
    },
    runtime: {
      sha256: '086025db4b31f7b176a863bbb58d7f361a3621445d1e1bfb71fe57f9f5fb3088',
      bytes: 1949588,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.51; height ≈ 0.121 m, length ≈ 0.165 m).',
      'Kept the idle animation clip “Sparrow_hover” (6.833s, 202 channels).',
    ],
    redistributionAllowed: true,
  },
]
