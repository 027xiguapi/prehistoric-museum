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
      title: "Unicorn (Mythical Creature) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/mythical/Unicorn/Unicorn.glb",
      accessedOn: '2026-08-20',
      sha256: 'c0f733a3ff06ed11a6535c9ee936a3346954159629d53b95f768b1561ead4eb1',
      bytes: 5853392,
    },
    license: modelLicense,
    runtime: {
      sha256: 'fb9c1ca5428db82b246be09542b91fb63fb5d7a2fd54cc7aeb8a3bd37cefae75',
      bytes: 2757752,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.86; height ≈ 1.725 m, length ≈ 2.4 m).',
      'Kept the idle animation clip “All Animations” (9.958s, 399 channels).',
    ],
    attribution: "Unicorn (Mythical Creature) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/mythical/Unicorn/Unicorn.glb",
      'converted-downloads/unicorn/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
