import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Hercules Beetle (owner-supplied “1048动物” drop, 犀牛甲虫)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-hercules-beetle-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'abfc6cced99b55ed11474c09f1087e6311018895a61ffd9dc72df37e3ab13a91',
      bytes: 1568332,
    },
    runtime: {
      sha256: '934b6291f66d1305806481725d9d97c6a042d6dfa4a1e226e6cee6c32d4277fd',
      bytes: 994792,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.17; height ≈ 0.069 m, length ≈ 0.17 m).',
      'Kept the idle animation clip “hurkyury_Armature” (12s, 189 channels).',
    ],
    redistributionAllowed: true,
  },
]
