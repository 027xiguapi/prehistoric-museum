import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Schnauzer (owner-supplied “1048动物” drop, 雪纳瑞犬)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-schnauzer-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'dadde8f6b40bbde67b6281c9b23077ea852790d11c4db05f9fb7259e2a94bab2',
      bytes: 5667748,
    },
    runtime: {
      sha256: 'f3329add89646d5a4563d731ffa624ad0f7037c9a0f35f7eae4330ae8f57acfe',
      bytes: 4125852,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.96; height ≈ 0.945 m, length ≈ 0.95 m).',
      'Kept the idle animation clip “All Animations_skeleton #0” (9.958s, 468 channels).',
    ],
    redistributionAllowed: true,
  },
]
