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
      title: "Deer (owner-supplied “1048动物” drop, 鹿)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-deer-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '650a749203058643f3ce2626b76d03504d1b2ca536714412cf68fcd4d40ecec6',
      bytes: 7243800,
    },
    runtime: {
      sha256: '666e204051ac16e2de4fc3e8412bfc0d585a71d82d5b4f929b8863968b5e8336',
      bytes: 5005692,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.13; height ≈ 1.714 m, length ≈ 1.9 m).',
      'Kept the idle animation clip “Deer_female_rig.ao|Deer_female_rig.ao|Deer_female_idle|Deer_fem” (13.583s, 171 channels).',
    ],
    attribution: "Deer 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/鹿/source/exported.glb",
      'converted-1048/deer/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
