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
      title: "Ragdoll (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Ragdoll/Ragdoll.glb",
      accessedOn: '2026-08-20',
      sha256: '3ddab10c18c002d2050d3494a57d0f63964891eb92e5f002c493eab18aa2cd33',
      bytes: 9118456,
    },
    runtime: {
      sha256: '7dea09724f0cf8b7ac195d8b3707549de262673b95f6a1143bad33884292448c',
      bytes: 5799980,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.97; height ≈ 0.519 m, length ≈ 0.95 m).',
      'Kept the idle animation clip “All Animations” (11.1s, 165 channels).',
    ],
    attribution: "Ragdoll 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/cats/Ragdoll/Ragdoll.glb",
      'converted-downloads/ragdoll/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
