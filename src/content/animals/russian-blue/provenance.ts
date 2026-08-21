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
      title: "Russian Blue (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Russianblue/Russianblue.glb",
      accessedOn: '2026-08-20',
      sha256: '48c8a7fd3740b744ea0e8e4c159ab9d87f06cdef8f8ea1e118ee933c96c57e8c',
      bytes: 9790696,
    },
    runtime: {
      sha256: 'df053e630c0905301150c4432a92e879adcd94ed84cdfeda70af668f6f2282af',
      bytes: 6387356,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.54; height ≈ 0.412 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “All Animations” (8.5s, 159 channels).',
    ],
    attribution: "Russian Blue 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/cats/Russianblue/Russianblue.glb",
      'converted-downloads/russian-blue/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
