import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "House Mouse (owner-supplied “1048动物” drop, 老鼠gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-mouse-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '342a23ea99ea6bcdeaf1736a51590ae88528dce6bb938b7beb3d0c97d3058788',
      bytes: 53246,
    },
    runtime: {
      sha256: '68a2cf0061184321ba06262520ccc9a6dadeed2f059cb7a022d56668f5c88afd',
      bytes: 5738752,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.48; height ≈ 0.107 m, length ≈ 0.45 m).',
      'Kept the idle animation clip “idle_test” (2.375s, 29 channels).',
    ],
    redistributionAllowed: true,
  },
]
