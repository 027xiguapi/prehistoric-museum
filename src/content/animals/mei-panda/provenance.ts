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
      title: "Mei (Red Panda Form) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/TurningRed/meiPanda.glb",
      accessedOn: '2026-08-20',
      sha256: '84590fd01e2d5403e49717b2ce55a70e4c1f21ecec383e35933fe48338c75974',
      bytes: 8079396,
    },
    license: modelLicense,
    runtime: {
      sha256: 'b97461d8850035f22b409946165e30aa8a48eac8ad8d3d73decf7993e7a4cbf9',
      bytes: 3437536,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.50; height ≈ 1.1 m, length ≈ 0.623 m).',
      'Kept the idle animation clip “All Animations” (4.367s, 600 channels).',
    ],
    attribution: "Mei (Red Panda Form) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/TurningRed/meiPanda.glb",
      'converted-downloads/mei-panda/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
