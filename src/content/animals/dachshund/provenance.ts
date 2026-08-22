import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dachshund (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Dachshund/Dachshund.glb",
      accessedOn: '2026-08-20',
      sha256: '1f8518fbddbfadec9cba7083cc2e38b8be816f6031274cbdca67b7696760d701',
      bytes: 6678356,
    },
    runtime: {
      sha256: '3cfc6ed58b571a1bb26296619a1531fe98e36be022336a349d23bcec775353d9',
      bytes: 3946708,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.59; height ≈ 0.518 m, length ≈ 1 m).',
      'Kept the idle animation clip “All Animations” (10.7s, 384 channels).',
    ],
    redistributionAllowed: true,
  },
]
