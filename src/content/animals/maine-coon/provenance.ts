import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Maine Coon (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/cats/Mainecoon/Mainecoon.glb",
      accessedOn: '2026-08-20',
      sha256: '073ed1f09e152d6f85dabe0e6c2aa1170c66d993817cfe483861294492541f45',
      bytes: 10756788,
    },
    runtime: {
      sha256: 'f45bb9da12bba0c86c49c876030502d0ca175c35a347e3c172a39327212da256',
      bytes: 7883464,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.55; height ≈ 0.527 m, length ≈ 1 m).',
      'Kept the idle animation clip “All Animations” (10s, 171 channels).',
    ],
    redistributionAllowed: true,
  },
]
