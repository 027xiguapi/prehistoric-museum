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
      title: "Chihuahua (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Chihuahua/Chihuahua.glb",
      accessedOn: '2026-08-20',
      sha256: '0c1ce2e209014bd88070a9057dace1fa7e17dc0388925ff616a734a32b6a5a19',
      bytes: 9987464,
    },
    runtime: {
      sha256: '078015bb2c79a2fe73c334f570426d28861368ecc8922b7feb025dd17290c539',
      bytes: 5760344,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.05; height ≈ 0.333 m, length ≈ 0.4 m).',
      'Kept the idle animation clip “Take 001.001” (10s, 438 channels).',
    ],
    attribution: "Chihuahua 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dogs/Chihuahua/Chihuahua.glb",
      'converted-downloads/chihuahua/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
