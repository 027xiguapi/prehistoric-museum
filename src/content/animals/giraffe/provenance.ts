import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Giraffe (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/african_endangered/Giraffe/Giraffe.glb",
      accessedOn: '2026-08-20',
      sha256: '0a33722279a8ab7495ab9daf55b856dd7e1f5d2824fcfc9b0b694525052bbecc',
      bytes: 7004712,
    },
    runtime: {
      sha256: '40c01900b7de28bbbb5d3df5117deec1f95a238b2f820b2b3f8b5025144e3f53',
      bytes: 4223804,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.97; height ≈ 4.8 m, length ≈ 3.264 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 270 channels).',
    ],
    redistributionAllowed: true,
  },
]
