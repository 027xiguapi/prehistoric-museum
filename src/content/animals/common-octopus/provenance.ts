import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Common Octopus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/CommonOctopus/model.glb",
      accessedOn: '2026-08-20',
      sha256: '25fd314affcce7733054751ca1526376f6a8e85a4d37687043e7db927f6e1a3e',
      bytes: 1679532,
    },
    runtime: {
      sha256: '92a3eeabf9ea490902ae783c25b750a8e2308892913dffbfc27a20ec2ac67603',
      bytes: 1118336,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.76; height ≈ 0.236 m, length ≈ 1 m).',
      'Kept the idle animation clip “Take 001” (18.667s, 144 channels).',
    ],
    redistributionAllowed: true,
  },
]
