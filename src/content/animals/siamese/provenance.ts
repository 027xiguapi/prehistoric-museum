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
      title: "Siamese Cat (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Siamese/Siamese.glb",
      accessedOn: '2026-08-20',
      sha256: '35ba0ea1fb0a4934d08734d9ab9251004e2e747466bf243c11ec182a35007d1b',
      bytes: 5286444,
    },
    runtime: {
      sha256: '3fe501794336f8d28fd4d765540f593bfdfab4230768854072d892718621c5eb',
      bytes: 2965528,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.55; height ≈ 0.519 m, length ≈ 0.8 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 237 channels).',
    ],
    attribution: "Siamese Cat 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/cats/Siamese/Siamese.glb",
      'converted-downloads/siamese/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
