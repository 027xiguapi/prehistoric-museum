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
      title: "Wandering Glider Dragonfly (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/dragonfly/model.glb",
      accessedOn: '2026-08-20',
      sha256: '0df2610ac24be6faad66ea07d6640172e87aa1a24d3d01744be23a45bde29a84',
      bytes: 2899672,
    },
    runtime: {
      sha256: 'e10e18a4a0d2a2e051d9a8fd31ecca325f7b38fa92e4856471dcbfac25e3f65f',
      bytes: 1698792,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.58; height ≈ 0.021 m, length ≈ 0.1 m).',
      'Kept the idle animation clip “oniyanma” (12s, 132 channels).',
    ],
    attribution: "Wandering Glider Dragonfly 3D model from the Google “AR Answers in Search” models bucket; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "model-downloads/insects/dragonfly/model.glb",
      'converted-downloads/dragonfly/model-normalized.glb',
      'scripts/convert-model-downloads.mjs',
      'scripts/prepare-downloads-drafts.mjs',
      'scripts/generate-downloads-draft-packages.mjs',
    ],
  },
]
