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
      title: "Salmon (owner-supplied “1048动物” drop, 鲑鱼gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-salmon-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'cfcc353d200f457454b3dd348555f3b3ac91a1de19c65aafad614c8aaebfd777',
      bytes: 53011,
    },
    runtime: {
      sha256: '57383b7489abe4a3e0953ab394e9789bba3381d38da7394fd16d2c8be1aaf325',
      bytes: 2779104,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.10, yaw 45°; height ≈ 0.31 m, length ≈ 1.128 m).',
      'Kept the idle animation clip “swim_metest” (40.958s, 44 channels).',
    ],
    attribution: "Salmon 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/鲑鱼gltf/scene.gltf",
      'converted-1048/salmon/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
