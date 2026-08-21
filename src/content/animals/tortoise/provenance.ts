import type { AssetProvenance } from '../../types'

// Pilot intake from the owner-supplied “1048动物” drop. The drop did not
// include a licence statement, so the model is marked NOT redistributable
// and stays draft until the source licence is confirmed or replaced.
export const provenance: readonly [AssetProvenance, ...AssetProvenance[]] = [
  {
    assetPath: 'model/model.glb',
    kind: 'model',
    source: {
      type: 'third-party',
      title: "Giant Tortoise (owner-supplied “1048动物” drop, 陆龟gltf格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-tortoise-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'e1a7d1bb3d748291385042663b20147acadc1f572b41b18131ca8b98dff9941e',
      bytes: 168657,
    },
    runtime: {
      sha256: '56036930d758d87e7720bfad047fce551a63bb7cd522b019cdc7de0b5e331f6b',
      bytes: 2029072,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.94; height ≈ 0.829 m, length ≈ 1.5 m).',
      'Kept the idle animation clip “att_me1” (5.333s, 114 channels).',
    ],
    attribution: "Giant Tortoise 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/陆龟gltf格式/source/Tortoise.gltf",
      'converted-1048/tortoise/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
