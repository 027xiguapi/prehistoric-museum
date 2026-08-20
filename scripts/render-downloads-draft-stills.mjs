/* global window, document */
// Renders thumbnail/poster/poster-portrait stills for every model-downloads
// draft from its normalized runtime GLB (tiger pipeline conventions:
// thumbnail 320×320 yaw 35 pitch 10, poster 1200×675 yaw 25 pitch 8,
// poster-portrait 390×844 yaw 30 pitch 6; sharp webp q88; live-canvas
// toDataURL re-render). Mirrors scripts/render-1048-draft-stills.mjs.
//
// `frameScale` tightens the camera for models whose raw bounds are inflated by
// a few extreme vertices; start at 1 and tighten only where a still proves it.
//
// Output: src/content/animals/<slug>/images/{thumbnail,poster,poster-portrait}.webp
// Usage: node scripts/render-downloads-draft-stills.mjs [--only=slug1,slug2]
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import sharp from 'sharp'

import { activeDownloads } from './downloads-manifest.mjs'
import { DOWNLOADS_CONTENT_A } from './downloads-draft-content-a.mjs'
import { DOWNLOADS_CONTENT_B } from './downloads-draft-content-b.mjs'
import { DOWNLOADS_CONTENT_C } from './downloads-draft-content-c.mjs'
import { DOWNLOADS_CONTENT_D } from './downloads-draft-content-d.mjs'

const require = createRequire(import.meta.url)
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const threeDir = resolve(dirname(require.resolve('three')), '..')
const animalsRoot = join(root, 'src/content/animals')

// Drafts with authored bilingual content (the batch being onboarded).
// frameScale tightens the camera; dy shifts the look-at target up (fraction
// of model height) for diorama models whose subject sits atop a stand/stem
// (macaw on a pole, bumblebee on a flower).
const contentSlugs = new Set(
  [
    ...DOWNLOADS_CONTENT_A,
    ...DOWNLOADS_CONTENT_B,
    ...DOWNLOADS_CONTENT_C,
    ...DOWNLOADS_CONTENT_D,
  ].map((entry) => entry.slug),
)
const SLUG_OVERRIDES = {
  macaw: { frame: 0.62, dy: 0.33 },
  bumblebee: { frame: 0.55, dy: 0.33 },
  brachiosaurus: { frame: 1.25, dy: 0 },
  'atlas-moth': { frame: 0.6, dy: 0 },
  'swallowtail-butterfly': { frame: 0.6, dy: 0 },
  'morpho-butterfly': { frame: 0.6, dy: 0, pitch: 25 },
  'caeleb-dressel-start': { frame: 0.5, dy: 0.12 },
  'niklas-kaul-longjump': { frame: 0.45, dy: 0.05 },
}
const SLUGS = Object.fromEntries(
  activeDownloads()
    .map((entry) => entry.slug)
    .filter((slug) => contentSlugs.has(slug))
    .map((slug) => [slug, { frame: 1, dy: 0, pitch: 0, ...SLUG_OVERRIDES[slug] }]),
)

const onlyFlag = process.argv.find((argument) => argument.startsWith('--only='))
const onlySlugs = onlyFlag ? new Set(onlyFlag.slice(7).split(',')) : null

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
const frameScale = Number(params.get('frame') ?? 1)
const dy = Number(params.get('dy') ?? 0)

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
      const radius = Math.max(size.x, size.y, size.z) * frameScale

      const camera = new THREE.PerspectiveCamera(32, width / height, radius / 100, radius * 20)
      const distance = radius * 1.55
      const yawRad = THREE.MathUtils.degToRad(yaw)
      const pitchRad = THREE.MathUtils.degToRad(pitch)
      const targetY = center.y + size.y * dy
      camera.position.set(
        center.x + distance * Math.cos(pitchRad) * Math.sin(yawRad),
        targetY + distance * Math.sin(pitchRad) + size.y * 0.05,
        center.z + distance * Math.cos(pitchRad) * Math.cos(yawRad),
      )
      camera.lookAt(center.x, targetY, center.z)
      window.__renderFrame = () => renderer.render(scene, camera)
      window.__renderFrame()
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
page.on('pageerror', (error) => console.log('[pageerror]', error.message))

const shots = [
  { name: 'thumbnail.webp', w: 320, h: 320, yaw: 35, pitch: 10 },
  { name: 'poster.webp', w: 1200, h: 675, yaw: 25, pitch: 8 },
  { name: 'poster-portrait.webp', w: 390, h: 844, yaw: 30, pitch: 6 },
]

for (const [slug, config] of Object.entries(SLUGS)) {
  if (onlySlugs && !onlySlugs.has(slug)) {
    continue
  }
  currentModelPath = join(animalsRoot, slug, 'model', 'model.glb')
  const outDir = join(animalsRoot, slug, 'images')
  await mkdir(outDir, { recursive: true })
  for (const shot of shots) {
    await page.goto(
      `https://render.test/?w=${shot.w}&h=${shot.h}&yaw=${shot.yaw}&pitch=${shot.pitch + config.pitch}&frame=${config.frame}&dy=${config.dy}`,
    )
    try {
      await page.waitForFunction(() => window.__ready === true, undefined, {
        timeout: 60_000,
      })
    } catch {
      const error = await page.evaluate(() => window.__error ?? 'timeout')
      console.log(`✗ ${slug}/${shot.name}: ${String(error).slice(0, 160)}`)
      process.exitCode = 1
      continue
    }
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
  }
  console.log(`✓ ${slug} → 3 stills in ${outDir}`)
}

await browser.close()
console.log('done')
