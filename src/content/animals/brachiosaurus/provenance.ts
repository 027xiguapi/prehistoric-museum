import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Brachiosaurus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Brachiosaur.glb",
      accessedOn: '2026-08-20',
      sha256: 'a525b012538b1f48e3ec27fcb475a47686205f5ecb7106c22d1761b5f3f834d1',
      bytes: 8804048,
    },
    runtime: {
      sha256: 'f7ba910c6f41a54e31fa993e41f2839f69c2f971c21d30dbe8a259ec343899ed',
      bytes: 5287564,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.53; height ≈ 20 m, length ≈ 18.293 m).',
      'Kept the idle animation clip “All Animations” (9.667s, 144 channels).',
    ],
    redistributionAllowed: true,
  },
]
