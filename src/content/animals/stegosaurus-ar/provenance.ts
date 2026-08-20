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
      title: "Stegosaurus (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Stegosaurus.glb",
      accessedOn: '2026-08-20',
      sha256: '272c2676478b208e792ecd404b5c0e73c73c7a8f3f90b75464395796719d1364',
      bytes: 8955884,
    },
    license: modelLicense,
    runtime: {
      sha256: '3e76d94dedb5c71c2ae69fef417b836c9b2f888304a34635d73b9e55a7a9eaf9',
      bytes: 6858352,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.26, yaw 225°; height ≈ 5.079 m, length ≈ 11.259 m).',
      'Kept the idle animation clip “All Animations” (14.8s, 93 channels).',
    ],
    attribution: "Stegosaurus (AR Model) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dinos/Stegosaurus.glb",
      'converted-downloads/stegosaurus-ar/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
