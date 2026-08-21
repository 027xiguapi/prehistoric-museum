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
      title: "French Bulldog (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/FrenchBulldog/model.glb",
      accessedOn: '2026-08-20',
      sha256: '21dd34d2315a23a047897ac77b67622ac5ccea83abcb601fc98292b285b6db3c',
      bytes: 2892388,
    },
    runtime: {
      sha256: '7eb66d4476973ef65ae5adeb2547217b62fc7103862dcc86a5960b0faa3c6843',
      bytes: 2057136,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.16; height ≈ 0.489 m, length ≈ 0.55 m).',
      'Kept the idle animation clip “All Animations” (15s, 252 channels).',
    ],
    attribution: "French Bulldog 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/FrenchBulldog/model.glb",
      'converted-downloads/french-bulldog/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
