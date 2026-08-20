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
      title: "Grogu (The Mandalorian Character) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/mandalorian/grogu/grogu.glb",
      accessedOn: '2026-08-20',
      sha256: 'c1d90ec1fd7d3041e1457150cf0385b1501541d7dc1db7776218784be48ac4d2',
      bytes: 10496344,
    },
    license: modelLicense,
    runtime: {
      sha256: '9ef780c6ea98bd4fd64c69b7512c740c9f0f894d3278fe02fd55bcfa614b612c',
      bytes: 6795296,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.14; height ≈ 0.4 m, length ≈ 0.208 m).',
      'Kept the idle animation clip “Animation” (20s, 270 channels).',
    ],
    attribution: "Grogu (The Mandalorian Character) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/mandalorian/grogu/grogu.glb",
      'converted-downloads/grogu/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
