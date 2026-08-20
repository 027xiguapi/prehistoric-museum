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
      title: "P. V. Sindhu (Smash) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/PVSindhu/smash/smash.glb",
      accessedOn: '2026-08-20',
      sha256: '4d8984d8abfcd51dcb57a86f854538e9df3e55f0386e90a02c1afd69580e28a4',
      bytes: 11980068,
    },
    license: modelLicense,
    runtime: {
      sha256: 'cea4c715366249c3d168b53dbfb91bc5544faaf6e0d8d74c77a3c74ae62f0a8b',
      bytes: 6232388,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.31; height ≈ 2.3 m, length ≈ 0.881 m).',
      'Kept the idle animation clip “All Animations” (9.6s, 486 channels).',
    ],
    attribution: "P. V. Sindhu (Smash) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/Olympics/PVSindhu/smash/smash.glb",
      'converted-downloads/pv-sindhu-smash/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
