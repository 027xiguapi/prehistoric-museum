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
      title: "Dilophosaurus (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Dilophosa.glb",
      accessedOn: '2026-08-20',
      sha256: 'e5e42f3d89940e231a32936ac70edc53cd0545704994624e99ca468e661044f2',
      bytes: 8767040,
    },
    license: modelLicense,
    runtime: {
      sha256: '278114641d9a23634b95f5b68fd3e218419a48bca33486456c9312bb0560009b',
      bytes: 6810676,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.32; height ≈ 3.076 m, length ≈ 6 m).',
      'Kept the idle animation clip “All Animations” (10.9s, 234 channels).',
    ],
    attribution: "Dilophosaurus (AR Model) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/dinos/Dilophosa.glb",
      'converted-downloads/dilophosaurus-ar/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
