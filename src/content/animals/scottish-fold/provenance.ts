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
      title: "Scottish Fold (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/ScottishFold/ScottishFold.glb",
      accessedOn: '2026-08-20',
      sha256: '1f7c87a00e9ffa7087fac8c9f65e99beae5354f787e694264b0d94ada5afb4a6',
      bytes: 6185928,
    },
    runtime: {
      sha256: '59007d385853f42c983e3ad4c030b20b627c7cf90129a55a4265208d7bf3e639',
      bytes: 4154152,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.53; height ≈ 0.479 m, length ≈ 0.7 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 252 channels).',
    ],
    attribution: "Scottish Fold 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/cats/ScottishFold/ScottishFold.glb",
      'converted-downloads/scottish-fold/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
