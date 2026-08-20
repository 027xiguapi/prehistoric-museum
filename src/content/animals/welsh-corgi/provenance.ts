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
      title: "Welsh Corgi (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Welshcorgi/Welshcorgi.glb",
      accessedOn: '2026-08-20',
      sha256: 'edd0ec5fd22804afb9dccb966a492cb742388550b0bfa03d7f170a8e3be319c6',
      bytes: 7745824,
    },
    license: modelLicense,
    runtime: {
      sha256: '9ad594ca09c1e085800c5defb4bb7708dcddb6aa05d60b594cbbb9b3abffb873',
      bytes: 6024148,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.71; height ≈ 0.851 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “All Animations” (10s, 159 channels).',
    ],
    attribution: "Welsh Corgi 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dogs/Welshcorgi/Welshcorgi.glb",
      'converted-downloads/welsh-corgi/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
