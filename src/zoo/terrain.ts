import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  Fog,
  Group,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  RepeatWrapping,
  SRGBColorSpace,
  Vector3,
  type Scene,
} from 'three'
import { clamp, fbm, lerp, rng, smoothstep, vnoise } from '@/src/zoo/noise'
import {
  LAKE,
  PARK,
  PATH_POINTS,
  RIDGE,
  WATER_LEVEL,
  ZONES,
  zoneAt,
  type ZoneId,
} from '@/src/zoo/park-data'

export const TERRAIN_SEGMENTS_X = 160
export const TERRAIN_SEGMENTS_Z = 120
export const TERRAIN_CELL_X = PARK.width / TERRAIN_SEGMENTS_X
export const TERRAIN_CELL_Z = PARK.depth / TERRAIN_SEGMENTS_Z

// ------------------------------------------------------------------ profiles

/** `0` outside the escarpment band, `1` on the crest plateau. */
export function ridgeProfile(z: number): number {
  if (z >= RIDGE.southFoot || z <= RIDGE.northFoot) {
    return 0
  }
  if (z <= RIDGE.southCrest && z >= RIDGE.northCrest) {
    return 1
  }
  if (z > RIDGE.southCrest) {
    return smoothstep(RIDGE.southFoot, RIDGE.southCrest, z)
  }
  return smoothstep(RIDGE.northFoot, RIDGE.northCrest, z)
}

/** Normalised ellipse distance to the lagoon centre; `1` is the rim. */
export function lakeDistance(x: number, z: number): number {
  const nx = (x - LAKE.cx) / LAKE.rx
  const nz = (z - LAKE.cz) / LAKE.rz
  return Math.sqrt(nx * nx + nz * nz)
}

/**
 * Height offset contributed by the lagoon: a deep basin inside the waterline,
 * then a sandy berm ringing it so visitors stand above the water.
 */
export function lakeOffset(x: number, z: number): number {
  const d = lakeDistance(x, z)
  if (d < LAKE.waterline) {
    const t = d / LAKE.waterline
    return -LAKE.depth * (1 - t * t)
  }
  return (
    LAKE.bermHeight *
    smoothstep(LAKE.waterline, LAKE.berm, d) *
    (1 - smoothstep(LAKE.berm, LAKE.berm + 0.44, d))
  )
}

/** Raised rim around the whole valley, so the park reads as a tabletop model. */
function rimOffset(x: number, z: number): number {
  const edge = Math.max(
    smoothstep(124, 154, Math.abs(x)),
    smoothstep(90, 116, Math.abs(z)),
  )
  return edge * (3.2 + 2.6 * vnoise(x * 0.08 + 3, z * 0.08 + 7))
}

export function terrainHeight(x: number, z: number): number {
  let h =
    1.35 +
    (fbm(x * 0.012 + 11, z * 0.012 + 7, 3) - 0.5) * 2.4 +
    (fbm(x * 0.052 + 3, z * 0.052 + 9, 2) - 0.5) * 0.55

  // Forest rises into soft wooded mounds.
  h +=
    1.2 *
    smoothstep(22, 62, x) *
    smoothstep(-24, 16, z) *
    fbm(x * 0.03 + 2, z * 0.03 + 5, 2)

  // Ice field: broad drifts.
  h +=
    1.5 *
    smoothstep(-58, -96, z) *
    smoothstep(-8, -58, x) *
    fbm(x * 0.04 + 5, z * 0.04 + 2, 2)

  h += RIDGE.height * ridgeProfile(z)
  h += rimOffset(x, z)
  h += lakeOffset(x, z)

  return h
}

// -------------------------------------------------------------- sampled grid

/**
 * Bilinear height field on the terrain mesh's own grid. Collision and the
 * visual mesh therefore agree exactly at every grid point, and the explorer
 * reads the ground from a small array instead of re-evaluating nine octaves
 * of noise every frame.
 */
export class HeightGrid {
  readonly nx: number
  readonly nz: number
  private readonly values: Float32Array

  constructor() {
    this.nx = TERRAIN_SEGMENTS_X + 1
    this.nz = TERRAIN_SEGMENTS_Z + 1
    this.values = new Float32Array(this.nx * this.nz)
    for (let jz = 0; jz < this.nz; jz += 1) {
      const z = -PARK.depth / 2 + jz * TERRAIN_CELL_Z
      for (let jx = 0; jx < this.nx; jx += 1) {
        const x = -PARK.width / 2 + jx * TERRAIN_CELL_X
        this.values[jz * this.nx + jx] = terrainHeight(x, z)
      }
    }
  }

