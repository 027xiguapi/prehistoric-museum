import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Centipede (owner-supplied “1048动物” drop, 蜈蚣gltf格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-centipede-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '22709f4ba369feac4b50f9425ae7874cb8b0e428811df85cbc8e5bea6ffdba04',
      bytes: 292705,
    },
    runtime: {
      sha256: '4f572e3b61e4381c76a027d91c88be82bc9a9922da4927c93c9aedd258d49df2',
      bytes: 5430728,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.37, yaw 135°; height ≈ 0.023 m, length ≈ 0.297 m).',
      'Kept the idle animation clip “nyi-Test” (11.417s, 285 channels).',
    ],
    redistributionAllowed: true,
  },
]
