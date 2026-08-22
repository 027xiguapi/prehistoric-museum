import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Arabian Leopard (owner-supplied “1048动物” drop, 阿拉伯豹glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-arabian-leopard-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2bfb6b79360f5e719b9ec1d36e5b21458caa0973ec1b20f013b948f7f4037fd2',
      bytes: 9990108,
    },
    runtime: {
      sha256: '0632e3bfe3a5e83dcc8d484475c7ab4b47bcd9ce72fcd5ae6000ea59c0f2965c',
      bytes: 6889168,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.13; height ≈ 0.954 m, length ≈ 1.8 m).',
      'Kept the idle animation clip “All Animations” (11.5s, 144 channels).',
    ],
    redistributionAllowed: true,
  },
]
