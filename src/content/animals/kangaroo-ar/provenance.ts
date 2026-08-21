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
      title: "Red Kangaroo (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Kangaroo.glb",
      accessedOn: '2026-08-20',
      sha256: '6374efa95287fc7b5a9b42c93416e935bbd2e6398928fc6a7c2450375c5b6510',
      bytes: 8445384,
    },
    runtime: {
      sha256: 'f4681f3893a56462c9385cc486fa4021f58d60c86c87b4c7f2c273f5d4a6b6d7',
      bytes: 5062292,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.94; height ≈ 1.123 m, length ≈ 1.9 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 261 channels).',
    ],
    attribution: "Red Kangaroo (AR Model) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/aussie_animals/Kangaroo.glb",
      'converted-downloads/kangaroo-ar/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
