import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  Euler,
  Group,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Quaternion,
  RingGeometry,
  Sprite,
  SpriteMaterial,
  SRGBColorSpace,
  Vector3,
  type Scene,
} from 'three'
import { rng } from '@/src/zoo/noise'
import { disposeObject3D } from '@/src/viewer/dispose'
import { WATER_LEVEL } from '@/src/zoo/park-data'
import { radialTexture, terrainHeight } from '@/src/zoo/terrain'

interface Effect {
  update: (dt: number) => boolean
}

const CONFETTI_COLORS = [
  '#ff6b6b',
  '#ffd166',
  '#8ee68a',
  '#48dbfb',
  '#c58bff',
  '#ff8fb1',
  '#ffffff',
]

function roundRectPath(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
): void {
  context.beginPath()
  context.moveTo(x + radius, y)
  context.arcTo(x + width, y, x + width, y + height, radius)
  context.arcTo(x + width, y + height, x, y + height, radius)
  context.arcTo(x, y + height, x, y, radius)
  context.arcTo(x, y, x + width, y, radius)
  context.closePath()
}

function starTexture(): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const context = canvas.getContext('2d')
  if (context) {
    context.translate(32, 32)
    context.fillStyle = '#ffffff'
    context.beginPath()
    for (let point = 0; point < 8; point += 1) {
      const radius = point % 2 === 0 ? 30 : 11
      const angle = (point / 8) * Math.PI * 2 - Math.PI / 2
      context.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
    }
    context.closePath()
    context.fill()
  }
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  return texture
}

function heartTexture(): CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const context = canvas.getContext('2d')
  if (context) {
    context.fillStyle = '#ff6b9d'
    context.beginPath()
    context.moveTo(32, 56)
    context.bezierCurveTo(4, 36, 8, 8, 32, 20)
    context.bezierCurveTo(56, 8, 60, 36, 32, 56)
    context.closePath()
    context.fill()
  }
  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  return texture
}

/**
 * Park particle and water effects: ripples, splashes, greeting sparkles,
 * discovery hearts, celebration confetti, trail dust, butterflies.
 */
export class ParkEffects {
  private readonly scene: Scene
  private readonly items: Effect[] = []
  private readonly random = rng(31337)
  private readonly star: CanvasTexture
  private readonly heart: CanvasTexture
  private readonly glow: CanvasTexture
  private readonly rippleGeometry: RingGeometry
  private readonly butterflies: {
    readonly group: Group
    readonly left: Mesh
    readonly right: Mesh
    readonly home: Vector3
    readonly phase: number
    readonly speed: number
    readonly height: number
    readonly radius: number
  }[] = []
  private greeter: Sprite | null = null
  private greeterTexture: CanvasTexture | null = null

  constructor(scene: Scene) {
    this.scene = scene
    this.star = starTexture()
    this.heart = heartTexture()
    this.glow = radialTexture('#ffffff')
    this.rippleGeometry = new RingGeometry(0.62, 1, 40)
    this.buildButterflies()
  }

  // ------------------------------------------------------------- water rings

