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
      title: "Large Brown Cicada (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/brown_cicada/model.glb",
      accessedOn: '2026-08-20',
      sha256: '92595fd5197d331619e6bf6987e97fe43ac97bcdba93381c28955fd40991aca3',
      bytes: 2419540,
    },
    runtime: {
      sha256: 'bd5f6f97fd366bd7a45d96511e6e68ab88db2067434f40eb489f8e3c688272a5',
      bytes: 1357324,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.78; height ≈ 0.018 m, length ≈ 0.06 m).',
      'Kept the idle animation clip “minmin” (12.633s, 163 channels).',
    ],
    attribution: "Large Brown Cicada 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/brown_cicada/model.glb",
      'converted-downloads/brown-cicada/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
