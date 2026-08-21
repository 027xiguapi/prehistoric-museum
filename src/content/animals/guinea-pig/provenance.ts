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
      title: "Guinea Pig (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Guineapig/Guineapig.glb",
      accessedOn: '2026-08-20',
      sha256: '787883a4dd85d734f56b22d6f404477c2ea1e6e16c5f1b8a257c7b6d74f96f4f',
      bytes: 5344004,
    },
    runtime: {
      sha256: 'a7eecb9b4243811dfc0ab33e3b5094aece8df42746041e846c8a9f3150578023',
      bytes: 3272800,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.55; height ≈ 0.172 m, length ≈ 0.35 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 276 channels).',
    ],
    attribution: "Guinea Pig 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/farm_rodent/Guineapig/Guineapig.glb",
      'converted-downloads/guinea-pig/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
