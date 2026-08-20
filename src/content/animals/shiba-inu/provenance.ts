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
      title: "Shiba Inu (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Shibainu/Shibainu.glb",
      accessedOn: '2026-08-20',
      sha256: '2ac24d6e0d66f9bbd5b59af669ec55b66e1571c64fe4cf5faf36793126727f8a',
      bytes: 10001560,
    },
    license: modelLicense,
    runtime: {
      sha256: '2f4c5fab0648fd20819826135c908161bf74f75dddcd859cfdd92c95928392e8',
      bytes: 7151740,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.12; height ≈ 0.572 m, length ≈ 0.9 m).',
      'Kept the idle animation clip “All Animations” (10s, 195 channels).',
    ],
    attribution: "Shiba Inu 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dogs/Shibainu/Shibainu.glb",
      'converted-downloads/shiba-inu/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
