import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Giant Stag Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/giant_stag/model.glb",
      accessedOn: '2026-08-20',
      sha256: 'bd6a62f9414d8dba6cbf488ce261fa64d028b2e0858c986e26bf168e7c2acd5f',
      bytes: 7818344,
    },
    runtime: {
      sha256: '8058aef0716524003dcf86282a7ddf70370df430d0e4d6761109c7aedf0e57e2',
      bytes: 4676080,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.26; height ≈ 0.02 m, length ≈ 0.1 m).',
      'Kept the idle animation clip “ookuwa” (12s, 136 channels).',
    ],
    redistributionAllowed: true,
  },
]
