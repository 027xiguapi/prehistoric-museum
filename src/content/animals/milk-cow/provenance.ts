import type { AssetProvenance } from '../../types'

// Draft intake from the Google “AR Answers in Search” models bucket. The
// bucket does not ship a per-model licence statement, so the model is marked
// NOT redistributable and stays draft until the source licence is confirmed
// or replaced.
const modelLicense = {
  spdx: 'CC-BY-NC-SA-4.0',
  name: 'Temporary pilot marking — source licence not yet confirmed',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
} as const

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dairy Cow (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/MilkCow/MilkCow.glb",
      accessedOn: '2026-08-20',
      sha256: '9d5ccc0dccb696b9a3f2ec98da75f4f17b84835925ac88675cba10649496f9a7',
      bytes: 7025040,
    },
    license: modelLicense,
    runtime: {
      sha256: '2affe2c0d9562e39c48e6a65d9a05098ff444882bb21b561efe28b9a42fa3316',
      bytes: 5097760,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.99; height ≈ 1.411 m, length ≈ 2.6 m).',
      'Kept the idle animation clip “All Animations” (11s, 120 channels).',
    ],
    attribution: "Dairy Cow 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/farm_rodent/MilkCow/MilkCow.glb",
      'converted-downloads/milk-cow/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
