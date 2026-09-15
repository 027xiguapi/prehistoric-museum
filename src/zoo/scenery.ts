import {
  AdditiveBlending,
  AmbientLight,
  BackSide,
  BoxGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Euler,
  Group,
  HemisphereLight,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Quaternion,
  RingGeometry,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
  type BufferGeometry,
  type Scene,
} from 'three'
import { fbm, lerp, rng } from '@/src/zoo/noise'
import { disposeObject3D } from '@/src/viewer/dispose'
import {
  ObstacleField,
  groundTilt,
  snapToTerrainGround,
} from '@/src/zoo/nav'
import {
  LAKE,
  SITES,
  WATER_LEVEL,
  ZONES,
  zoneAt,
} from '@/src/zoo/park-data'
import {
  groundBumpTexture,
  lakeDistance,
  radialTexture,
  type HeightGrid,
  type PathField,
} from '@/src/zoo/terrain'

const CANOPY = ['#3f6b34', '#4d7c3c', '#35602d', '#568a44', '#446f37']
const TRUNK = ['#4a3527', '#553d2c', '#3f2d21']
const ACACIA_CANOPY = ['#8ba24a', '#7c9440', '#9aae55']
const ACACIA_TRUNK = ['#6b5138', '#7a5c40']
const GRASS = ['#7fae4e', '#6c9c42', '#93bd5c', '#5f8f3c']
const FLOWERS = ['#e8a1b8', '#f0c46a', '#f2ecc0', '#9fd0e8', '#c0a8dc', '#e8846a']
const ROCK = ['#9c8f7c', '#8b7f6d', '#a89b88', '#7f7466']
const ICE = ['#dbeaf4', '#c3dbea', '#eef7fd', '#b6d2e4']
const REED = ['#6f8f4a', '#7f9f56', '#5f7f3f']
const FENCE_WOOD = '#a37c52'
const SIGN_WOOD = '#8d6a45'

interface Placement {
  readonly x: number
  readonly y: number
  readonly z: number
  readonly sx: number
  readonly sy: number
  readonly sz: number
  readonly rotY: number
  readonly tiltX: number
  readonly tiltZ: number
  readonly color: string
}

export interface ParkScenery {
  readonly group: Group
  readonly obstacles: ObstacleField
  readonly sun: DirectionalLight
  readonly sunOffset: Vector3
  /** Exhibit viewpoints, already snapped onto walkable ground. */
  readonly stations: ReadonlyMap<string, { readonly x: number; readonly z: number }>
  update: (elapsed: number, cameraFocus: Vector3) => void
  dispose: () => void
}

export interface SceneryOptions {
  readonly isMobile: boolean
  readonly seed?: number
}

