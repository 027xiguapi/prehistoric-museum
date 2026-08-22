import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Alligator (owner-supplied “1048动物” drop, 鳄鱼)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-alligator-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2f048b452e98e3025cb37b338a8a2b668972f43baa2592d501e99df8c6de6362',
      bytes: 13719636,
    },
    runtime: {
      sha256: 'e9c891d01a316265171793291e3c8233e1b6152e41552044c40a2cfc85fc8cae',
      bytes: 7675400,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.476 m, length ≈ 3.5 m).',
      'Kept the idle animation clip “Animation_GLTF_created_0” (47.375s, 396 channels).',
    ],
    redistributionAllowed: true,
  },
]
