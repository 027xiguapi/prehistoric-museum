import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Zebra (owner-supplied “1048动物” drop, 斑马)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-zebra-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'b6076b742ea5f21b4e54f294c2574a52c6a95255fd797117ca2d263dca316aed',
      bytes: 8659504,
    },
    runtime: {
      sha256: '0cfd22b378ef1ef553225eec89b95a1d9d9859c411b9f0b5c0c35a8461697425',
      bytes: 5042204,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.12; height ≈ 2.333 m, length ≈ 2.5 m).',
      'Kept the idle animation clip “All Animations_skeleton #0.001” (10.333s, 414 channels).',
    ],
    redistributionAllowed: true,
  },
]