  ripple(x: number, z: number, size = 2, opacity = 0.55): void {
    const material = new MeshBasicMaterial({
      color: '#f2fbff',
      transparent: true,
      opacity,
      depthWrite: false,
    })
    const mesh = new Mesh(this.rippleGeometry, material)
    mesh.rotation.x = -Math.PI / 2
    mesh.position.set(x, WATER_LEVEL + 0.04, z)
    mesh.renderOrder = 5
    this.scene.add(mesh)
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        const progress = elapsed / 2.1
        mesh.scale.setScalar(0.5 * size + progress * size * 1.8)
        material.opacity = opacity * (1 - progress)
        if (progress >= 1) {
          this.scene.remove(mesh)
          material.dispose()
          return false
        }
        return true
      },
    })
  }

  splash(x: number, z: number, size = 3): void {
    this.ripple(x, z, size, 0.85)
    setTimeout(() => {
      this.ripple(x, z, size * 0.75, 0.6)
    }, 130)
    const count = 30
    const geometry = new BufferGeometry()
    const positions = new Float32Array(count * 3)
    const velocities: [number, number, number][] = []
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = x
      positions[index * 3 + 1] = WATER_LEVEL
      positions[index * 3 + 2] = z
      const angle = this.random() * Math.PI * 2
      const speed = this.random() * 2 + 1.2
      velocities.push([
        Math.cos(angle) * speed * size * 0.3,
        4 + this.random() * 4,
        Math.sin(angle) * speed * size * 0.3,
      ])
    }
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    const material = new PointsMaterial({
      map: this.glow,
      color: '#e2f6ff',
      size: 0.7,
      transparent: true,
      depthWrite: false,
    })
    const points = new Points(geometry, material)
    this.scene.add(points)
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        const array = geometry.attributes.position
        if (!(array instanceof BufferAttribute)) {
          return false
        }
        const values = array.array
        for (let index = 0; index < count; index += 1) {
          const velocity = velocities[index]
          if (!velocity) {
            continue
          }
          velocity[1] -= 11 * dt
          values[index * 3] = (values[index * 3] ?? 0) + velocity[0] * dt
          values[index * 3 + 1] = (values[index * 3 + 1] ?? 0) + velocity[1] * dt
          values[index * 3 + 2] = (values[index * 3 + 2] ?? 0) + velocity[2] * dt
        }
        array.needsUpdate = true
        material.opacity = 1 - elapsed / 1.3
        if (elapsed > 1.3) {
          this.scene.remove(points)
          geometry.dispose()
          material.dispose()
          return false
        }
        return true
      },
    })
  }

  // ----------------------------------------------------------------- sparkle

  sparkle(x: number, y: number, z: number, color = '#ffe066', count = 26, spread = 1.4): void {
    const geometry = new BufferGeometry()
    const positions = new Float32Array(count * 3)
    const velocities: [number, number, number][] = []
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = x
      positions[index * 3 + 1] = y
      positions[index * 3 + 2] = z
      const angle = this.random() * Math.PI * 2
      const altitude = this.random() * Math.PI - Math.PI / 2
      const speed = (2 + this.random() * 3) * spread
      velocities.push([
        Math.cos(angle) * Math.cos(altitude) * speed,
        Math.sin(altitude) * speed + 3,
        Math.sin(angle) * Math.cos(altitude) * speed,
      ])
    }
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    const material = new PointsMaterial({
      map: this.star,
      color,
      size: 0.8,
      transparent: true,
      depthWrite: false,
      alphaTest: 0.08,
    })
    const points = new Points(geometry, material)
    points.renderOrder = 20
    this.scene.add(points)
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        const array = geometry.attributes.position
        if (!(array instanceof BufferAttribute)) {
          return false
        }
        const values = array.array
        for (let index = 0; index < count; index += 1) {
          const velocity = velocities[index]
          if (!velocity) {
            continue
          }
          velocity[1] -= 7 * dt
          values[index * 3] = (values[index * 3] ?? 0) + velocity[0] * dt
          values[index * 3 + 1] = (values[index * 3 + 1] ?? 0) + velocity[1] * dt
          values[index * 3 + 2] = (values[index * 3 + 2] ?? 0) + velocity[2] * dt
        }
        array.needsUpdate = true
        material.opacity = 1 - elapsed / 1.2
        if (elapsed > 1.2) {
          this.scene.remove(points)
          geometry.dispose()
          material.dispose()
          return false
        }
        return true
      },
    })
  }

  hearts(x: number, y: number, z: number): void {
    for (let index = 0; index < 6; index += 1) {
      const material = new SpriteMaterial({
        map: this.heart,
        transparent: true,
        depthTest: false,
      })
      const sprite = new Sprite(material)
      sprite.position.set(
        x + (this.random() - 0.5) * 2,
        y + this.random() * 0.8,
        z + (this.random() - 0.5) * 2,
      )
      sprite.scale.setScalar(0.6 + this.random() * 0.5)
      sprite.renderOrder = 999
      this.scene.add(sprite)
      let elapsed = -index * 0.13
      const wobble = this.random() * 6
      this.items.push({
        update: (dt) => {
          elapsed += dt
          if (elapsed < 0) {
            return true
          }
          sprite.position.y += 1.6 * dt
          sprite.position.x += Math.sin(elapsed * 4 + wobble) * 0.5 * dt
          material.opacity = 1 - elapsed / 2
          if (elapsed > 2) {
            this.scene.remove(sprite)
            material.dispose()
            return false
          }
          return true
        },
      })
    }
  }

  dust(x: number, y: number, z: number, count = 14): void {
    const geometry = new BufferGeometry()
    const positions = new Float32Array(count * 3)
    const velocities: [number, number, number][] = []
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = x
      positions[index * 3 + 1] = y + 0.12
      positions[index * 3 + 2] = z
      const angle = this.random() * Math.PI * 2
      velocities.push([
        Math.cos(angle) * (0.8 + this.random()),
        0.9 + this.random() * 1.1,
        Math.sin(angle) * (0.8 + this.random()),
      ])
    }
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    const material = new PointsMaterial({
      map: this.glow,
      color: '#e6d8bb',
      size: 0.55,
      transparent: true,
      depthWrite: false,
    })
    const points = new Points(geometry, material)
    this.scene.add(points)
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        const array = geometry.attributes.position
        if (!(array instanceof BufferAttribute)) {
          return false
        }
        const values = array.array
        for (let index = 0; index < count; index += 1) {
          const velocity = velocities[index]
          if (!velocity) {
            continue
          }
          velocity[1] -= 1.6 * dt
          velocity[0] *= 1 - 1.6 * dt
          velocity[2] *= 1 - 1.6 * dt
          values[index * 3] = (values[index * 3] ?? 0) + velocity[0] * dt
          values[index * 3 + 1] = (values[index * 3 + 1] ?? 0) + velocity[1] * dt
          values[index * 3 + 2] = (values[index * 3 + 2] ?? 0) + velocity[2] * dt
        }
        array.needsUpdate = true
        material.opacity = 0.7 * (1 - elapsed / 1.2)
        if (elapsed > 1.2) {
          this.scene.remove(points)
          geometry.dispose()
          material.dispose()
          return false
        }
        return true
      },
    })
  }

  confetti(x: number, y: number, z: number, count = 260): void {
    const geometry = new PlaneGeometry(0.32, 0.2)
    const material = new MeshBasicMaterial({ side: DoubleSide })
    const mesh = new InstancedMesh(geometry, material, count)
    const particles: {
      position: Vector3
      velocity: Vector3
      rotation: Euler
      spin: Vector3
    }[] = []
    const matrix = new Matrix4()
    const quaternion = new Quaternion()
    const scale = new Vector3(1, 1, 1)
    const color = new Color()
    for (let index = 0; index < count; index += 1) {
      const angle = this.random() * Math.PI * 2
      const speed = 4 + this.random() * 9
      particles.push({
        position: new Vector3(x, y + 1.5, z),
        velocity: new Vector3(
          Math.cos(angle) * speed,
          9 + this.random() * 10,
          Math.sin(angle) * speed,
        ),
        rotation: new Euler(
          this.random() * 6,
          this.random() * 6,
          this.random() * 6,
        ),
        spin: new Vector3(
          this.random() * 9,
          this.random() * 9,
          this.random() * 9,
        ),
      })
      mesh.setColorAt(
        index,
        color.set(CONFETTI_COLORS[index % CONFETTI_COLORS.length] ?? '#ffffff'),
      )
    }
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true
    }
    this.scene.add(mesh)
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        for (let index = 0; index < count; index += 1) {
          const particle = particles[index]
          if (!particle) {
            continue
          }
          particle.velocity.y -= 11 * dt
          particle.velocity.multiplyScalar(1 - 1.3 * dt)
          particle.position.addScaledVector(particle.velocity, dt)
          particle.rotation.x += particle.spin.x * dt
          particle.rotation.y += particle.spin.y * dt
          particle.rotation.z += particle.spin.z * dt
          quaternion.setFromEuler(particle.rotation)
          matrix.compose(particle.position, quaternion, scale)
          mesh.setMatrixAt(index, matrix)
        }
        mesh.instanceMatrix.needsUpdate = true
        if (elapsed > 6) {
          this.scene.remove(mesh)
          geometry.dispose()
          material.dispose()
          return false
        }
        return true
      },
    })
  }

  /** Short spoken "hello" bubble above an exhibit that has just greeted you. */
  greeting(x: number, y: number, z: number, text: string, accent: string): void {
    this.disposeGreeter()
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 256
    const context = canvas.getContext('2d')
    if (!context) {
      return
    }
    context.clearRect(0, 0, 512, 256)
    context.fillStyle = '#fffdf7'
    context.strokeStyle = accent
    context.lineWidth = 10
    roundRectPath(context, 16, 16, 480, 170, 44)
    context.fill()
    context.stroke()
    context.beginPath()
    context.moveTo(226, 186)
    context.lineTo(286, 186)
    context.lineTo(236, 244)
    context.closePath()
    context.fillStyle = '#fffdf7'
    context.fill()
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillStyle = '#20352f'
    context.font =
      '900 84px "Noto Sans SC Variable", "Noto Sans SC", "PingFang SC", system-ui, sans-serif'
    context.fillText(text, 256, 102)
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    const material = new SpriteMaterial({
      map: texture,
      transparent: true,
      depthTest: false,
    })
    const sprite = new Sprite(material)
    sprite.position.set(x, y, z)
    sprite.scale.set(7, 3.5, 1)
    sprite.renderOrder = 1001
    this.scene.add(sprite)
    this.greeter = sprite
    this.greeterTexture = texture
    let elapsed = 0
    this.items.push({
      update: (dt) => {
        elapsed += dt
        sprite.position.y += 0.35 * dt
        material.opacity = elapsed < 0.25 ? elapsed / 0.25 : Math.max(0, 1 - (elapsed - 2.2) / 0.7)
        if (elapsed > 2.9) {
          if (this.greeter === sprite) {
            this.greeter = null
          }
          this.scene.remove(sprite)
          material.dispose()
          texture.dispose()
          return false
        }
        return true
      },
    })
  }

  private disposeGreeter(): void {
    if (this.greeter) {
      this.scene.remove(this.greeter)
      const material = this.greeter.material
      if (material instanceof SpriteMaterial) {
        material.dispose()
      }
      this.greeter = null
    }
    this.greeterTexture?.dispose()
    this.greeterTexture = null
  }

  // ------------------------------------------------------------- butterflies

  private buildButterflies(): void {
    const colors = ['#f48fb1', '#ffb74d', '#81d4fa', '#b39ddb', '#fff176', '#ff8a65']
    const geometry = new PlaneGeometry(0.34, 0.26)
    geometry.translate(0.17, 0, 0)
    for (let index = 0; index < 26; index += 1) {
      const group = new Group()
      const material = new MeshStandardMaterial({
        color: colors[index % colors.length] ?? '#ffffff',
        side: DoubleSide,
        roughness: 0.7,
      })
      const left = new Mesh(geometry, material)
      const right = new Mesh(geometry, material)
      left.rotation.y = Math.PI
      group.add(left, right)
      const home = new Vector3(
        this.random() * 260 - 130,
        0,
        this.random() * 200 - 100,
      )
      group.position.copy(home)
      this.scene.add(group)
      this.butterflies.push({
        group,
        left,
        right,
        home,
        phase: this.random() * 10,
        speed: 0.2 + this.random() * 0.25,
        height: 1.1 + this.random() * 2.2,
        radius: 5 + this.random() * 12,
      })
    }
  }

  update(dt: number, elapsed: number): void {
    for (let index = this.items.length - 1; index >= 0; index -= 1) {
      const item = this.items[index]
      if (item && !item.update(dt)) {
        this.items.splice(index, 1)
      }
    }
    for (const butterfly of this.butterflies) {
      const angle = elapsed * butterfly.speed + butterfly.phase
      const x = butterfly.home.x + Math.sin(angle) * butterfly.radius
      const z = butterfly.home.z + Math.sin(angle * 0.7 + 1.3) * butterfly.radius * 0.8
      const y =
        terrainHeight(x, z) + butterfly.height + Math.sin(elapsed * 2.2 + butterfly.phase) * 0.4
      const previousX = butterfly.group.position.x
      const previousZ = butterfly.group.position.z
      butterfly.group.position.set(x, y, z)
      const dx = x - previousX
      const dz = z - previousZ
      if (dx * dx + dz * dz > 1e-6) {
        butterfly.group.rotation.y = Math.atan2(dx, dz)
      }
      const flap = Math.sin(elapsed * 15 + butterfly.phase) * 0.95
      butterfly.left.rotation.z = -flap
      butterfly.right.rotation.z = flap
    }
  }

  dispose(): void {
    this.disposeGreeter()
    for (const butterfly of this.butterflies) {
      disposeObject3D(butterfly.group)
    }
    this.butterflies.length = 0
    this.items.length = 0
    this.star.dispose()
    this.heart.dispose()
    this.glow.dispose()
    this.rippleGeometry.dispose()
  }
}
