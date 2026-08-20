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
      title: "Golden Eagle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/GoldenEagle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '4992a54fa67f32eaec00d0e2df977d34e120d080d6e1555ea0e4bfa636c47cba',
      bytes: 15119120,
    },
    license: modelLicense,
    runtime: {
      sha256: 'a2b4b85d26b1c2ee3a591437a7905a9b77c63d9030487cab8bf03cb1fdb7cd2e',
      bytes: 1683120,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.15; height ≈ 0.362 m, length ≈ 1.104 m).',
      'Kept the idle animation clip “Take 001” (15s, 97 channels).',
    ],
    attribution: "Golden Eagle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/GoldenEagle/model.glb",
      'converted-downloads/golden-eagle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
