import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Chipmunk (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Chipmunk/Chipmunk.glb",
      accessedOn: '2026-08-20',
      sha256: '72da783eac61fa09976bbe265a4532eaa8649d6b71cd658fe6588e2e31da7059',
      bytes: 7725936,
    },
    runtime: {
      sha256: 'd594a8bd644567ba7621fb0c647b94662e6bae603cd63b30c7c6f5d0e9e4309d',
      bytes: 4287656,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.88; height ≈ 0.07 m, length ≈ 0.28 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 456 channels).',
    ],
    redistributionAllowed: true,
  },
]
