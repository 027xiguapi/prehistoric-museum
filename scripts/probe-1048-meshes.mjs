// Temp probe: locate stray-vertex meshes in bear/pigeon/sparrow. Reports each
// mesh node with skin binding, vertex count and node-matrix world bounds from
// bind-space POSITIONs (exact for unskinned meshes; skinned meshes show the
// bind-space box, which still reveals far-away local geometry).
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  })

function multiply(a, b) {
  const out = new Array(16).fill(0)
  for (let column = 0; column < 4; column += 1) {
    for (let row = 0; row < 4; row += 1) {
      let sum = 0
      for (let k = 0; k < 4; k += 1) {
        sum += a[k * 4 + row] * b[column * 4 + k]
      }
      out[column * 4 + row] = sum
    }
  }
  return out
}

function transformPoint(matrix, point) {
  const [x, y, z] = point
  return [
    matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12],
    matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13],
    matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14],
  ]
}

const IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

for (const slug of process.argv.slice(2)) {
  const document = await io.read(join(root, 'converted-1048', slug, 'model.glb'))
  const skins = document.getRoot().listSkins().length
  console.log(`\n=== ${slug} (skins: ${skins}) ===`)
  const scene = document.getRoot().listScenes()[0]
  const rows = []
  const walk = (node, parent, depth) => {
    const world = multiply(parent, node.getMatrix())
    const mesh = node.getMesh()
    if (mesh) {
      const min = [Infinity, Infinity, Infinity]
      const max = [-Infinity, -Infinity, -Infinity]
      let vertices = 0
      for (const primitive of mesh.listPrimitives()) {
        const array = primitive.getAttribute('POSITION')?.getArray()
        if (!array) continue
        for (let i = 0; i < array.length; i += 3) {
          const [x, y, z] = transformPoint(world, [array[i], array[i + 1], array[i + 2]])
          vertices += 1
          for (let axis = 0; axis < 3; axis += 1) {
            const value = [x, y, z][axis]
            if (value < min[axis]) min[axis] = value
            if (value > max[axis]) max[axis] = value
          }
        }
      }
      const skin = node.getSkin()
      rows.push({
        depth,
        node: node.getName() || '(node)',
        mesh: mesh.getName() || '(mesh)',
        skinned: skin ? (skin.getName() || 'skin') : '',
        vertices,
        box: min.map((value, axis) => `${value.toFixed(2)}..${max[axis].toFixed(2)}`),
      })
    }
    for (const child of node.listChildren()) {
      walk(child, world, depth + 1)
    }
  }
  for (const child of scene.listChildren()) {
    walk(child, IDENTITY, 0)
  }
  for (const row of rows) {
    console.log(
      `${'  '.repeat(row.depth)}${row.node} | mesh=${row.mesh} | skin=${row.skinned || '-'} | verts=${row.vertices} | box=[${row.box.join(', ')}]`,
    )
  }
}
