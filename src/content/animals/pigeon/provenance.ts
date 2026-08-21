import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Pigeon (owner-supplied “1048动物” drop, 鸽子gltf格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-pigeon-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '1b812ab658396750fed1d4115cb52af278734b914c1fba8133c58899aa971d0c',
      bytes: 250807,
    },
    runtime: {
      sha256: 'f16b24e292b9ffc920fe791a0c622c32befd48c36904cd312ee6fac35c4b6acc',
      bytes: 1606916,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.46; height ≈ 0.414 m, length ≈ 0.594 m).',
      'Kept the idle animation clip “fly” (19.458s, 239 channels).',
    ],
    redistributionAllowed: true,
  },
]
