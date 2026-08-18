// Normalizes the converted tiger GLB for the museum runtime.
//
// The mesh itself is authored in centimetre-scale units (true bounds measured
// with three.js on the decoded, meshopt-decompressed geometry):
//   x ∈ [-23.21, 23.16], y ∈ [-0.278, 114.24], z ∈ [-95.77, 113.67]
// The source node's 0.01 scale converts that to metres, so it is KEPT.
// Normalization therefore only recentres x/z and grounds the feet at y = 0.
//
// After ×0.01 the model is 0.46 m wide, 1.14 m tall, 2.09 m long — a real
// tiger. Ground/center translation (applied on top of the 0.01 scale):
//   y += 0.278 × 0.01 = 0.00278
//   z -= (−95.77 + 113.67) / 2 × 0.01 = −0.0895
//
// Usage: node scripts/normalize-tiger.mjs <in.glb> <out.glb>
import { NodeIO } from '@gltf-transform/core'
import {
  EXTMeshoptCompression,
  KHRMeshQuantization,
} from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'

const [, , input, output] = process.argv

// Measured raw (pre-scale) bounds, see header.
const RAW_MIN_Y = -0.278
const RAW_MIN_Z = -95.77
const RAW_MAX_Z = 113.67
const NODE_SCALE = 0.01

const io = new NodeIO()
  .registerExtensions([KHRMeshQuantization, EXTMeshoptCompression])
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

const document = await io.read(input)
const scene = document.getRoot().listScenes()[0]
const rootChild = scene.listChildren()[0]

// Keep the source 0.01 scale (metres), add grounding/centering translation.
// Vec3 setters must receive arrays — the numeric-args form corrupts the
// property into a scalar on this gltf-transform version.
rootChild.setScale([NODE_SCALE, NODE_SCALE, NODE_SCALE])
rootChild.setTranslation([
  0,
  -RAW_MIN_Y * NODE_SCALE,
  -(((RAW_MIN_Z + RAW_MAX_Z) / 2) * NODE_SCALE),
])

await io.write(output, document)
console.log(
  `normalized: scale ${NODE_SCALE}, grounded y=0, expected height ${((114.24 - RAW_MIN_Y) * NODE_SCALE).toFixed(2)}m, length ${((RAW_MAX_Z - RAW_MIN_Z) * NODE_SCALE).toFixed(2)}m`,
)
console.log(`written ${output}`)
