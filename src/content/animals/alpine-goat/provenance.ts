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
      title: "Alpine Goat (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/AlpineGoat/model.glb",
      accessedOn: '2026-08-20',
      sha256: '2e1dee20b57841fdaf63c8226a86319faf37493e1e77a40a65bd8182b086ee8c',
      bytes: 1715568,
    },
    runtime: {
      sha256: '3eee15a90fd88caafef6b0e041986a2e11b379330d5f636c203a824631fbb3b5',
      bytes: 1487072,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.02; height ≈ 1.133 m, length ≈ 1.4 m).',
      'Kept the idle animation clip “Animation” (15s, 124 channels).',
    ],
    attribution: "Alpine Goat 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/AlpineGoat/model.glb",
      'converted-downloads/alpine-goat/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
