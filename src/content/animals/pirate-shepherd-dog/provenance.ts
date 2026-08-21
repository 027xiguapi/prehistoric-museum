import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "German Shepherd (owner-supplied “1048动物” drop, 海盗牧羊犬glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-pirate-shepherd-dog-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '7a4be31a6f15c9be21ec201bb1bd929bb2fc04f0eb8e75f793a5a28077269f0b',
      bytes: 8451340,
    },
    runtime: {
      sha256: '20daf3d8e9f242741b26bf3f0dd6271452a68905a3ebaa6dab419b9bc47848c9',
      bytes: 5449436,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.11; height ≈ 0.865 m, length ≈ 1.2 m).',
      'Kept the idle animation clip “All Animations” (11.933s, 351 channels).',
    ],
    redistributionAllowed: true,
  },
]
