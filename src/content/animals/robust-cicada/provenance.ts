import type { AssetProvenance } from '../../types'

// Draft intake from the Google “AR Answers in Search” models bucket. The
// bucket does not ship a per-model licence statement, so the model is marked
// NOT redistributable and stays draft until the source licence is confirmed
// or replaced.
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Robust Cicada (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/robust_cicada/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'e8bf78b8646a4e3a5e582d09f1ada73c0d31951b0a6d0b7a704cc52a172b88c2',
      bytes: 5310764,
    },
    runtime: {
      sha256: 'f584ede02fe0eb11446053ceda3b3f441cff78157cf2d7bf0e02ddec28656d28',
      bytes: 3416888,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.31; height ≈ 0.022 m, length ≈ 0.06 m).',
      'Kept the idle animation clip “minmin” (12.633s, 163 channels).',
    ],
    attribution: "Robust Cicada 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/robust_cicada/model.glb",
      'converted-downloads/robust-cicada/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
