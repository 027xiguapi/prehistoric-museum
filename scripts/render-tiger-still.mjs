/* global window, document */
// Renders the pilot tiger model to thumbnail/poster stills with three.js +
// Playwright, independent of the museum's production preview pipeline (which
// requires a fully published animal). Output sizes match the existing animal
// images: thumbnail 320×320, poster 1200×675, poster-portrait 390×844.
// All resources are served through page.route fulfillment (no HTTP server).
// Usage: node scripts/render-tiger-still.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
// require.resolve('three') → <store>/three/build/three.cjs; the package root
// is one level up from `build`.
const threeDir = resolve(dirname(require.resolve('three')), '..')
const modelPath = join(root, 'src/content/animals/tiger/model/model.glb')
const outDir = join(root, 'src/content/animals/tiger/images')

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

window.__module=true
const params=new URLSearchParams(location.search)
const width = Number(params.get('w'))
const height = Number(params.get('h'))
const yaw = Number(params.get('yaw') ?? 25)
const pitch = Number(params.get('pitch') ?? 8)

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
renderer.setSize(width, height)
renderer.setPixelRatio(1)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const key = new THREE.DirectionalLight(0xffffff, 2.6)
key.position.set(2.5, 4, 3)
scene.add(key)
const fill = new THREE.DirectionalLight(0xdfeaff, 1.1)
fill.position.set(-3, 1.5, -2)
scene.add(fill)
scene.add(new THREE.AmbientLight(0xffffff, 1.1))

new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(
  '/model.glb',
  (gltf) => {
    try {
      const model = gltf.scene
      scene.add(model)
      model.traverse((object) => {
        if (object.isMesh) {
          object.material.side = THREE.DoubleSide
          object.frustumCulled = false
        }
      })
      model.updateMatrixWorld(true)
      const box = new THREE.Box3().setFromObject(model)
      const size = box.getSize(new THREE.Vector3())
      const center = box.getCenter(new THREE.Vector3())
      const radius = Math.max(size.x, size.y, size.z)

      const camera = new THREE.PerspectiveCamera(32, width / height, radius / 100, radius * 20)
      const distance = radius * 1.55
      const yawRad = THREE.MathUtils.degToRad(yaw)
      const pitchRad = THREE.MathUtils.degToRad(pitch)
      camera.position.set(
        center.x + distance * Math.cos(pitchRad) * Math.sin(yawRad),
        center.y + distance * Math.sin(pitchRad) + size.y * 0.05,
        center.z + distance * Math.cos(pitchRad) * Math.cos(yawRad),
      )
      camera.lookAt(center)
      window.__renderFrame = () => renderer.render(scene, camera)
      window.__renderFrame()
      let meshCount = 0
      gltf.scene.traverse((object) => {
        if (object.isMesh) meshCount += 1
      })
      window.__bounds = { size: [size.x, size.y, size.z], min: [box.min.x, box.min.y, box.min.z], max: [box.max.x, box.max.y, box.max.z], meshCount }
      const gl = renderer.getContext()
      const pixels = new Uint8Array(4 * 100)
      gl.readPixels(Math.floor(width/2)-5, Math.floor(height/2)-5, 10, 10, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
      window.__centerPixels = Array.from(pixels.slice(0, 8))
      window.__info = { triangles: renderer.info.render.triangles, calls: renderer.info.render.calls, geometries: renderer.info.memory.geometries }
      window.__glError = gl.getError()
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

const files = new Map()
async function loadFiles() {
  files.set('/', { body: pageHtml, type: 'text/html; charset=utf-8' })
  files.set('/three.module.js', {
    body: await readFile(join(threeDir, 'build/three.module.js')),
    type: 'text/javascript',
  })
  files.set('/addons/loaders/GLTFLoader.js', {
    body: await readFile(
      join(threeDir, 'examples/jsm/loaders/GLTFLoader.js'),
    ),
    type: 'text/javascript',
  })
  files.set('/addons/libs/meshopt_decoder.module.js', {
    body: await readFile(
      join(threeDir, 'examples/jsm/libs/meshopt_decoder.module.js'),
    ),
    type: 'text/javascript',
  })
  files.set('/model.glb', {
    body: await readFile(modelPath),
    type: 'model/gltf-binary',
  })
}
await loadFiles()

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext()
// Serve any file under the three package generically: the addons import each
// other (BufferGeometryUtils, SkeletonUtils, …) and three.module.js re-exports
// from three.core.js, so a fixed file map misses dependencies.
await context.route('**/*', async (route) => {
  const url = new URL(route.request().url())
  const respond = (body, type) => route.fulfill({ body, contentType: type })
  try {
    if (url.pathname === '/') {
      return respond(pageHtml, 'text/html; charset=utf-8')
    }
    if (url.pathname === '/model.glb') {
      return respond(await readFile(modelPath), 'model/gltf-binary')
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

const shots = [
  { name: 'thumbnail.webp', w: 320, h: 320, yaw: 35, pitch: 10 },
  { name: 'poster.webp', w: 1200, h: 675, yaw: 25, pitch: 8 },
  { name: 'poster-portrait.webp', w: 390, h: 844, yaw: 30, pitch: 6 },
]
await mkdir(outDir, { recursive: true })
for (const shot of shots) {
  const page = await context.newPage()
  page.on('pageerror', (error) => console.log('[pageerror]', error.message))
  await page.goto(
    `https://render.test/?w=${shot.w}&h=${shot.h}&yaw=${shot.yaw}&pitch=${shot.pitch}`,
  )
  try {
    await page.waitForFunction(() => window.__ready === true, undefined, {
      timeout: 60_000,
    })
  } catch {
    const diagnostics = await page.evaluate(() => ({
      ready: window.__ready ?? false, bounds: window.__bounds, meshes: window.__meshes, glError: window.__gl,
      error: window.__error ?? null,
    }))
    throw new Error(`Render never became ready: ${JSON.stringify(diagnostics)}`)
  }
  const diagnostics = await page.evaluate(() => ({
    bounds: window.__bounds ?? null,
    glError: window.__glError ?? null, info: window.__info,
  }))
  console.log(`[diag ${shot.name}]`, JSON.stringify(diagnostics))
  // Re-render and pull the frame from the live canvas — screenshots taken
  // after WebGL buffer swaps can come back empty.
  const png = Buffer.from(
    (await page.evaluate(() => {
      window.__renderFrame?.()
      return document.querySelector('canvas')?.toDataURL('image/png')
    }))?.replace(/^data:image\/png;base64,/, '') ?? '',
    'base64',
  )
  const webp = await sharp(png).webp({ quality: 88 }).toBuffer()
  await writeFile(join(outDir, shot.name), webp)
  console.log(`✓ ${shot.name} (${shot.w}×${shot.h}, ${webp.length} bytes)`)
  await page.close()
}

await browser.close()
console.log(`written to ${outDir}`)
