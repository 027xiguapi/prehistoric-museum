import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Hippopotamus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/african_endangered/Hippo/Hippo.glb",
      accessedOn: '2026-08-20',
      sha256: '80b27caf8778a46ad971d7e8fc7222b366b964fe41f007934d91c3206a1dd37c',
      bytes: 5867344,
    },
    runtime: {
      sha256: '44a6611f033e54346607d3bfb3be7df2245e5f276edbac5bdbc0d293b60f1568',
      bytes: 2511864,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.15; height ≈ 1.719 m, length ≈ 3.8 m).',
      'Kept the idle animation clip “All Animations” (10.333s, 375 channels).',
    ],
    redistributionAllowed: true,
  },
]
