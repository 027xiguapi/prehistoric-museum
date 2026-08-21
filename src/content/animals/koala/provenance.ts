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
      title: "Koala (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Koala.glb",
      accessedOn: '2026-08-20',
      sha256: '019422a4dff00cc9c54a337615abb298baf40e44f784d5c7950f1fba5ade88d8',
      bytes: 9083128,
    },
    runtime: {
      sha256: '43ce2f4a1dde9bc7d1687bb4d04e1756ab91e3a71224eee1df6f2725df8e402b',
      bytes: 3768080,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.26; height ≈ 0.85 m, length ≈ 0.384 m).',
      'Kept the idle animation clip “All Animations” (8.3s, 186 channels).',
    ],
    attribution: "Koala 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/aussie_animals/Koala.glb",
      'converted-downloads/koala/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
