import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Bumblebee (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/Nordic/Bumblebee/bumblebee.glb",
      accessedOn: '2026-08-20',
      sha256: '2d7a354e30ae76740a8240ec8130781ff09549dd4be77bba86b7da570c6bf833',
      bytes: 13870116,
    },
    runtime: {
      sha256: '28c4101bfe17893aa008b97c30cbf7be6f98140909241a3aac029e16ca2356d7',
      bytes: 4222728,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.38; height ≈ 0.03 m, length ≈ 0.015 m).',
      'Kept the idle animation clip “All Animations” (10.033s, 150 channels).',
    ],
    redistributionAllowed: true,
  },
]
