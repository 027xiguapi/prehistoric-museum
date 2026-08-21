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
      title: "Kitten (owner-supplied “1048动物” drop, 小猫glb)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-kitten-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'ef8c856e13b7351a373abfbf485966fdd48d3829539cc5863d924f6100ca6e4c',
      bytes: 7109324,
    },
    runtime: {
      sha256: 'e23bbe4d8342b2954bfe22499d6998340e5da68594af3dfb35e912500c566460',
      bytes: 3949316,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.64; height ≈ 0.266 m, length ≈ 0.4 m).',
      'Kept the idle animation clip “Take 001” (10s, 219 channels).',
    ],
    attribution: "Kitten 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/小猫glb/source/Kitten.glb",
      'converted-1048/kitten/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
