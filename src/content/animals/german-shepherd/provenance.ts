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
      title: "German Shepherd (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/GermanShepherd/GermanShepherd.glb",
      accessedOn: '2026-08-20',
      sha256: 'cf925908abf9d40205de0f3f88877fc85e617385b2c5b02229e2d0a2322b67e3',
      bytes: 6366788,
    },
    license: modelLicense,
    runtime: {
      sha256: 'bd7460002b0e475395f920c385b975566cf56e8e3b44addc2670dccc06c4eda3',
      bytes: 3855516,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.08; height ≈ 0.778 m, length ≈ 1.2 m).',
      'Kept the idle animation clip “All Animations” (11.933s, 363 channels).',
    ],
    attribution: "German Shepherd 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dogs/GermanShepherd/GermanShepherd.glb",
      'converted-downloads/german-shepherd/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
