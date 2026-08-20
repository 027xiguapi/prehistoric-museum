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
      title: "Arabian Horse (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/ArabianHorse/model.glb",
      accessedOn: '2026-08-20',
      sha256: '1aa3e8fedb0775c43424bef0d0a01ebf7b718ff1b982dd135bbeafc265fb3f3e',
      bytes: 1669100,
    },
    license: modelLicense,
    runtime: {
      sha256: '551dd9b7ddfd16999201f752a72aa2b63917b388ece89425bc3a90c43c2e44b6',
      bytes: 727720,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.82; height ≈ 1.739 m, length ≈ 2.2 m).',
      'Kept the idle animation clip “Animation” (17.6s, 204 channels).',
    ],
    attribution: "Arabian Horse 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/ArabianHorse/model.glb",
      'converted-downloads/arabian-horse/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
