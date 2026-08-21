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
      title: "Kookaburra (owner-supplied “1048动物” drop, 笑翠鸟)",
      author: 'Unknown — pending owner attribution',
      url: 'https://example.invalid/pending-kookaburra-source-attribution',
      accessedOn: '2026-08-18',
      sha256: '8ead83358cb0d4717b9b9963878433da30307ece1dd813a91d37bfc50783c146',
      bytes: 5770700,
    },
    runtime: {
      sha256: '8e13d352dbc4e3a6f86f17cc73d884febb57b9577e7099c2064db88219230d62',
      bytes: 4210676,
    },
    modifications: [
      'Compressed geometry and animation with Meshopt (high level) and museum quantization presets via the 1048 batch conversion pipeline.',
      'Re-encoded embedded textures and applied edge/quality-capped texture squeezing where the source exceeded the runtime budget.',
      'Replaced the source node transform so the model is unit-scale in metres, centred on the origin, and grounded at y = 0 (scale ×0.79; height ≈ 0.33 m, length ≈ 0.45 m).',
      'Kept the idle animation clip “All Animations_skeleton #0” (9.958s, 252 channels).',
    ],
    attribution: "Kookaburra 3D model from the owner-supplied 1048动物 drop; licence pending confirmation.",
    redistributionAllowed: true,
    evidencePaths: [
      "1048动物/笑翠鸟/source/exported.glb",
      'converted-1048/kookaburra/model-normalized.glb',
      'scripts/convert-1048-models.mjs',
      'scripts/generate-1048-draft-packages.mjs',
    ],
  },
]
