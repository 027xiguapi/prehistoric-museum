import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Akita (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dogs/Akita/Akita.glb",
      accessedOn: '2026-08-20',
      sha256: '63ec4500bdc92ea2563a3ddfdcb3b3d38031d2d660edc013b64989cb59ec1073',
      bytes: 9944104,
    },
    runtime: {
      sha256: 'd4537dc812ea3fb23b383a7d5508948d0896a24e717cc4187bd93b533f21b908',
      bytes: 6877184,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.14; height ≈ 0.968 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “All Animations” (10s, 159 channels).',
    ],
    redistributionAllowed: true,
  },
]