  /** Bilinear sample in metres. Falls back to the analytic height outside. */
  heightAt(x: number, z: number): number {
    const gx = (x + PARK.width / 2) / TERRAIN_CELL_X
    const gz = (z + PARK.depth / 2) / TERRAIN_CELL_Z
    const ix = Math.floor(gx)
    const iz = Math.floor(gz)
    if (ix < 0 || iz < 0 || ix >= this.nx - 1 || iz >= this.nz - 1) {
      return terrainHeight(x, z)
    }
    const fx = gx - ix
    const fz = gz - iz
    const a = this.values[iz * this.nx + ix] ?? 0
    const b = this.values[iz * this.nx + ix + 1] ?? a
    const c = this.values[(iz + 1) * this.nx + ix] ?? a
    const d = this.values[(iz + 1) * this.nx + ix + 1] ?? b
    return lerp(lerp(a, b, fx), lerp(c, d, fx), fz)
  }

  /** Steepest gradient magnitude around a point, as rise over run. */
  slopeAt(x: number, z: number): number {
    const step = TERRAIN_CELL_X
    const left = this.heightAt(x - step, z)
    const right = this.heightAt(x + step, z)
    const back = this.heightAt(x, z - step)
    const front = this.heightAt(x, z + step)
    return Math.max(Math.abs(right - left), Math.abs(front - back)) / (2 * step)
  }
}

// ------------------------------------------------------------ path distance

/**
 * Chamfer distance transform from the visitor trail, in metres. The terrain
 * mesh colours itself from it and the tour uses it to keep to the path.
 */
export class PathField {
  readonly cell = 2
  readonly nx: number
  readonly nz: number
  private readonly values: Float32Array

  constructor(samples: readonly Vector3[]) {
    this.nx = Math.ceil(PARK.width / this.cell)
    this.nz = Math.ceil(PARK.depth / this.cell)
    const count = this.nx * this.nz
    const values = new Float32Array(count).fill(1e6)

    for (const sample of samples) {
      const ix = Math.floor((sample.x + PARK.width / 2) / this.cell)
      const iz = Math.floor((sample.z + PARK.depth / 2) / this.cell)
      if (ix < 0 || iz < 0 || ix >= this.nx || iz >= this.nz) {
        continue
      }
      const index = iz * this.nx + ix
      if (values[index] !== undefined && values[index] > 0) {
        values[index] = 0
      }
    }

    const diagonal = Math.SQRT2
    const relax = (index: number, neighbour: number, cost: number): void => {
      const candidate = (values[neighbour] ?? 1e6) + cost
      if (candidate < (values[index] ?? 1e6)) {
        values[index] = candidate
      }
    }
    for (let iz = 0; iz < this.nz; iz += 1) {
      for (let ix = 0; ix < this.nx; ix += 1) {
        const index = iz * this.nx + ix
        if (ix > 0) relax(index, index - 1, 1)
        if (iz > 0) relax(index, index - this.nx, 1)
        if (ix > 0 && iz > 0) relax(index, index - this.nx - 1, diagonal)
        if (ix < this.nx - 1 && iz > 0) relax(index, index - this.nx + 1, diagonal)
      }
    }
    for (let iz = this.nz - 1; iz >= 0; iz -= 1) {
      for (let ix = this.nx - 1; ix >= 0; ix -= 1) {
        const index = iz * this.nx + ix
        if (ix < this.nx - 1) relax(index, index + 1, 1)
        if (iz < this.nz - 1) relax(index, index + this.nx, 1)
        if (ix < this.nx - 1 && iz < this.nz - 1) {
          relax(index, index + this.nx + 1, diagonal)
        }
        if (ix > 0 && iz < this.nz - 1) relax(index, index + this.nx - 1, diagonal)
      }
    }
    this.values = values
  }

  /** Distance to the trail in metres. */
  distanceAt(x: number, z: number): number {
    const gx = (x + PARK.width / 2) / this.cell - 0.5
    const gz = (z + PARK.depth / 2) / this.cell - 0.5
    const ix = Math.floor(gx)
    const iz = Math.floor(gz)
    if (ix < 0 || iz < 0 || ix >= this.nx - 1 || iz >= this.nz - 1) {
      return 1e3
    }
    const fx = gx - ix
    const fz = gz - iz
    const a = this.values[iz * this.nx + ix] ?? 1e3
    const b = this.values[iz * this.nx + ix + 1] ?? a
    const c = this.values[(iz + 1) * this.nx + ix] ?? a
    const d = this.values[(iz + 1) * this.nx + ix + 1] ?? b
    return lerp(lerp(a, b, fx), lerp(c, d, fx), fz) * this.cell
  }
}

