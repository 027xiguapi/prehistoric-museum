import type { AssetProvenance } from '../../types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Asian Giant Hornet (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/hornet/model.glb",
      accessedOn: '2026-08-20',
      sha256: '922012ac825c22bbebc357c2593bc545f38fb0b82d8b85dd37c3e418af4ff155',
      bytes: 3816356,
    },
    runtime: {
      sha256: '37ffbfdd86a34a33488ac355135cc67cbe2ade2a437d4a99c3e26080f91ad922',
      bytes: 2449564,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.24; height ≈ 0.018 m, length ≈ 0.05 m).',
      'Kept the idle animation clip “suzume” (10s, 170 channels).',
    ],
    redistributionAllowed: true,
  },
]
