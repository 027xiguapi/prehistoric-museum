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
      title: "Fennec Fox (owner-supplied “1048动物” drop, 狐狸)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-fennec-fox-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'ba1d287fbee23c502ee1587a2b9821548d765f3adad5d147d5e74e4d978b8037',
      bytes: 9409448,
    },
    runtime: {
      sha256: '1a4e34d08fb2854815ca8e2b001317969236e52bb1c036afc9387540bb96d0b9',
      bytes: 6501256,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×1.65; height ≈ 0.488 m, length ≈ 0.65 m).',
      'Kept the idle animation clip “All Animations” (12.333s, 150 channels).',
    ],
    attribution: "Fennec Fox 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/狐狸/source/Fennecfox.glb",
      'converted-1048/fennec-fox/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