export function buildParkScenery(
  scene: Scene,
  heightGrid: HeightGrid,
  pathField: PathField,
  trail: readonly Vector3[],
  options: SceneryOptions,
): ParkScenery {
  const group = new Group()
  group.name = 'park-scenery'
  const random = rng(options.seed ?? 20260915)
  const obstacles = new ObstacleField(8)
  const placements = new Map<string, Placement[]>()
  const updaters: ((elapsed: number) => void)[] = []

  const list = (key: string): Placement[] => {
    const existing = placements.get(key)
    if (existing) {
      return existing
    }
    const created: Placement[] = []
    placements.set(key, created)
    return created
  }

  const stations = new Map<string, { x: number; z: number }>()
  for (const site of SITES) {
    stations.set(
      site.animalId,
      snapToTerrainGround(heightGrid, site.station[0], site.station[1], 70),
    )
  }

  const nearSite = (x: number, z: number, extra: number): boolean => {
    for (const site of SITES) {
      const clear = site.radius + extra + (site.mode === 'water' ? 6 : 4.5)
      if (Math.hypot(x - site.x, z - site.z) < clear) {
        return true
      }
    }
    for (const station of stations.values()) {
      if (Math.hypot(x - station.x, z - station.z) < extra + 3) {
        return true
      }
    }
    return false
  }

  /** Dry, not too steep, clear of the trail and of the exhibits. */
  const plantable = (x: number, z: number, clearPath = 3, extra = 0): boolean => {
    if (Math.abs(x) > 152 || Math.abs(z) > 114) {
      return false
    }
    if (heightGrid.heightAt(x, z) < WATER_LEVEL + 0.55) {
      return false
    }
    if (heightGrid.slopeAt(x, z) > 0.8) {
      return false
    }
    if (pathField.distanceAt(x, z) < clearPath) {
      return false
    }
    if (nearSite(x, z, extra)) {
      return false
    }
    return !obstacles.blocks(x, z, 1)
  }

  const push = (
    key: string,
    x: number,
    z: number,
    config: {
      readonly sx: number
      readonly sy: number
      readonly sz: number
      readonly color: string
      readonly rotY?: number
      readonly yOffset?: number
      readonly tilt?: boolean
    },
  ): void => {
    const height = heightGrid.heightAt(x, z)
    const tilt = config.tilt ? groundTilt(heightGrid, x, z, 2) : { pitch: 0, roll: 0 }
    list(key).push({
      x,
      y: height + (config.yOffset ?? 0),
      z,
      sx: config.sx,
      sy: config.sy,
      sz: config.sz,
      rotY: config.rotY ?? random() * Math.PI * 2,
      tiltX: tilt.pitch,
      tiltZ: tilt.roll,
      color: config.color,
    })
  }

  // ------------------------------------------------------------------ trees
  const addConifer = (x: number, z: number, scale: number): void => {
    const height = heightGrid.heightAt(x, z)
    const trunkHeight = 1.7 * scale
    push('trunk', x, z, {
      sx: 0.24 * scale,
      sy: trunkHeight,
      sz: 0.24 * scale,
      color: random.pick(TRUNK),
    })
    const color = random.pick(CANOPY)
    for (let layer = 0; layer < 3; layer += 1) {
      const t = layer / 3
      const radius = (1.6 - t * 0.8) * scale
      list('cone').push({
        x,
        y: height + trunkHeight + (0.85 + layer * 1.6) * scale,
        z,
        sx: radius,
        sy: (3.1 - t * 0.7) * scale,
        sz: radius,
        rotY: random() * Math.PI * 2,
        tiltX: 0,
        tiltZ: 0,
        color,
      })
    }
    obstacles.add(x, z, 0.95 * scale)
  }

  const addBroadleaf = (x: number, z: number, scale: number): void => {
    const height = heightGrid.heightAt(x, z)
    const trunkHeight = 2.5 * scale
    push('trunk', x, z, {
      sx: 0.32 * scale,
      sy: trunkHeight,
      sz: 0.32 * scale,
      color: random.pick(TRUNK),
    })
    list('blob').push({
      x,
      y: height + trunkHeight + 1.35 * scale,
      z,
      sx: 1.9 * scale,
      sy: 1.6 * scale,
      sz: 1.9 * scale,
      rotY: 0,
      tiltX: 0,
      tiltZ: 0,
      color: random.pick(CANOPY),
    })
    const satellites = 3 + Math.floor(random() * 2)
    for (let index = 0; index < satellites; index += 1) {
      const angle = (index / satellites) * Math.PI * 2 + random() * 0.6
      const radius = lerp(0.7, 1.35, random()) * scale
      list('blob').push({
        x: x + Math.cos(angle) * radius,
        y: height + trunkHeight + lerp(0.9, 2.3, random()) * scale,
        z: z + Math.sin(angle) * radius,
        sx: 1.2 * scale,
        sy: 1.02 * scale,
        sz: 1.2 * scale,
        rotY: 0,
        tiltX: 0,
        tiltZ: 0,
        color: random.pick(CANOPY),
      })
    }
    obstacles.add(x, z, 1.0 * scale)
  }

  const addAcacia = (x: number, z: number, scale: number): void => {
    const height = heightGrid.heightAt(x, z)
    const trunkHeight = 3.8 * scale
    push('trunk', x, z, {
      sx: 0.26 * scale,
      sy: trunkHeight,
      sz: 0.26 * scale,
      color: random.pick(ACACIA_TRUNK),
    })
    list('blob').push({
      x,
      y: height + trunkHeight + 0.6 * scale,
      z,
      sx: 3.1 * scale,
      sy: 0.86 * scale,
      sz: 3.1 * scale,
      rotY: 0,
      tiltX: 0,
      tiltZ: 0,
      color: random.pick(ACACIA_CANOPY),
    })
    for (let index = 0; index < 3; index += 1) {
      const angle = random() * Math.PI * 2
      const radius = lerp(0.9, 2.0, random()) * scale
      list('blob').push({
        x: x + Math.cos(angle) * radius,
        y: height + trunkHeight + lerp(0.4, 1.1, random()) * scale,
        z: z + Math.sin(angle) * radius,
        sx: 1.55 * scale,
        sy: 0.62 * scale,
        sz: 1.55 * scale,
        rotY: 0,
        tiltX: 0,
        tiltZ: 0,
        color: random.pick(ACACIA_CANOPY),
      })
    }
    obstacles.add(x, z, 0.9 * scale)
  }

  const treeBudgets: readonly {
    readonly count: number
    readonly minX: number
    readonly maxX: number
    readonly minZ: number
    readonly maxZ: number
    readonly kinds: readonly ('conifer' | 'broadleaf' | 'acacia')[]
    readonly scale: readonly [number, number]
  }[] = [
    {
      count: 205,
      minX: 18,
      maxX: 152,
      minZ: -18,
      maxZ: 112,
      kinds: ['conifer', 'conifer', 'broadleaf'],
      scale: [0.85, 1.6],
    },
    {
      count: 74,
      minX: -152,
      maxX: -18,
      minZ: -18,
      maxZ: 112,
      kinds: ['acacia', 'acacia', 'broadleaf'],
      scale: [0.9, 1.7],
    },
    {
      count: 42,
      minX: -18,
      maxX: 18,
      minZ: -18,
      maxZ: 112,
      kinds: ['broadleaf', 'acacia'],
      scale: [0.8, 1.3],
    },
    {
      count: 30,
      minX: -152,
      maxX: 10,
      minZ: -114,
      maxZ: -60,
      kinds: ['conifer'],
      scale: [0.7, 1.15],
    },
  ]

  for (const budget of treeBudgets) {
    let placed = 0
    let attempts = 0
    const limit = budget.count * 45
    while (placed < budget.count && attempts < limit) {
      attempts += 1
      const x = lerp(budget.minX, budget.maxX, random())
      const z = lerp(budget.minZ, budget.maxZ, random())
      if (fbm(x * 0.02, z * 0.02, 2) < 0.32) {
        continue
      }
      if (!plantable(x, z, 4.5, 1.2)) {
        continue
      }
      const scale = lerp(budget.scale[0], budget.scale[1], random())
      const kind = random.pick(budget.kinds)
      if (kind === 'conifer') {
        addConifer(x, z, scale)
      } else if (kind === 'acacia') {
        addAcacia(x, z, scale)
      } else {
        addBroadleaf(x, z, scale)
      }
      placed += 1
    }
  }

  // ------------------------------------------------------------------ rocks
  {
    let placed = 0
    let attempts = 0
    while (placed < 150 && attempts < 9000) {
      attempts += 1
      const x = lerp(-152, 152, random())
      const z = lerp(-114, 114, random())
      const wantsRock =
        heightGrid.slopeAt(x, z) > 0.3 ||
        (z < -18 && z > -62) ||
        Math.abs(lakeDistance(x, z) - LAKE.waterline) < 0.17
      if (!wantsRock) {
        continue
      }
      if (heightGrid.heightAt(x, z) < WATER_LEVEL - 0.5) {
        continue
      }
      if (!plantable(x, z, 2.6, 1)) {
        continue
      }
      const scale = lerp(0.7, 2.4, random())
      push('rock', x, z, {
        sx: scale * lerp(0.9, 1.5, random()),
        sy: scale * lerp(0.5, 0.85, random()),
        sz: scale * lerp(0.9, 1.4, random()),
        color: random.pick(ROCK),
        yOffset: -scale * 0.25,
        tilt: true,
      })
      obstacles.add(x, z, scale * 0.85)
      placed += 1
    }
  }

  // -------------------------------------------------------------- ice field
  {
    let placed = 0
    let attempts = 0
    while (placed < 95 && attempts < 5000) {
      attempts += 1
      const x = lerp(-152, 8, random())
      const z = lerp(-116, -60, random())
      if (!plantable(x, z, 3, 0.8)) {
        continue
      }
      const scale = lerp(0.9, 2.6, random())
      if (random() < 0.5) {
        push('ice', x, z, {
          sx: scale,
          sy: scale * lerp(1.4, 3.0, random()),
          sz: scale,
          color: random.pick(ICE),
          yOffset: -scale * 0.4,
        })
        obstacles.add(x, z, scale * 0.8)
      } else {
        push('snowdrift', x, z, {
          sx: scale * lerp(1.4, 2.6, random()),
          sy: scale * lerp(0.4, 0.7, random()),
          sz: scale * lerp(1.4, 2.4, random()),
          color: random.pick(ICE),
          yOffset: -scale * 0.3,
        })
      }
      placed += 1
    }
  }

  // ------------------------------------------------------------------ reeds
  {
    let placed = 0
    let attempts = 0
    while (placed < 220 && attempts < 9000) {
      attempts += 1
      const x = lerp(20, 152, random())
      const z = lerp(-116, -58, random())
      const distance = lakeDistance(x, z)
      if (distance < LAKE.waterline - 0.07 || distance > LAKE.waterline + 0.15) {
        continue
      }
      if (pathField.distanceAt(x, z) < 3.4) {
        continue
      }
      const scale = lerp(0.8, 1.5, random())
      for (let blade = 0; blade < 2; blade += 1) {
        push('reed', x + random.range(-0.6, 0.6), z + random.range(-0.6, 0.6), {
          sx: 0.09 * scale,
          sy: lerp(1.1, 2.1, random()),
          sz: 0.09 * scale,
          color: random.pick(REED),
        })
      }
      placed += 1
    }
  }

  // -------------------------------------------- trail-side grass & flowers
  const scatterAlongTrail = (
    count: number,
    spread: number,
    place: (x: number, z: number) => boolean,
  ): void => {
    let placed = 0
    let attempts = 0
    const limit = count * 12
    while (placed < count && attempts < limit) {
      attempts += 1
      const sample = trail[Math.floor(random() * trail.length)]
      if (!sample) {
        continue
      }
      const angle = random() * Math.PI * 2
      const radius = Math.sqrt(random()) * spread
      const x = sample.x + Math.cos(angle) * radius
      const z = sample.z + Math.sin(angle) * radius
      if (heightGrid.heightAt(x, z) < WATER_LEVEL + 0.5) {
        continue
      }
      if (pathField.distanceAt(x, z) < 2.1) {
        continue
      }
      if (zoneAt(x, z) === 'lagoon') {
        continue
      }
      if (place(x, z)) {
        placed += 1
      }
    }
  }

  scatterAlongTrail(4200, 36, (x, z) => {
    if (heightGrid.slopeAt(x, z) > 0.7) {
      return false
    }
    const scale = lerp(0.7, 1.5, random())
    push('grass', x, z, {
      sx: 0.15 * scale,
      sy: lerp(0.5, 1.05, random()) * scale,
      sz: 0.15 * scale,
      color: random.pick(GRASS),
    })
    return true
  })

  scatterAlongTrail(520, 30, (x, z) => {
    if (heightGrid.slopeAt(x, z) > 0.55) {
      return false
    }
    if (heightGrid.heightAt(x, z) < WATER_LEVEL + 0.62) {
      return false
    }
    const height = heightGrid.heightAt(x, z)
    const color = random.pick(FLOWERS)
    list('petal').push({
      x,
      y: height + 0.34,
      z,
      sx: 0.075,
      sy: 0.032,
      sz: 0.075,
      rotY: 0,
      tiltX: 0,
      tiltZ: 0,
      color,
    })
    list('stem').push({
      x,
      y: height,
      z,
      sx: 0.012,
      sy: 0.34,
      sz: 0.012,
      rotY: 0,
      tiltX: 0,
      tiltZ: 0,
      color: random.pick(GRASS),
    })
    return true
  })

  // --------------------------------------------------------- paddock fences
  for (const site of SITES) {
    if (!site.paddock) {
      continue
    }
    const station = stations.get(site.animalId) ?? { x: site.x, z: site.z }
    const fenceRadius = site.radius + 3.6
    const gateDirection = Math.atan2(station.x - site.x, station.z - site.z)
    const gateHalfArc = 4.8 / fenceRadius
    const postSpacing = 3.2
    const postCount = Math.max(
      12,
      Math.round((Math.PI * 2 * fenceRadius) / postSpacing),
    )
    const points: { x: number; z: number }[] = []
    for (let index = 0; index < postCount; index += 1) {
      const angle = (index / postCount) * Math.PI * 2
      const delta = Math.atan2(
        Math.sin(angle - gateDirection),
        Math.cos(angle - gateDirection),
      )
      if (Math.abs(delta) < gateHalfArc) {
        continue
      }
      const x = site.x + Math.sin(angle) * fenceRadius
      const z = site.z + Math.cos(angle) * fenceRadius
      const height = heightGrid.heightAt(x, z)
      if (height < WATER_LEVEL + 0.2) {
        continue
      }
      const tilt = groundTilt(heightGrid, x, z, 2)
      points.push({ x, z })
      list('post').push({
        x,
        y: height,
        z,
        sx: 0.14,
        sy: 1.15,
        sz: 0.14,
        rotY: 0,
        tiltX: tilt.pitch * 0.35,
        tiltZ: tilt.roll * 0.35,
        color: FENCE_WOOD,
      })
      obstacles.add(x, z, 0.85)
    }
    for (let index = 0; index < points.length; index += 1) {
      const a = points[index]
      const b = points[(index + 1) % points.length]
      if (!a || !b) {
        continue
      }
      const length = Math.hypot(b.x - a.x, b.z - a.z)
      if (length > postSpacing * 1.9) {
        continue
      }
      const midX = (a.x + b.x) / 2
      const midZ = (a.z + b.z) / 2
      const midHeight = heightGrid.heightAt(midX, midZ)
      for (const railHeight of [0.5, 0.95]) {
        list('rail').push({
          x: midX,
          y: midHeight + railHeight,
          z: midZ,
          sx: 0.06,
          sy: 0.075,
          sz: length,
          rotY: Math.atan2(b.x - a.x, b.z - a.z),
          tiltX: 0,
          tiltZ: 0,
          color: FENCE_WOOD,
        })
      }
    }
  }

  // ------------------------------------------------------- perch rock plinths
  for (const site of SITES) {
    if (site.mode !== 'perch') {
      continue
    }
    const height = heightGrid.heightAt(site.x, site.z)
    const plinthHeight = site.perchHeight ?? 2
    const radius = site.radius + 0.7
    const pedestal = new Mesh(
      new SphereGeometry(1, 24, 16),
      new MeshStandardMaterial({
        color: random.pick(ROCK),
        roughness: 0.95,
        bumpMap: groundBumpTexture(),
        bumpScale: 0.35,
      }),
    )
    pedestal.position.set(site.x, height + plinthHeight * 0.1, site.z)
    pedestal.scale.set(radius, plinthHeight * 0.9, radius)
    pedestal.castShadow = true
    pedestal.receiveShadow = true
    pedestal.name = `perch-${site.animalId}`
    group.add(pedestal)
    obstacles.add(site.x, site.z, radius)
    for (let index = 0; index < 3; index += 1) {
      const angle = (index / 3) * Math.PI * 2 + 0.7
      const bx = site.x + Math.cos(angle) * lerp(radius + 1.2, radius + 3.2, random())
      const bz = site.z + Math.sin(angle) * lerp(radius + 1.2, radius + 3.2, random())
      const scale = lerp(0.7, 1.4, random())
      push('rock', bx, bz, {
        sx: scale,
        sy: scale * 0.7,
        sz: scale * 0.9,
        color: random.pick(ROCK),
        yOffset: -scale * 0.2,
        tilt: true,
      })
      obstacles.add(bx, bz, scale * 0.8)
    }
  }

  // ------------------------------------------------------ exhibit signposts
  for (const site of SITES) {
    const station = stations.get(site.animalId)
    if (!station) {
      continue
    }
    const away = Math.atan2(site.x - station.x, site.z - station.z)
    const signX = station.x + Math.sin(away) * 1.7
    const signZ = station.z + Math.cos(away) * 1.7
    const height = heightGrid.heightAt(signX, signZ)
    const post = new Mesh(
      new CylinderGeometry(0.08, 0.09, 1.5, 8),
      new MeshStandardMaterial({ color: SIGN_WOOD, roughness: 0.85 }),
    )
    post.position.set(signX, height + 0.75, signZ)
    post.castShadow = true
    group.add(post)
    const board = new Mesh(
      new BoxGeometry(1.2, 0.66, 0.07),
      new MeshStandardMaterial({ color: ZONES[site.zone].ground, roughness: 0.7 }),
    )
    board.position.set(signX, height + 1.45, signZ)
    board.rotation.y = away
    board.castShadow = true
    board.name = `sign-${site.animalId}`
    group.add(board)
    obstacles.add(signX, signZ, 0.55)
  }

  // ------------------------------------------------------------ park gateway
  {
    const gateZ = 112
    const gateHeight = heightGrid.heightAt(0, gateZ)
    for (const side of [-1, 1]) {
      const pillarX = side * 5.4
      const pillarHeight = heightGrid.heightAt(pillarX, gateZ)
      const pillar = new Mesh(
        new CylinderGeometry(0.55, 0.7, 5.4, 12),
        new MeshStandardMaterial({
          color: '#a89b88',
          roughness: 0.9,
          bumpMap: groundBumpTexture(),
          bumpScale: 0.4,
        }),
      )
      pillar.position.set(pillarX, pillarHeight + 2.7, gateZ)
      pillar.castShadow = true
      pillar.receiveShadow = true
      group.add(pillar)
      obstacles.add(pillarX, gateZ, 0.95)
    }
    const arch = new Mesh(
      new BoxGeometry(12.8, 0.85, 1.1),
      new MeshStandardMaterial({ color: '#8d6a45', roughness: 0.8 }),
    )
    arch.position.set(0, gateHeight + 5.6, gateZ)
    arch.castShadow = true
    group.add(arch)
    const banner = new Mesh(
      new BoxGeometry(12, 1.6, 0.14),
      new MeshStandardMaterial({ color: '#f4e4bd', roughness: 0.6 }),
    )
    banner.position.set(0, gateHeight + 6.8, gateZ)
    banner.castShadow = true
    banner.name = 'park-banner'
    group.add(banner)
  }

  // -------------------------------------------------------------- instancing
  const geometries: BufferGeometry[] = []
  const materials: MeshStandardMaterial[] = []
  const instancedMeshes: InstancedMesh[] = []

  const addInstanced = (
    key: string,
    geometry: BufferGeometry,
    material: MeshStandardMaterial,
    castShadow: boolean,
  ): void => {
    const items = placements.get(key)
    if (!items || items.length === 0) {
      geometry.dispose()
      material.dispose()
      return
    }
    const mesh = new InstancedMesh(geometry, material, items.length)
    const matrix = new Matrix4()
    const quaternion = new Quaternion()
    const position = new Vector3()
    const scale = new Vector3()
    const euler = new Euler()
    const color = new Color()
    items.forEach((item, index) => {
      euler.set(item.tiltX, item.rotY, item.tiltZ)
      quaternion.setFromEuler(euler)
      position.set(item.x, item.y, item.z)
      scale.set(item.sx, item.sy, item.sz)
      matrix.compose(position, quaternion, scale)
      mesh.setMatrixAt(index, matrix)
      mesh.setColorAt(index, color.set(item.color))
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true
    }
    mesh.castShadow = castShadow
    mesh.receiveShadow = true
    mesh.name = `scenery-${key}`
    scene.add(mesh)
    geometries.push(geometry)
    materials.push(material)
    instancedMeshes.push(mesh)
  }

  const standard = (roughness: number): MeshStandardMaterial =>
    new MeshStandardMaterial({
      roughness,
      metalness: 0,
      bumpMap: groundBumpTexture(),
      bumpScale: 0.35,
    })

  const trunkGeometry = new CylinderGeometry(0.8, 1, 1, 10)
  trunkGeometry.translate(0, 0.5, 0)
  const coneGeometry = new ConeGeometry(1, 1, 12)
  coneGeometry.translate(0, 0.5, 0)
  const reedGeometry = new CylinderGeometry(0.5, 0.85, 1, 5)
  reedGeometry.translate(0, 0.5, 0)
  const grassGeometry = new ConeGeometry(1, 1, 5)
  grassGeometry.translate(0, 0.5, 0)
  const stemGeometry = new CylinderGeometry(1, 1, 1, 5)
  stemGeometry.translate(0, 0.5, 0)
  const postGeometry = new CylinderGeometry(1, 1, 1, 8)
  postGeometry.translate(0, 0.5, 0)

  addInstanced('trunk', trunkGeometry, standard(0.92), true)
  addInstanced('blob', new SphereGeometry(1, 16, 12), standard(0.88), true)
  addInstanced('cone', coneGeometry, standard(0.9), true)
  addInstanced('rock', new SphereGeometry(1, 14, 10), standard(0.95), true)
  addInstanced('ice', new ConeGeometry(1, 1, 6), standard(0.4), true)
  addInstanced('snowdrift', new SphereGeometry(1, 14, 10), standard(0.6), true)
  addInstanced('reed', reedGeometry, standard(0.85), false)
  addInstanced('grass', grassGeometry, standard(0.85), false)
  addInstanced('petal', new SphereGeometry(1, 10, 8), standard(0.6), false)
  addInstanced('stem', stemGeometry, standard(0.85), false)
  addInstanced('post', postGeometry, standard(0.88), true)
  addInstanced('rail', new BoxGeometry(1, 1, 1), standard(0.88), true)

  scene.add(group)

  const sky = buildSky(scene, options.isMobile)
  updaters.push(sky.update)

  return {
    group,
    obstacles,
    sun: sky.sun,
    sunOffset: sky.sunOffset,
    stations,
    update: (elapsed: number, cameraFocus: Vector3) => {
      for (const updater of updaters) {
        updater(elapsed)
      }
      // A single shadow map cannot cover a 320 m valley at a readable
      // resolution, so the sun rig follows the visitor instead.
      sky.sun.position.copy(cameraFocus).add(sky.sunOffset)
      sky.sun.target.position.copy(cameraFocus)
      sky.sun.target.updateMatrixWorld()
    },
    dispose: () => {
      for (const geometry of geometries) {
        geometry.dispose()
      }
      for (const material of materials) {
        material.dispose()
      }
      for (const mesh of instancedMeshes) {
        mesh.dispose()
      }
      disposeObject3D(group)
      sky.dispose()
    },
  }
}

interface ParkSky {
  readonly sun: DirectionalLight
  readonly sunOffset: Vector3
  update: (elapsed: number) => void
  dispose: () => void
}

function buildSky(scene: Scene, isMobile: boolean): ParkSky {
  scene.add(new HemisphereLight(0xd8ecff, 0xc9b088, 0.85))
  scene.add(new AmbientLight(0xfff3e2, 0.22))

  const sun = new DirectionalLight(0xfff2d8, 2.5)
  const sunOffset = new Vector3(58, 96, 44)
  sun.position.copy(sunOffset)
  sun.castShadow = true
  const shadowSize = isMobile ? 1024 : 2048
  sun.shadow.mapSize.set(shadowSize, shadowSize)
  sun.shadow.camera.left = -82
  sun.shadow.camera.right = 82
  sun.shadow.camera.top = 82
  sun.shadow.camera.bottom = -82
  sun.shadow.camera.near = 8
  sun.shadow.camera.far = 280
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.05
  scene.add(sun)
  scene.add(sun.target)

  const skyMaterial = new ShaderMaterial({
    side: BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      top: { value: new Color('#3f9ede') },
      mid: { value: new Color('#a5dcf6') },
      horizon: { value: new Color('#f2f6f0') },
      ground: { value: new Color('#b9c8a4') },
    },
    vertexShader: `
      varying vec3 vSkyPosition;
      void main() {
        vSkyPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 top;
      uniform vec3 mid;
      uniform vec3 horizon;
      uniform vec3 ground;
      varying vec3 vSkyPosition;
      void main() {
        float h = normalize(vSkyPosition).y;
        vec3 color = h < 0.0
          ? mix(ground, horizon, smoothstep(-0.18, 0.0, h))
          : mix(horizon, mix(mid, top, smoothstep(0.18, 0.8, h)), smoothstep(0.0, 0.14, h));
        gl_FragColor = vec4(color, 1.0);
      }`,
  })
  const skyDome = new Mesh(new SphereGeometry(700, 32, 20), skyMaterial)
  skyDome.name = 'park-sky'
  // Painted first with no depth write, so it fills the background and the
  // valley simply draws over it.
  skyDome.renderOrder = -10
  scene.add(skyDome)

  const disc = new Mesh(
    new SphereGeometry(16, 24, 16),
    new MeshBasicMaterial({ color: '#ffe8a8', fog: false }),
  )
  disc.position.copy(sunOffset).setLength(560)
  disc.name = 'sun-disc'
  disc.renderOrder = -9
  scene.add(disc)

  const haloMaterial = new MeshBasicMaterial({
    map: radialTexture('#ffeec2', 'cc'),
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    fog: false,
    blending: AdditiveBlending,
  })
  const halo = new Mesh(new PlaneGeometry(210, 210), haloMaterial)
  halo.position.copy(disc.position)
  halo.lookAt(0, 0, 0)
  halo.renderOrder = -8
  scene.add(halo)

  const random = rng(515)
  const cloudGeometry = new SphereGeometry(1, 14, 10)
  const cloudMaterial = new MeshStandardMaterial({
    color: '#ffffff',
    roughness: 0.95,
    transparent: true,
    opacity: 0.94,
  })
  interface Cloud {
    readonly group: Group
    readonly speed: number
    readonly baseY: number
  }
  const clouds: Cloud[] = []
  const cloudGroup = new Group()
  cloudGroup.name = 'park-clouds'
  for (let index = 0; index < 14; index += 1) {
    const cloud = new Group()
    const puffs = 3 + Math.floor(random() * 3)
    const scale = lerp(5, 11, random())
    for (let puff = 0; puff < puffs; puff += 1) {
      const mesh = new Mesh(cloudGeometry, cloudMaterial)
      mesh.position.set(
        (puff - (puffs - 1) / 2) * scale * 0.9 + random.range(-2, 2),
        random.range(-1.5, 2.5),
        random.range(-3, 3),
      )
      mesh.scale.setScalar(
        (puff === Math.floor(puffs / 2) ? 1.3 : lerp(0.75, 1.05, random())) * scale,
      )
      cloud.add(mesh)
    }
    const baseY = lerp(52, 78, random())
    cloud.position.set(random.range(-240, 240), baseY, random.range(-240, 200))
    cloudGroup.add(cloud)
    clouds.push({ group: cloud, speed: lerp(0.5, 1.6, random()), baseY })
  }
  scene.add(cloudGroup)

  const flyerMaterial = new MeshBasicMaterial({
    color: '#3c4438',
    side: DoubleSide,
    fog: false,
  })
  const wingGeometry = new PlaneGeometry(2.4, 0.6)
  wingGeometry.translate(1.2, 0, 0)
  interface Flyer {
    readonly group: Group
    readonly left: Mesh
    readonly right: Mesh
    readonly centreX: number
    readonly centreZ: number
    readonly radius: number
    readonly height: number
    readonly speed: number
    readonly phase: number
  }
  const flyers: Flyer[] = []
  for (let index = 0; index < 7; index += 1) {
    const flyerGroup = new Group()
    const left = new Mesh(wingGeometry, flyerMaterial)
    const right = new Mesh(wingGeometry, flyerMaterial)
    left.rotation.y = Math.PI
    flyerGroup.add(left, right)
    scene.add(flyerGroup)
    flyers.push({
      group: flyerGroup,
      left,
      right,
      centreX: random.range(20, 130),
      centreZ: random.range(-100, -40),
      radius: lerp(24, 52, random()),
      height: lerp(34, 56, random()),
      speed: lerp(0.06, 0.14, random()),
      phase: random() * 10,
    })
  }

  return {
    sun,
    sunOffset,
    update: (elapsed: number) => {
      for (const cloud of clouds) {
        cloud.group.position.x += cloud.speed * 0.5
        if (cloud.group.position.x > 260) {
          cloud.group.position.x = -260
        }
        cloud.group.position.y =
          cloud.baseY + Math.sin(elapsed * 0.08 + cloud.baseY) * 2.4
      }
      for (const flyer of flyers) {
        const angle = elapsed * flyer.speed + flyer.phase
        flyer.group.position.set(
          flyer.centreX + Math.cos(angle) * flyer.radius,
          flyer.height + Math.sin(elapsed * 0.35 + flyer.phase) * 2.2,
          flyer.centreZ + Math.sin(angle) * flyer.radius * 0.7,
        )
        flyer.group.rotation.y = -angle
        const flap = Math.sin(elapsed * 4.2 + flyer.phase) * 0.5
        flyer.left.rotation.z = -flap
        flyer.right.rotation.z = flap
      }
    },
    dispose: () => {
      skyMaterial.dispose()
      skyDome.geometry.dispose()
      disc.geometry.dispose()
      const discMaterial = disc.material
      if (discMaterial instanceof MeshBasicMaterial) {
        discMaterial.dispose()
      }
      halo.geometry.dispose()
      haloMaterial.dispose()
      cloudGeometry.dispose()
      cloudMaterial.dispose()
      wingGeometry.dispose()
      flyerMaterial.dispose()
      scene.remove(skyDome, disc, halo, cloudGroup)
      for (const flyer of flyers) {
        scene.remove(flyer.group)
      }
    },
  }
}

