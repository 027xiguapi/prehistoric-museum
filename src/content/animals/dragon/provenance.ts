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
      title: "Dragon (Mythical Creature) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/mythical/Dragon/Dragon.glb",
      accessedOn: '2026-08-20',
      sha256: '82ef4ae8bfe9741e071a543c377dcd7a4598c4a65214f70e19497741dbd426ce',
      bytes: 9202584,
    },
    license: modelLicense,
    runtime: {
      sha256: '01fe865994901f7e0b2395f0f69a42a69a6c86d6146a2c8643e11e2c04b84578',
      bytes: 6059332,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.54, yaw 180°; height ≈ 2.075 m, length ≈ 4.5 m).',
      'Kept the idle animation clip “All Animations” (9.2s, 216 channels).',
    ],
    attribution: "Dragon (Mythical Creature) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: false,
    evidencePaths: [
      "model-downloads/mythical/Dragon/Dragon.glb",
      'converted-downloads/dragon/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
