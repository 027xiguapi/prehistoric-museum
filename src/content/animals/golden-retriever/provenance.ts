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
      title: "Golden Retriever (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GoldenRetriever/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'a2848b62a21f89d4f74f1ee264c28e7ae8a61facc30b20e3db4d972c3a0a0e08',
      bytes: 2579136,
    },
    license: modelLicense,
    runtime: {
      sha256: 'c5f908dfeb2137e73c0e366c9db0de0a85a1ee1321a31822b473b18654726b1a',
      bytes: 1746384,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.97; height ≈ 0.746 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “Animation” (15s, 279 channels).',
    ],
    attribution: "Golden Retriever 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/GoldenRetriever/model.glb",
      'converted-downloads/golden-retriever/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
