import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Cane Corso (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Canecorso/Canecorso.glb",
      accessedOn: '2026-08-20',
      sha256: '86e5e517a77b16d4a0e8179661860aa37af8304168f515b8671c30efe38588fc',
      bytes: 8599104,
    },
    runtime: {
      sha256: 'd0f701440cd055c6c514d511f66fc01521dd76c90c8fda46a75587584b214508',
      bytes: 5618612,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.89; height ≈ 0.896 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “All Animations” (11s, 104 channels).',
    ],
    redistributionAllowed: true,
  },
]
