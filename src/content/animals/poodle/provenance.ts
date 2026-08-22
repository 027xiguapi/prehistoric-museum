import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Poodle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Poodle/Poodle.glb",
      accessedOn: '2026-08-20',
      sha256: 'c6c5a2398d2a98dbf84ba54c0f40257c9fb406983c9938b3ded199150d3083bb',
      bytes: 6304656,
    },
    runtime: {
      sha256: '6a2ebf34261c95d0a65c40c50cff657e32e693f4f95620a085e427deec3d5d3c',
      bytes: 3794224,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.17; height ≈ 0.886 m, length ≈ 0.9 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 321 channels).',
    ],
    redistributionAllowed: true,
  },
]
