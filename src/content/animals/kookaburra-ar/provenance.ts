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
      title: "Laughing Kookaburra (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/aussie_animals/Kookaburra.glb",
      accessedOn: '2026-08-20',
      sha256: '58857dd9f170e704a69a5f30bf6be45cefd70cc19f0a3418fed7c91731110fd8',
      bytes: 8761828,
    },
    runtime: {
      sha256: '931e18879750910389154957ddd87d4b49c33b97c7fd93f15474b31e8626dc58',
      bytes: 6005744,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.32; height ≈ 0.33 m, length ≈ 0.45 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 138 channels).',
    ],
    attribution: "Laughing Kookaburra (AR Model) 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/aussie_animals/Kookaburra.glb",
      'converted-downloads/kookaburra-ar/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
