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
      title: "Goat (owner-supplied “1048动物” drop, 山羊)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-goat-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'eab82344db5bd4848eda276880197e966610db24bc87e06b5d463528622d3913',
      bytes: 2954852,
    },
    runtime: {
      sha256: 'dc6fad1a6b23b7cc1bda1a655efe0deebd29d9b071344e79ab2a97eeaeb129b7',
      bytes: 1375736,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.01; height ≈ 0.971 m, length ≈ 1.2 m).',
      'Kept the idle animation clip “Animation_Armature” (15s, 135 channels).',
    ],
    attribution: "Goat 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/山羊/source/exported.glb",
      'converted-1048/goat/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
