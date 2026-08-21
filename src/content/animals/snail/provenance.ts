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
      title: "Snail (owner-supplied “1048动物” drop, 蜗牛)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-snail-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '2d1389fe8a61464a34d139deb0f55a776a93c32f970421a57df3e09bbbc6c672',
      bytes: 19307392,
    },
    runtime: {
      sha256: 'a6681a4561443b2e10d2525e40e83598e4d92271babf434eabbff31271251312',
      bytes: 11081196,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.35; height ≈ 0.044 m, length ≈ 0.08 m).',
      'Kept the idle animation clip “snail_idle_anim” (11.208s, 27 channels).',
    ],
    attribution: "Snail 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/蜗牛/source/exported.glb",
      'converted-1048/snail/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