/**
 * A shallow earthen plinth under every land exhibit, so an animal reads as
 * standing on prepared ground rather than floating on the terrain.
 */
export function buildExhibitPlinths(scene: Scene, heightGrid: HeightGrid): Group {
  const group = new Group()
  group.name = 'park-plinths'
  const material = new MeshStandardMaterial({
    color: '#c2ab84',
    roughness: 0.95,
    bumpMap: groundBumpTexture(),
    bumpScale: 0.4,
  })
  for (const site of SITES) {
    if (site.mode !== 'land') {
      continue
    }
    const height = heightGrid.heightAt(site.x, site.z)
    const radius = site.radius + 1.1
    const plinth = new Mesh(
      new CylinderGeometry(radius, radius * 1.06, 0.3, 28),
      material,
    )
    plinth.position.set(site.x, height + 0.02, site.z)
    plinth.receiveShadow = true
    plinth.name = `plinth-${site.animalId}`
    group.add(plinth)
  }
  scene.add(group)
  return group
}

/** Ring marking the exhibit the visitor is currently standing in front of. */
export function buildStationMarker(scene: Scene): Mesh {
  const geometry = new RingGeometry(1.5, 1.85, 48)
  geometry.rotateX(-Math.PI / 2)
  const material = new MeshBasicMaterial({
    color: '#f4b85f',
    transparent: true,
    opacity: 0,
    depthWrite: false,
    side: DoubleSide,
  })
  const ring = new Mesh(geometry, material)
  ring.name = 'station-marker'
  ring.renderOrder = 4
  scene.add(ring)
  return ring
}
