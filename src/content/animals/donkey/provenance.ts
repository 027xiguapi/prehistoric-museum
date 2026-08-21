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
      title: "Donkey (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Donkey/Donkey.glb",
      accessedOn: '2026-08-20',
      sha256: 'ea38f5f5a33c2207a83a6c5facc60adbbce5839aa0a66236a994f2a24eaa4461',
      bytes: 9127720,
    },
    runtime: {
      sha256: 'ea1d738a6465e9f9f70ba9ebfb1016a0b06c4bf0861fc81f41dc57e396da6e6b',
      bytes: 4418832,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.13; height ≈ 1.423 m, length ≈ 1.9 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 276 channels).',
    ],
    attribution: "Donkey 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/farm_rodent/Donkey/Donkey.glb",
      'converted-downloads/donkey/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
