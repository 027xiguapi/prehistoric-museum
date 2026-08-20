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
      title: "Labrador Retriever (Model Two) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/LabradorRetriever/LabradorRetriever.glb",
      accessedOn: '2026-08-20',
      sha256: '5783654a7b1e989c93340a9cfa566710365eb07080ed6936139d9a1977b12c3f',
      bytes: 9067264,
    },
    license: modelLicense,
    runtime: {
      sha256: 'cb89ded6db6093509d26ccdb2a5f89c7a047818ebfeabbada04434e0f23e9cb3',
      bytes: 6177324,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×3.22; height ≈ 0.789 m, length ≈ 1.15 m).',
      'Kept the idle animation clip “All Animations” (10s, 165 channels).',
    ],
    attribution: "Labrador Retriever (Model Two) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dogs/LabradorRetriever/LabradorRetriever.glb",
      'converted-downloads/labrador-retriever-2/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
