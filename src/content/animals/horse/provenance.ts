import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Horse (owner-supplied “1048动物” drop, 马)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-horse-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '134a3548c23eecfc6ed04711ed2fae203965908e2ad77b948d60321e92e79f68',
      bytes: 2119100,
    },
    runtime: {
      sha256: '8fc9053eb34232c401a9c238056f05d7cf85e5826ad5a9a2530eea9554f2cabc',
      bytes: 623940,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 1.897 m, length ≈ 2.4 m).',
      'Kept the idle animation clip “idel_testnyi” (17.583s, 207 channels).',
    ],
    redistributionAllowed: true,
  },
]
