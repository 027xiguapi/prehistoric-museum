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
      title: "Megan Rapinoe (Dribble) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Olympics/MeganRapinoe/dribble/dribble.glb",
      accessedOn: '2026-08-20',
      sha256: 'dc778817822e5b2534b352f95dfa251c8c2d43350e67441db315e80c53f4f18b',
      bytes: 12972824,
    },
    runtime: {
      sha256: 'e9c78c4c852033069dcdb5c609a1abcd3e9be676e38b30264512d5bcef7f3947',
      bytes: 7759144,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.18; height ≈ 2 m, length ≈ 0.655 m).',
      'Kept the idle animation clip “inPlace” (16.767s, 164 channels).',
    ],
    attribution: "Megan Rapinoe (Dribble) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/Olympics/MeganRapinoe/dribble/dribble.glb",
      'converted-downloads/megan-rapinoe-dribble/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
