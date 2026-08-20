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
      title: "Caeleb Dressel (Freestyle) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/CaelebDressel/freestyle/freestyle.glb",
      accessedOn: '2026-08-20',
      sha256: 'f2dfbbeab7c5c305861e070bc59988fac09afc954d544be459a51cd9b13b56cd',
      bytes: 11596440,
    },
    license: modelLicense,
    runtime: {
      sha256: '6b1586236333c49c302cb6af834e34bb29a841eda8401b90209a3f0b8daf8d74',
      bytes: 6442280,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.22; height ≈ 2.3 m, length ≈ 1.209 m).',
      'Kept the idle animation clip “inPlace” (9.3s, 429 channels).',
    ],
    attribution: "Caeleb Dressel (Freestyle) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/Olympics/CaelebDressel/freestyle/freestyle.glb",
      'converted-downloads/caeleb-dressel-freestyle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
