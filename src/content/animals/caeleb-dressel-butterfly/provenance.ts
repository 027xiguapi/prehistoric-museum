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
      title: "Caeleb Dressel (Butterfly) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/CaelebDressel/butterfly/butterfly.glb",
      accessedOn: '2026-08-20',
      sha256: '65aeb8e14b0ec104a782e30733a66ef768666eece3fecbb1146d6733555da294',
      bytes: 9466600,
    },
    license: modelLicense,
    runtime: {
      sha256: '37b2c17fd640d60d1d9714db994135aa2d934e13e4883463a1b6e5f1c2c5025d',
      bytes: 6301112,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.22; height ≈ 2.3 m, length ≈ 1.208 m).',
      'Kept the idle animation clip “inplace” (2.1s, 432 channels).',
    ],
    attribution: "Caeleb Dressel (Butterfly) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/Olympics/CaelebDressel/butterfly/butterfly.glb",
      'converted-downloads/caeleb-dressel-butterfly/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
