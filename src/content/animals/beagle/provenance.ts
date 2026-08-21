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
      title: "Beagle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Beagle/Beagle.glb",
      accessedOn: '2026-08-20',
      sha256: 'd50afa37ac73474d4ca3f39a65e02af22a1ebe42b853200f4f081782ead198e4',
      bytes: 9372100,
    },
    runtime: {
      sha256: 'ab465e3674fc3848644ad6e5bcb3876c7234f159792116c070eb3772a53ea0cc',
      bytes: 5115444,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.98; height ≈ 0.449 m, length ≈ 0.85 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 267 channels).',
    ],
    attribution: "Beagle 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dogs/Beagle/Beagle.glb",
      'converted-downloads/beagle/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
