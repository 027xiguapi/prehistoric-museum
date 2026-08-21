import type { AssetProvenance } from '../../types'

// Draft intake from the Google “AR Answers in Search” models bucket. The
// bucket does not ship a per-model licence statement, so the model is marked
// NOT redistributable and stays draft until the source licence is confirmed
// or replaced.
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Pony (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Pony/model.glb",
      accessedOn: '2026-08-20',
      sha256: '9c3571d2b41c876d4398cc1d6201b18aaa80ece5c1c493b48cd7c8ade3347c4c',
      bytes: 3764824,
    },
    runtime: {
      sha256: '80a5f572e466e6811ab22a44f25a7c37c5c56a67845dbd2489102f2c841c9fe3',
      bytes: 2212044,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.12; height ≈ 1.316 m, length ≈ 1.8 m).',
      'Kept the idle animation clip “Animation” (17.6s, 315 channels).',
    ],
    attribution: "Pony 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/Pony/model.glb",
      'converted-downloads/pony/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
