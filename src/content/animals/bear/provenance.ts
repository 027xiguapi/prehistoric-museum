import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Brown Bear (owner-supplied “1048动物” drop, 熊gltf格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-bear-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '00d6946a0b5448b70d0acc882eba3dc192efcfb0340feca73f604e77f8c08dcc',
      bytes: 321132,
    },
    runtime: {
      sha256: '0720ec4cce83b1116711449ed9d784c50a4dbfa0ce3af9b14bae61bc6bd97667',
      bytes: 6666272,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.02; height ≈ 1.425 m, length ≈ 2 m).',
      'Kept the idle animation clip “metarig|metarigAction” (8s, 269 channels).',
    ],
    redistributionAllowed: true,
  },
]
