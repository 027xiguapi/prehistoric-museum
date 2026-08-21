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
      title: "European Hedgehog (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/EuropeanHedgehog/model.glb",
      accessedOn: '2026-08-20',
      sha256: '0cfb5e660fcc69ac5ee8a991354aad1d439215561f39ec43eb0ab75eaf86f224',
      bytes: 2930772,
    },
    runtime: {
      sha256: '5d13eca53563f9d9aa016cf241420f6502e1341b326b008de02d8ae1256fdbc4',
      bytes: 2612432,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.69; height ≈ 0.168 m, length ≈ 0.35 m).',
      'Kept the idle animation clip “Animation” (15s, 260 channels).',
    ],
    attribution: "European Hedgehog 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/EuropeanHedgehog/model.glb",
      'converted-downloads/european-hedgehog/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
