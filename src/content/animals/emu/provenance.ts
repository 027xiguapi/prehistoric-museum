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
      title: "Emu (owner-supplied “1048动物” drop, 鸸鹋)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-emu-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '6eb731c4c11001bfdae0d91c6e562aa56cda0320856b88d1450f92c4afe68ecd',
      bytes: 7927500,
    },
    runtime: {
      sha256: '605924386a187a0ce6f254f58ad61708c3b50f74438dcd3b2430e698a7b7093b',
      bytes: 4262212,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.16; height ≈ 1.629 m, length ≈ 1.7 m).',
      'Kept the idle animation clip “All Animations_skeleton #0” (14.958s, 231 channels).',
    ],
    attribution: "Emu 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/鸸鹋/source/exported.glb",
      'converted-1048/emu/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
