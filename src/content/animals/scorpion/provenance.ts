import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Scorpion (owner-supplied “1048动物” drop, 蝎子)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-scorpion-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '77ac1b00bb144801550003bb1d8318a0409977d848da67fd4943bf60e1ea8e4a',
      bytes: 1485160,
    },
    runtime: {
      sha256: '847f38607d8b8e0590e1c4d36d21aee8e922a595e66dd58cf298d1c56873f851',
      bytes: 921696,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.28; height ≈ 0.067 m, length ≈ 0.12 m).',
      'Kept the idle animation clip “Attackidle_nyi” (0.917s, 234 channels).',
    ],
    redistributionAllowed: true,
  },
]
