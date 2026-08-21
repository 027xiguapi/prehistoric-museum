import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Coyote (owner-supplied “1048动物” drop, 郊狼glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-coyote-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '5f4c848f51f90513672c177666936cc60a047a88bb5a0059b0229f6e76789a1d',
      bytes: 8403168,
    },
    runtime: {
      sha256: '701018ae85cd3943d2aae010edb9ae041f9816dddf5cdcf10ac5b39fa2d6f016',
      bytes: 5909472,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.89; height ≈ 0.78 m, length ≈ 1.25 m).',
      'Kept the idle animation clip “All Animations” (12s, 127 channels).',
    ],
    redistributionAllowed: true,
  },
]
