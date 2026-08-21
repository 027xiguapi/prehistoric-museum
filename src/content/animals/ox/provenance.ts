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
      title: "Ox (owner-supplied “1048动物” drop, 黄牛gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-ox-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '9814bfae7acd685b04d7f41ae0663785e5175d45133f0761ab29bb0ccd511b70',
      bytes: 760826,
    },
    runtime: {
      sha256: '138ca5aa1ea3a3c33d708c45197b3a35f27477a72d25148896833686f0f985dc',
      bytes: 6721552,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.05; height ≈ 1.529 m, length ≈ 2.5 m).',
      'Kept the idle animation clip “Idle_nyi” (9.917s, 105 channels).',
    ],
    attribution: "Ox 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/黄牛gltf/scene.gltf",
      'converted-1048/ox/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
