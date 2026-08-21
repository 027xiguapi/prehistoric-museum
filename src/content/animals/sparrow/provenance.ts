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
      title: "Sparrow (owner-supplied “1048动物” drop, 麻雀gltf)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-sparrow-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '6ad9c6328ecdd5cd5515c794e9a8268eba36f83436c542ed62e2b36326df2d02',
      bytes: 221712,
    },
    runtime: {
      sha256: '086025db4b31f7b176a863bbb58d7f361a3621445d1e1bfb71fe57f9f5fb3088',
      bytes: 1949588,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.51; height ≈ 0.121 m, length ≈ 0.165 m).',
      'Kept the idle animation clip “Sparrow_hover” (6.833s, 202 channels).',
    ],
    attribution: "Sparrow 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/麻雀gltf/scene.gltf",
      'converted-1048/sparrow/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
