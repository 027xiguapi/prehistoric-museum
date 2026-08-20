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
      title: "Sphynx Cat (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Sphynx/Sphynx.glb",
      accessedOn: '2026-08-20',
      sha256: '9648a7d558d61cc83e05c76ee1fe7ccb9d84a7d83cf89489f62ef0505cb23dfd',
      bytes: 9185180,
    },
    license: modelLicense,
    runtime: {
      sha256: '3180bbe62b7fe429f887bfe5d288cefb0cd6f4ed1dac81eca7dd0b33ad694741',
      bytes: 6294196,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.07; height ≈ 0.321 m, length ≈ 0.6 m).',
      'Kept the idle animation clip “Take 001” (10s, 258 channels).',
    ],
    attribution: "Sphynx Cat (AR Model) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/cats/Sphynx/Sphynx.glb",
      'converted-downloads/sphynx-cat-ar/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
