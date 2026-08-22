import type { AssetProvenance } from '@/src/content/types'

export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Stag Beetle (owner-supplied “1048动物” drop, 美山锹虫glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-stag-beetle-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'ed9afc41005a34e863d84598a197e7eae0bf4a4643e9f6c2d3026c7ad20fcf32',
      bytes: 3112972,
    },
    runtime: {
      sha256: 'b684aad31925365bad433c48fdf78a3ba30e771ca0ed4f22f72afeeb31890d35',
      bytes: 1893420,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.09; height ≈ 0.012 m, length ≈ 0.075 m).',
      'Kept the idle animation clip “ookuwa” (12s, 137 channels).',
    ],
    redistributionAllowed: true,
  },
]
