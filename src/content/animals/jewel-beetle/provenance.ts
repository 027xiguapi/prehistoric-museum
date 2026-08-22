import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Jewel Beetle (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/insects/jewel_beetle/model.glb",
      accessedOn: '2026-08-20',
      sha256: '528a21b68137b6eda014975392be9f3a4920e995de064858b15bec65e11048ab',
      bytes: 3464656,
    },
    runtime: {
      sha256: '83deae7522549cbf8e1fbce9e1a99f58bc0be45e4a324fae4f28cfdc0754cd73',
      bytes: 2011224,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.08; height ≈ 0.01 m, length ≈ 0.045 m).',
      'Kept the idle animation clip “tama” (12s, 157 channels).',
    ],
    redistributionAllowed: true,
  },
]
