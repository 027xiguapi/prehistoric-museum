import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Persian Cat (owner-supplied “1048动物” drop, 波斯猫glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-persian-cat-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '97c58b22c45755c2719cf511f093b96031f5012aa8719d1d9677a42a93e83823',
      bytes: 9694584,
    },
    runtime: {
      sha256: 'ca05f8bfa1873950a7d9ed75caee94c28dfaa6e98c0e294c9de249ad8c987206',
      bytes: 6566060,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.63; height ≈ 0.399 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “All Animations” (10s, 172 channels).',
    ],
    redistributionAllowed: true,
  },
]
