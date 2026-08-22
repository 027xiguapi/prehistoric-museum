import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Shark (owner-supplied “1048动物” drop, 鲨鱼glb格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-shark-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '5272dd6b14b802f7f647e9c1392bf8fe3da8e4837ebd16d93768b4155d52d18f',
      bytes: 17046044,
    },
    runtime: {
      sha256: 'bfd336f3f115f2bd3478c4b584a66d0ea8c61a9f644e4d348ad2c301fd1e103d',
      bytes: 7576444,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.20; height ≈ 1.072 m, length ≈ 3.2 m).',
      'Kept the idle animation clip “circling” (31.967s, 93 channels).',
    ],
    redistributionAllowed: true,
  },
]
