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
      title: "Chow Chow (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Chowchow/Chowchow.glb",
      accessedOn: '2026-08-20',
      sha256: '99c90b1be6b03c03fdaf3e0a4c5cee258e0bfd2aa84f6933ac7d29b94144ad2d',
      bytes: 10389732,
    },
    runtime: {
      sha256: '52bd9cde09a1d61ef2634d2fac898d7f1342d0601a4a978e1520a2c49a6daacb',
      bytes: 5626272,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.18; height ≈ 0.868 m, length ≈ 1 m).',
      'Kept the idle animation clip “All Animations” (10s, 174 channels).',
    ],
    attribution: "Chow Chow 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dogs/Chowchow/Chowchow.glb",
      'converted-downloads/chow-chow/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
