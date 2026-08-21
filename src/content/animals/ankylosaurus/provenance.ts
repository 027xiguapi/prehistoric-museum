import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Ankylosaurus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Ankylosaur.glb",
      accessedOn: '2026-08-20',
      sha256: '330b83864b3bb0fa3ba6918e048a05c7e66791e94b4788ae42662936a5c90c07',
      bytes: 8821604,
    },
    runtime: {
      sha256: '9959f2ea7d40e86fb7e6f072d8f530d6077e9a608e236983bcb0eafd72ee15c9',
      bytes: 6798796,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.55, yaw 45°; height ≈ 3.059 m, length ≈ 9.111 m).',
      'Kept the idle animation clip “All Animations” (10.167s, 102 channels).',
    ],
    redistributionAllowed: true,
  },
]
