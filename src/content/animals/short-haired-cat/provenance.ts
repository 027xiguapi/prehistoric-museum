import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Domestic Shorthair (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/ShortHairedCat/model.glb",
      accessedOn: '2026-08-20',
      sha256: '186782fbdd5d1aac93ad7384d1cc356cfdc8e2675d1186395adfb17af9480a7c',
      bytes: 3285104,
    },
    runtime: {
      sha256: '052e82abc8900f00a86f5c0ccac076982dba207a8b74b098c7777594ea6c0618',
      bytes: 2476112,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.31; height ≈ 0.522 m, length ≈ 0.75 m).',
      'Kept the idle animation clip “Animation” (15s, 270 channels).',
    ],
    redistributionAllowed: true,
  },
]