export function pathSamples(divisions = 1400): Vector3[] {
  const points = PATH_POINTS.map(
    ([x, z]) => new Vector3(x, terrainHeight(x, z), z),
  )
  const curve = new CatmullRomCurve3(points, true, 'catmullrom', 0.5)
  return curve.getSpacedPoints(divisions)
}

// ------------------------------------------------------------------ textures

let bumpTexture: CanvasTexture | null = null

/** Faint procedural grain so large ground planes never look like flat paint. */
export function groundBumpTexture(): CanvasTexture {
  if (bumpTexture) {
    return bumpTexture
  }
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')
  if (context) {
    const image = context.createImageData(size, size)
    const random = rng(4177)
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        const angleX = (x / size) * Math.PI * 2
        const angleY = (y / size) * Math.PI * 2
        const v =
          fbm(
            Math.cos(angleX) * 3 + 10 + Math.cos(angleY) * 3,
            Math.sin(angleX) * 3 + Math.sin(angleY) * 3,
            4,
          ) +
          (random() - 0.5) * 0.06
        const level = clamp(v, 0, 1) * 255
        const index = (y * size + x) * 4
        image.data[index] = level
        image.data[index + 1] = level
        image.data[index + 2] = level
        image.data[index + 3] = 255
      }
    }
    context.putImageData(image, 0, 0)
  }
  const texture = new CanvasTexture(canvas)
  texture.wrapS = RepeatWrapping
  texture.wrapT = RepeatWrapping
  texture.colorSpace = SRGBColorSpace
  bumpTexture = texture
  return texture
}

export function radialTexture(color = '#ffffff', alpha = 'aa'): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 128
  const context = canvas.getContext('2d')
  if (context) {
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.35, `${color}${alpha}`)
    gradient.addColorStop(1, `${color}00`)
    context.fillStyle = gradient
    context.fillRect(0, 0, 128, 128)
  }
  return new CanvasTexture(canvas)
}

// -------------------------------------------------------------------- build

export interface ParkTerrain {
  readonly heightGrid: HeightGrid
  readonly pathField: PathField
  update: (elapsed: number) => void
  dispose: () => void
}

interface ZoneBlend {
  readonly zone: ZoneId
  readonly ground: Color
  readonly accent: Color
  readonly rock: Color
}

const zoneColors: Readonly<Record<ZoneId, ZoneBlend>> = Object.fromEntries(
  Object.values(ZONES).map((definition) => {
    const blend: ZoneBlend = {
      zone: definition.id,
      ground: new Color(definition.ground),
      accent: new Color(definition.groundAccent),
      rock: new Color(definition.rock),
    }
    return [definition.id, blend] as const
  }),
) as Readonly<Record<ZoneId, ZoneBlend>>

const ICE_FLOOR = new Color('#f2f8fc')
const WET_SAND = new Color('#bda878')
const TRAIL = new Color('#f4e4bd')

