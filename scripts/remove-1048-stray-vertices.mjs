// Surgically deletes stray-vertex triangles from a pristine 1048 model using
// the vertex indices found by find-1048-stray-vertices.mjs (three.js posed
// positions; indices match the glTF POSITION accessor order). Rebuilds every
// vertex attribute as plain FLOAT accessors — no quantization re-encoding.
//
// Input : converted-1048/<slug>/model.glb + stray-vertices.json
// Output: converted-1048/<slug>/model-cleaned.glb
// Usage: node scripts/remove-1048-stray-vertices.mjs --slug=bear
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const slugFlag = process.argv.find((argument) => argument.startsWith('--slug='))
const slug = slugFlag.slice(7)

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

/** Dequantizes a stored accessor array to plain floats (glTF 2.0 + KHR_mesh_quantization). */
function toFloatArray(accessor) {
  const stored = Array.from(accessor.getArray())
  const normalized = accessor.getNormalized()
  if (!normalized) {
    return stored.map((value) => Number(value))
  }
  const componentType = accessor.getComponentType()
  const divisor =
    componentType === 5121 ? 255 // UNSIGNED_BYTE
      : componentType === 5123 ? 65535 // UNSIGNED_SHORT
        : componentType === 5120 ? 127 // BYTE
          : 32767 // SHORT
  let min = null
  let max = null
  try {
    min = accessor.getMin()
    max = accessor.getMax()
  } catch {
    // Accessors without stored min/max (e.g. JOINTS_0/WEIGHTS_0) have no range mapping.
  }
  const components = accessor.getType() === 'VEC3' ? 3 : accessor.getType() === 'VEC2' ? 2 : accessor.getType() === 'VEC4' ? 4 : 1
  const usesRange = min?.length === components && max?.length === components
  return stored.map((value, index) => {
    const unit = Math.max(value / divisor, -1)
    if (!usesRange) {
      return unit
    }
    const axis = index % components
    return unit * (max[axis] - min[axis]) + min[axis]
  })
}

const report = JSON.parse(
  await readFile(join(root, 'converted-1048', slug, 'stray-vertices.json'), 'utf8'),
)
const inputPath = join(root, 'converted-1048', slug, 'model.glb')
const outputPath = join(root, 'converted-1048', slug, 'model-cleaned.glb')

const document = await io.read(inputPath)

let removedTriangles = 0
let removedVertices = 0

for (const entry of report.meshes) {
  if (!entry.strayCount) {
    continue
  }
  const straySet = new Set(entry.strays)
  // Match the mesh node by the GLTFLoader object name (node names are unique
  // in these single-mesh exports; Object_<n> is the glTF node name).
  const node = document
    .getRoot()
    .listNodes()
    .find((candidate) => candidate.getName() === entry.name)
  if (!node?.getMesh()) {
    throw new Error(`node ${entry.name} not found or has no mesh`)
  }
  const mesh = node.getMesh()
  const primitives = mesh.listPrimitives()
  if (primitives.length !== 1) {
    throw new Error(`expected 1 primitive on ${entry.name}, found ${primitives.length}`)
  }
  const primitive = primitives[0]
  if (primitive.listTargets().length) {
    throw new Error(`morph targets on ${entry.name} are not supported`)
  }
  const position = primitive.getAttribute('POSITION')
  const vertexCount = position.getCount()
  if (vertexCount !== entry.vertexCount) {
    throw new Error(
      `vertex count mismatch: glTF ${vertexCount} vs measured ${entry.vertexCount}`,
    )
  }
  const indicesAccessor = primitive.getIndices()
  const keptTriangles = []
  let triangleCount = 0
  if (indicesAccessor) {
    const indices = Array.from(indicesAccessor.getArray()).map(Number)
    for (let i = 0; i + 2 < indices.length; i += 3) {
      triangleCount += 1
      if (
        straySet.has(indices[i]) ||
        straySet.has(indices[i + 1]) ||
        straySet.has(indices[i + 2])
      ) {
        removedTriangles += 1
        continue
      }
      keptTriangles.push(indices[i], indices[i + 1], indices[i + 2])
    }
  } else {
    for (let i = 0; i + 2 < vertexCount; i += 3) {
      triangleCount += 1
      if (straySet.has(i) || straySet.has(i + 1) || straySet.has(i + 2)) {
        removedTriangles += 1
        continue
      }
      keptTriangles.push(i, i + 1, i + 2)
    }
  }

  // Compact vertex ids: kept vertices get fresh consecutive ids.
  const remap = new Array(vertexCount).fill(-1)
  let nextId = 0
  for (const index of keptTriangles) {
    if (remap[index] === -1) {
      remap[index] = nextId
      nextId += 1
    }
  }
  removedVertices = vertexCount - nextId

  for (const semantic of primitive.listSemantics()) {
    const attribute = primitive.getAttribute(semantic)
    const components =
      attribute.getType() === 'VEC3' ? 3
        : attribute.getType() === 'VEC2' ? 2
          : attribute.getType() === 'VEC4' ? 4
            : attribute.getType() === 'SCALAR' ? 1 : 0
    if (!components) {
      throw new Error(`unsupported attribute type ${attribute.getType()} (${semantic})`)
    }
    const floats = toFloatArray(attribute)
    const compacted = []
    for (let vertex = 0; vertex < vertexCount; vertex += 1) {
      if (remap[vertex] === -1) {
        continue
      }
      for (let component = 0; component < components; component += 1) {
        compacted.push(floats[vertex * components + component])
      }
    }
    const replacement = document
      .createAccessor(`${semantic}_cleaned_${slug}`)
      .setType(attribute.getType())
      .setArray(new Float32Array(compacted))
    primitive.setAttribute(semantic, replacement)
  }
  if (indicesAccessor) {
    const replacement = document
      .createAccessor(`INDICES_cleaned_${slug}`)
      .setType('SCALAR')
      .setArray(
        new Uint32Array(keptTriangles.map((index) => remap[index])),
      )
    primitive.setIndices(replacement)
  } else {
    const replacement = document
      .createAccessor(`INDICES_cleaned_${slug}`)
      .setType('SCALAR')
      .setArray(new Uint32Array(keptTriangles.map((index) => remap[index])))
    primitive.setIndices(replacement)
  }
  console.log(
    `${entry.name}: ${triangleCount}→${triangleCount - removedTriangles} triangles, ${vertexCount}→${nextId} vertices`,
  )
}

await io.write(outputPath, document)
console.log(
  `✓ ${slug}: removed ${removedTriangles} triangle(s) / ${removedVertices} vertex(es) → ${outputPath}`,
)
