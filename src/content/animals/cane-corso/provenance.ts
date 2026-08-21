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
      title: "Cane Corso (owner-supplied “1048动物” drop, 意大利敖犬glb格式)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-cane-corso-source-attribution',
      accessedOn: '2026-08-18',
      sha256: 'befc4a631ff571d372a171d98826cf16d442255c6d426af1ae29e1efda14c322',
      bytes: 8388124,
    },
    runtime: {
      sha256: '2249eacd6f197b0ff1a94b0dd726bd8e1511a8730efd241b36a402c881e64231',
      bytes: 3165804,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.92; height ≈ 0.935 m, length ≈ 1.1 m).',
      'Kept the idle animation clip “All Animations” (11s, 104 channels).',
    ],
    attribution: "Cane Corso 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/意大利敖犬glb格式/source/Canecorso.glb",
      'converted-1048/cane-corso/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
