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
      title: "Periodical Cicada (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/periodical_cicada/model.glb",
      accessedOn: '2026-08-20',
      sha256: '2fd25008fa8f80582928bd5684243a94e37579bff361890246b304324e6154bc',
      bytes: 2627332,
    },
    runtime: {
      sha256: 'c7c46e55a14855459b11c6cb2d2324c236ba1b7178e02525e1f328ed813a104b',
      bytes: 1581280,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.63; height ≈ 0.016 m, length ≈ 0.05 m).',
      'Kept the idle animation clip “minmin” (12.633s, 167 channels).',
    ],
    attribution: "Periodical Cicada 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/periodical_cicada/model.glb",
      'converted-downloads/periodical-cicada/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
