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
      title: "Velociraptor (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Velociraptor.glb",
      accessedOn: '2026-08-20',
      sha256: '05ab80b13e5e090ec62b42117e6190ab72255cafaf7a6db0ac42dbeb21db7578',
      bytes: 9337932,
    },
    runtime: {
      sha256: 'dc08ef52942740f7371d33abc1a2452a4aa8520bf6837c06a8a4e14d57d92c72',
      bytes: 6972364,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.27, yaw 45°; height ≈ 1.26 m, length ≈ 2.631 m).',
      'Kept the idle animation clip “All Animations” (12.6s, 180 channels).',
    ],
    attribution: "Velociraptor 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dinos/Velociraptor.glb",
      'converted-downloads/velociraptor/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
