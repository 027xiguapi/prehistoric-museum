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
      title: "American Pit Bull Terrier (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Pitbull/Pitbull.glb",
      accessedOn: '2026-08-20',
      sha256: '53c871ec1ae3e50423b871f71d2ab12a544d1466e5baa40479a2b0d3dbc74af3',
      bytes: 5444172,
    },
    runtime: {
      sha256: 'a14a038b2486722063997e378a8cac4b395201a83ee16712009152c7920b238e',
      bytes: 2853724,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.16; height ≈ 0.63 m, length ≈ 0.95 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 357 channels).',
    ],
    attribution: "American Pit Bull Terrier 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dogs/Pitbull/Pitbull.glb",
      'converted-downloads/pitbull/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
