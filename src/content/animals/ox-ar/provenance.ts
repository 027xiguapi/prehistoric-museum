import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Ox / Cattle (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Ox/Ox.glb",
      accessedOn: '2026-08-20',
      sha256: '15ddf49bfedaf7421fd502483daa83a1e8e1ca6afd27bd1ee2f43d1de27b6292',
      bytes: 10278968,
    },
    runtime: {
      sha256: '20cb58c55a66bc5f65a042f9a425bfa6414dfe5daef056bb6f43951646d8f940',
      bytes: 6857916,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.10; height ≈ 1.533 m, length ≈ 2.5 m).',
      'Kept the idle animation clip “All Animations” (11.7s, 171 channels).',
    ],
    redistributionAllowed: true,
  },
]
