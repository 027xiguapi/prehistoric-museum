import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Golden Eagle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GoldenEagle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '4992a54fa67f32eaec00d0e2df977d34e120d080d6e1555ea0e4bfa636c47cba',
      bytes: 15119120,
    },
    runtime: {
      sha256: 'a2b4b85d26b1c2ee3a591437a7905a9b77c63d9030487cab8bf03cb1fdb7cd2e',
      bytes: 1683120,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.15; height ≈ 0.362 m, length ≈ 1.104 m).',
      'Kept the idle animation clip “Take 001” (15s, 97 channels).',
    ],
    redistributionAllowed: true,
  },
]
