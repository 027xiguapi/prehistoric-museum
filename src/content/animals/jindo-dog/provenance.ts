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
      title: "Jindo Dog (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Jindodog/Jindodog.glb",
      accessedOn: '2026-08-20',
      sha256: 'e2956f2a82763e47633f36bf30b525850801fed21f36d2cdf498e9b9712946b0',
      bytes: 8974412,
    },
    runtime: {
      sha256: 'e13ef821013b0207fbd051175033040bc5d0294ac79a19cdd2aa2a63e670ac4b',
      bytes: 5617392,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.44; height ≈ 0.966 m, length ≈ 1.05 m).',
      'Kept the idle animation clip “All Animations” (10s, 180 channels).',
    ],
    attribution: "Jindo Dog 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/dogs/Jindodog/Jindodog.glb",
      'converted-downloads/jindo-dog/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
