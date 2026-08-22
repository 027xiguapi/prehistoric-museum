import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Parasaurolophus (Google “AR Answers in Search” models bucket)",
      author: 'Google',
      url: "https://storage.googleapis.com/ar-answers-in-search-models/static/dinos/Parasaurolophus.glb",
      accessedOn: '2026-08-20',
      sha256: 'acf0078e5f576d7c8ade0d8be69ea744cac00f8875b8de777a2c64ac73c67947',
      bytes: 9629564,
    },
    runtime: {
      sha256: 'ca9393fd520e1d1fec9f2d4451d8bbce1d89ed7ce595aa5482446be4c1817edc',
      bytes: 7009500,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the model-downloads batch conversion pipeline.',
      'Re-encoded embedded textures to WebP and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Wrapped the scene in a normalization node so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.75, yaw 45°; height ≈ 6.357 m, length ≈ 11.843 m).',
      'Kept the idle animation clip “All Animations” (9.133s, 198 channels).',
    ],
    redistributionAllowed: true,
  },
]
