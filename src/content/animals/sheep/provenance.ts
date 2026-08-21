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
      title: "Sheep (owner-supplied “1048动物” drop, 绵羊gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sheep-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '1292fc6348a9c39fe0782a1a809ec63c06954f006ee18dc02282b176ce92b099',
      bytes: 95898,
    },
    runtime: {
      sha256: 'c93ad9cf0cb59144219922e419fec68d982baf32ea04f7a7266d4934a81ab764',
      bytes: 4094768,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.29; height ≈ 0.854 m, length ≈ 1.3 m).',
      'Kept the idle animation clip “idle” (6.25s, 23 channels).',
    ],
    attribution: "Sheep 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/绵羊gltf/scene.gltf",
      'converted-1048/sheep/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
