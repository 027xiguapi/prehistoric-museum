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
      title: "Blue Morpho Butterfly (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/morpho/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'aff6ce653231184cd45cf3b9a26cb74b25072cd2b95a6d6bc11b373270058be9',
      bytes: 1288208,
    },
    runtime: {
      sha256: 'eb7f24a9bf201c7c28e9e659951768595775a543f60fe5ec85f1f57285c9a4c9',
      bytes: 850396,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.71; height ≈ 0.021 m, length ≈ 0.099 m).',
      'Kept the idle animation clip “kipris” (3.333s, 138 channels).',
    ],
    attribution: "Blue Morpho Butterfly 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/morpho/model.glb",
      'converted-downloads/morpho-butterfly/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
