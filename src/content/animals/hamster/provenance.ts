import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Hamster (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/farm_rodent/Hamster/Hamster.glb",
      accessedOn: '2026-08-20',
      sha256: '74615502ec7d0c50be923f1ab95ff44207556408583760eafce009e15279184d',
      bytes: 3807276,
    },
    runtime: {
      sha256: 'e5228ad802cd007b6b565530ea744410a3e942d7e1ad162f4c1530c4560db145',
      bytes: 1891528,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.74; height ≈ 0.082 m, length ≈ 0.18 m).',
      'Kept the idle animation clip “All Animations” (9.967s, 315 channels).',
    ],
    redistributionAllowed: true,
  },
]
