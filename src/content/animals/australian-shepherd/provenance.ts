import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Australian Shepherd (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/AustralianShepherd/AustralianShepherd.glb",
      accessedOn: '2026-08-20',
      sha256: '386a46dd618c2c507d9c2d19cdda5b6c7632ad9cd21d8b0415fd7f9b849186fc',
      bytes: 9796464,
    },
    runtime: {
      sha256: '2e859f65ba606a82569eb7cbae4563539ebdf48ff42b66a0deb43848f5a094cb',
      bytes: 6687532,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.99; height ≈ 0.734 m, length ≈ 1 m).',
      'Kept the idle animation clip “All Animations” (12.4s, 186 channels).',
    ],
    redistributionAllowed: true,
  },
]
