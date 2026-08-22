import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Dilophosaurus (AR Model) (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Dilophosa.glb",
      accessedOn: '2026-08-20',
      sha256: 'e5e42f3d89940e231a32936ac70edc53cd0545704994624e99ca468e661044f2',
      bytes: 8767040,
    },
    runtime: {
      sha256: '278114641d9a23634b95f5b68fd3e218419a48bca33486456c9312bb0560009b',
      bytes: 6810676,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×2.32; height ≈ 3.076 m, length ≈ 6 m).',
      'Kept the idle animation clip “All Animations” (10.9s, 234 channels).',
    ],
    redistributionAllowed: true,
  },
]