export function buildParkTerrain(scene: Scene, samples: readonly Vector3[]): ParkTerrain {
  const group = new Group()
  group.name = 'park-terrain'
  const heightGrid = new HeightGrid()
  const pathField = new PathField(samples)

  // ------------------------------------------------------------ ground mesh
  const geometry = new PlaneGeometry(
    PARK.width,
    PARK.depth,
    TERRAIN_SEGMENTS_X,
    TERRAIN_SEGMENTS_Z,
  )
  geometry.rotateX(-Math.PI / 2)
  const position = geometry.attributes.position
  if (!(position instanceof BufferAttribute)) {
    throw new Error('地形几何缺少顶点位置。')
  }
  const colors = new Float32Array(position.count * 3)
  const scratch = new Color()
  const ground = new Color()
  const accent = new Color()
  const rock = new Color()

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index)
    const z = position.getZ(index)
    const height = heightGrid.heightAt(x, z)
    position.setY(index, height)

    const blend = zoneColors[zoneAt(x, z)]
    const noiseA = fbm(x * 0.07 + 4, z * 0.07 + 2, 2)
    const noiseB = fbm(x * 0.21 + 9, z * 0.21 + 6, 2)
    ground.copy(blend.ground)
    accent.copy(blend.accent)
    rock.copy(blend.rock)

    scratch.copy(ground).lerp(accent, noiseA)
    // Exposed rock on the steep faces, strongest on the escarpment.
    const slope = heightGrid.slopeAt(x, z)
    scratch.lerp(rock, smoothstep(0.34, 0.72, slope) * 0.85)

    // Packed snow lies on the flat parts of the ice field.
    if (blend.zone === 'ice') {
      const flat = 1 - smoothstep(0.08, 0.3, slope)
      scratch.lerp(ICE_FLOOR, flat * 0.7 + noiseB * 0.15)
    }

    // Wet sand just above the waterline, dry sand on the beach.
    const lakeD = lakeDistance(x, z)
    scratch.lerp(WET_SAND, (1 - smoothstep(LAKE.waterline, LAKE.waterline + 0.09, lakeD)) * 0.8)

    // The visitor trail, painted only on dry land.
    if (height > WATER_LEVEL + 0.3) {
      const distance = pathField.distanceAt(x, z)
      const worn = 1 - smoothstep(1.5, 3.1, distance + (noiseB - 0.5) * 1.4)
      scratch.lerp(TRAIL, worn * 0.82)
    }

    colors[index * 3] = scratch.r
    colors[index * 3 + 1] = scratch.g
    colors[index * 3 + 2] = scratch.b
  }
  geometry.setAttribute('color', new BufferAttribute(colors, 3))
  geometry.computeVertexNormals()

  const bump = groundBumpTexture()
  const terrainBump = bump.clone()
  terrainBump.wrapS = RepeatWrapping
  terrainBump.wrapT = RepeatWrapping
  terrainBump.repeat.set(64, 48)
  terrainBump.needsUpdate = true

  const terrainMaterial = new MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.96,
    metalness: 0,
    bumpMap: terrainBump,
    bumpScale: 0.4,
  })
  const terrain = new Mesh(geometry, terrainMaterial)
  terrain.name = 'terrain'
  terrain.receiveShadow = true
  group.add(terrain)

  // --------------------------------------------------------- diorama skirt
  const skirt = buildSkirt()
  group.add(skirt)

  // ---------------------------------------------------------------- water
  const waterUniforms = {
    uTime: { value: 0 },
    uCentre: { value: [LAKE.cx, LAKE.cz] as [number, number] },
    uRadius: { value: [LAKE.rx, LAKE.rz] as [number, number] },
    uWaterline: { value: LAKE.waterline },
    uFogColor: { value: new Color(PARK_HAZE) },
    uFogNear: { value: 300 },
    uFogFar: { value: 1200 },
  }
  const waterMaterial = new MeshStandardMaterial({
    color: 0x6cc0e0,
    roughness: 0.18,
    metalness: 0,
    transparent: true,
    opacity: 0.9,
  })
  waterMaterial.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = waterUniforms.uTime
    shader.uniforms.uCentre = waterUniforms.uCentre
    shader.uniforms.uRadius = waterUniforms.uRadius
    shader.uniforms.uWaterline = waterUniforms.uWaterline
    shader.uniforms.uFogColor = waterUniforms.uFogColor
    shader.uniforms.uFogNear = waterUniforms.uFogNear
    shader.uniforms.uFogFar = waterUniforms.uFogFar
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;
        varying vec3 vLakeWorld;`,
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
        vec4 lakeWorld = modelMatrix * vec4(position, 1.0);
        transformed.y += sin(lakeWorld.x * 0.55 + uTime * 1.15) * 0.05
                       + sin(lakeWorld.z * 0.72 - uTime * 0.9) * 0.05
                       + sin((lakeWorld.x + lakeWorld.z) * 0.31 + uTime * 1.7) * 0.03;
        vLakeWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      )
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform float uTime;
        uniform vec2 uCentre;
        uniform vec2 uRadius;
        uniform float uWaterline;
        uniform vec3 uFogColor;
        uniform float uFogNear;
        uniform float uFogFar;
        varying vec3 vLakeWorld;
        float lakeHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float lakeNoise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(lakeHash(i), lakeHash(i + vec2(1.0, 0.0)), f.x),
                     mix(lakeHash(i + vec2(0.0, 1.0)), lakeHash(i + vec2(1.0, 1.0)), f.x), f.y);
        }`,
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec2 lakeDelta = (vLakeWorld.xz - uCentre) / uRadius;
        float lakeD = length(lakeDelta);
        float deep = 1.0 - smoothstep(uWaterline - 0.30, uWaterline + 0.01, lakeD);
        vec3 lakeColor = mix(vec3(0.60, 0.86, 0.88), vec3(0.10, 0.36, 0.58), deep);
        vec2 ripple = vec2(vLakeWorld.x * 0.9, vLakeWorld.z * 0.5 - uTime * 0.35);
        float swell = lakeNoise(ripple * 1.6) * 0.6 + lakeNoise(ripple * 3.7 + 5.3) * 0.4;
        lakeColor += smoothstep(0.54, 0.78, swell) * 0.26;
        float shimmer = lakeNoise(vec2(vLakeWorld.x * 1.9, vLakeWorld.z * 1.9 - uTime * 0.8));
        lakeColor += smoothstep(0.72, 0.95, shimmer) * 0.14;
        float foamBand = smoothstep(uWaterline - 0.10, uWaterline - 0.015, lakeD)
                       * (1.0 - smoothstep(uWaterline + 0.012, uWaterline + 0.10, lakeD));
        lakeColor = mix(lakeColor, vec3(1.0), foamBand * (0.55 + 0.45 * shimmer));
        diffuseColor.rgb = lakeColor;
        float viewDistance = length(vViewPosition);
        float fogMix = smoothstep(uFogNear, uFogFar, viewDistance);
        diffuseColor.rgb = mix(diffuseColor.rgb, uFogColor, fogMix);`,
      )
  }

  const waterWidth = LAKE.rx * 2 + 26
  const waterDepth = LAKE.rz * 2 + 26
  const water = new Mesh(new PlaneGeometry(waterWidth, waterDepth, 96, 48), waterMaterial)
  water.rotation.x = -Math.PI / 2
  water.position.set(LAKE.cx, WATER_LEVEL, LAKE.cz)
  water.receiveShadow = false
  water.name = 'lagoon-water'
  group.add(water)

  scene.add(group)

  return {
    heightGrid,
    pathField,
    update: (elapsed: number) => {
      waterUniforms.uTime.value = elapsed
    },
    dispose: () => {
      geometry.dispose()
      terrainMaterial.dispose()
      terrainBump.dispose()
      skirt.geometry.dispose()
      const skirtMaterial = skirt.material
      if (skirtMaterial instanceof MeshStandardMaterial) {
        skirtMaterial.dispose()
      }
      water.geometry.dispose()
      waterMaterial.dispose()
      scene.remove(group)
    },
  }
}

/** The clay slab the valley sits on, so the world reads as a tabletop model. */
function buildSkirt(): Mesh {
  const halfWidth = PARK.width / 2
  const halfDepth = PARK.depth / 2
  const step = 4
  const loop: [number, number][] = []
  for (let x = -halfWidth; x < halfWidth; x += step) loop.push([x, -halfDepth])
  for (let z = -halfDepth; z < halfDepth; z += step) loop.push([halfWidth, z])
  for (let x = halfWidth; x > -halfWidth; x -= step) loop.push([x, halfDepth])
  for (let z = halfDepth; z > -halfDepth; z -= step) loop.push([-halfWidth, z])

  const count = loop.length
  const positions = new Float32Array(count * 2 * 3)
  const colors = new Float32Array(count * 2 * 3)
  const indices: number[] = []
  const top = new Color('#e2c79c')
  const bottom = new Color('#a8825a')
  const random = rng(913)

  loop.forEach(([x, z], index) => {
    const height = terrainHeight(x, z) - 0.05
    positions.set([x, height, z], index * 6)
    positions.set([x, PARK.skirtBottom, z], index * 6 + 3)
    const shade = 0.92 + random() * 0.16
    colors.set([top.r * shade, top.g * shade, top.b * shade], index * 6)
    colors.set([bottom.r, bottom.g, bottom.b], index * 6 + 3)
    const next = (index + 1) % count
    indices.push(
      index * 2,
      next * 2,
      index * 2 + 1,
      next * 2,
      next * 2 + 1,
      index * 2 + 1,
    )
  })

  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
  geometry.setAttribute('color', new Float32BufferAttribute(colors, 3))
  geometry.setIndex(indices)
  geometry.computeVertexNormals()

  const mesh = new Mesh(
    geometry,
    new MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.95,
      side: DoubleSide,
    }),
  )
  mesh.name = 'park-skirt'
  mesh.receiveShadow = true
  return mesh
}

/**
 * Sky tone shared by the scene background, the distance haze and the water
 * shader, so a pixel that nothing covers still reads as sky rather than as an
 * opaque black hole.
 */
export const PARK_HAZE = '#cfe4ee'

/**
 * Warm distance haze so far exhibits read as depth rather than fog. The far
 * distance is generous: the park is 320 m across, and the whole-park view
 * looks along a 600 m diagonal from 400 m up, so a tighter haze would erase
 * the far half of the valley.
 */
export function applyParkFog(scene: Scene): Fog {
  const fog = new Fog(PARK_HAZE, 300, 1200)
  scene.fog = fog
  return fog
}
