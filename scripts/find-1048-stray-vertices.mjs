/* global window */
// Finds skinned vertices whose rest-posed world position falls far outside the
// 0.5–99.5% trimmed bounds (rig-widget strays that inflate every runtime
// bounding box). Vertex indices match the glTF POSITION accessor order, so a
// gltf-transform pass can surgically delete their triangles afterwards.
//
// Output: converted-1048/<slug>/stray-vertices.json
// Usage: node scripts/find-1048-stray-vertices.mjs [--only=slug1,slug2] [--margin=0.3]
import { readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const threeDir = resolve(dirname(require.resolve('three')), '..')
const convertedRoot = join(root, 'converted-1048')

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null
const marginFlag = process.argv.find((argument) => argument.startsWith('--margin='))
const MARGIN = marginFlag ? Number(marginFlag.slice(9)) : 0.3

const pageHtml = `<!doctype html>
<meta charset="utf-8">
<style>html,body{margin:0;height:100%;background:transparent}</style>
<script type="importmap">
{
  "imports": {
    "three": "/three.module.js",
    "three/addons/": "/addons/"
  }
}
</script>
<script type="module">
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'

window.__module = true
const scene = new THREE.Scene()

new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(
  '/model.glb',
  (gltf) => {
    try {
      const model = gltf.scene
      scene.add(model)
      model.updateMatrixWorld(true)
      // 1. Collect every skinned vertex position in its rest bone pose.
      const meshes = []
      const columns = [[], [], []]
      const positions = []
      model.traverse((object) => {
        if (!object.isSkinnedMesh) return
        const position = object.geometry.getAttribute('position')
        const rows = []
        for (let index = 0; index < position.count; index += 1) {
          const vector = new THREE.Vector3().fromBufferAttribute(position, index)
          if (object.bindMode === 'detached') {
            vector.applyMatrix4(object.bindMatrix)
          } else {
            object.applyBoneTransform(index, vector)
          }
          vector.applyMatrix4(object.matrixWorld)
          rows.push([vector.x, vector.y, vector.z])
          columns[0].push(vector.x)
          columns[1].push(vector.y)
          columns[2].push(vector.z)
        }
        meshes.push({ name: object.name || '(skinned)', rows })
      })
      // 2. Trimmed (0.5–99.5%) bounds per axis.
      const trimmed = columns.map((values) => {
        values.sort((a, b) => a - b)
        return [
          values[Math.floor(values.length * 0.005)],
          values[Math.ceil(values.length * 0.995) - 1],
        ]
      })
      window.__payload = { trimmed, meshes, margin: null }
      window.__ready = true
    } catch (error) {
      window.__error = String(error?.stack ?? error)
    }
  },
  undefined,
  (error) => {
    window.__error = String(error)
  },
)
</script>
`

let currentModelPath = null
const browser = await chromium.launch({ headless: true })
const context = await browser.newContext()
await context.route('**/*', async (route) => {
  const url = new URL(route.request().url())
  const respond = (body, type) => route.fulfill({ body, contentType: type })
  try {
    if (url.pathname === '/') {
      return respond(pageHtml, 'text/html; charset=utf-8')
    }
    if (url.pathname === '/model.glb') {
      return respond(await readFile(currentModelPath), 'model/gltf-binary')
    }
    if (url.pathname.startsWith('/addons/')) {
      return respond(
        await readFile(
          join(threeDir, 'examples/jsm', url.pathname.slice('/addons/'.length)),
        ),
        'text/javascript',
      )
    }
    if (url.pathname.startsWith('/three.')) {
      return respond(
        await readFile(join(threeDir, 'build', url.pathname.slice(1))),
        'text/javascript',
      )
    }
  } catch {
    // Fall through to 404.
  }
  return route.fulfill({ status: 404, body: '' })
})

const page = await context.newPage()
const slugs = onlySlugs ? [...onlySlugs] : ['bear']
for (const slug of slugs) {
  currentModelPath = join(convertedRoot, slug, 'model.glb')
  await page.goto('https://render.test/')
  try {
    await page.waitForFunction(() => window.__ready === true, undefined, {
      timeout: 60_000,
    })
  } catch {
    const error = await page.evaluate(() => window.__error ?? 'timeout')
    console.log(`✗ ${slug}: ${String(error).slice(0, 160)}`)
    continue
  }
  const payload = await page.evaluate(() => window.__payload)
  const keepBox = payload.trimmed.map(([low, high]) => {
    const extent = high - low
    return [low - extent * MARGIN, high + extent * MARGIN]
  })
  const meshes = payload.meshes.map((mesh) => {
    const strays = []
    mesh.rows.forEach((row, index) => {
      for (let axis = 0; axis < 3; axis += 1) {
        if (row[axis] < keepBox[axis][0] || row[axis] > keepBox[axis][1]) {
          strays.push(index)
          return
        }
      }
    })
    return {
      name: mesh.name,
      vertexCount: mesh.rows.length,
      strayCount: strays.length,
      strays,
    }
  })
  await writeFile(
    join(convertedRoot, slug, 'stray-vertices.json'),
    JSON.stringify(
      { slug, margin: MARGIN, trimmed: payload.trimmed, keepBox, meshes },
      null,
      2,
    ),
  )
  const total = meshes.reduce((sum, mesh) => sum + mesh.strayCount, 0)
  console.log(
    `✓ ${slug}: ${total} stray vertices outside keep box (margin ${(MARGIN * 100).toFixed(0)}%) → stray-vertices.json`,
  )
}

await browser.close()
console.log('done')