import { Vector2, Vector3, type PerspectiveCamera } from 'three'
import { angleDelta, approach, clamp, lerp } from '@/src/zoo/noise'
import { BODY_RADIUS, type NavGrid, type ParkPoint, type Walkability } from '@/src/zoo/nav'
import { PARK, SPAWN } from '@/src/zoo/park-data'
import type { HeightGrid } from '@/src/zoo/terrain'
import type { Explorer } from '@/src/zoo/explorer'

const WALK_SPEED = 7.5
const RUN_SPEED = 19
const TURN_RATE = 11
const STEP_DISTANCE = 1.9

interface OverviewPose {
  readonly position: Vector3
  readonly look: Vector3
}

export interface PlayerOptions {
  readonly camera: PerspectiveCamera
  readonly dom: HTMLElement
  readonly heightGrid: HeightGrid
  readonly nav: NavGrid
  readonly walkable: Walkability
  readonly explorer: Explorer
  readonly isMobile: boolean
  readonly onStep?: (() => void) | undefined
  readonly onBlocked?: (() => void) | undefined
  readonly onArrive?: (() => void) | undefined
}

/**
 * The visitor: camera-relative WASD walking, tap-to-walk along an A* route,
 * an orbit/follow camera, a virtual joystick feed, and a park-wide overview.
 */
export class Player {
  readonly position = new Vector3(SPAWN.x, 0, SPAWN.z)
  heading = SPAWN.facing
  speed = 0
  /** The guided tour takes the wheel while this is true. */
  locked = false
  path: ParkPoint[] | null = null

  private readonly camera: PerspectiveCamera
  private readonly dom: HTMLElement
  private readonly heightGrid: HeightGrid
  private readonly nav: NavGrid
  private readonly walkable: Walkability
  private readonly explorer: Explorer
  private readonly isMobile: boolean
  private readonly onStep: (() => void) | undefined
  private readonly onBlocked: (() => void) | undefined
  private readonly onArrive: (() => void) | undefined

  private readonly keys = new Set<string>()
  private readonly joystick = new Vector2()
  private pathIndex = 0
  private stepAccumulator = 0
  private blockedTime = 0
  private groundY = 0

  private yaw = Math.PI
  private pitch = 0.34
  private distance = 16
  private targetYaw = Math.PI
  private targetPitch = 0.34
  private targetDistance = 16
  private lastDragAt = -100
  private overview = false
  private overviewBlend = 0
  private overviewPose: OverviewPose = {
    position: new Vector3(0, 320, 280),
    look: new Vector3(0, 0, 0),
  }

  private readonly cameraPosition = new Vector3()
  private readonly cameraLook = new Vector3()
  private readonly moveDirection = new Vector2()
  private readonly input = new Vector2()
  private dragging = false
  private dragPointer = -1
  private lastPointer = new Vector2()
  private pinchDistance = 0
  private readonly pointers = new Map<number, Vector2>()

  constructor(options: PlayerOptions) {
    this.camera = options.camera
    this.dom = options.dom
    this.heightGrid = options.heightGrid
    this.nav = options.nav
    this.walkable = options.walkable
    this.explorer = options.explorer
    this.isMobile = options.isMobile
    this.onStep = options.onStep
    this.onBlocked = options.onBlocked
    this.onArrive = options.onArrive

    this.groundY = this.heightGrid.heightAt(this.position.x, this.position.z)
    this.position.y = this.groundY

    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
    window.addEventListener('blur', this.handleBlur)
    this.dom.addEventListener('pointerdown', this.handlePointerDown)
    this.dom.addEventListener('pointermove', this.handlePointerMove)
    this.dom.addEventListener('pointerup', this.handlePointerUp)
    this.dom.addEventListener('pointercancel', this.handlePointerUp)
    this.dom.addEventListener('wheel', this.handleWheel, { passive: false })

    this.applyTransform()
    this.snapCamera()
  }

  // ------------------------------------------------------------- interaction

  private handleKeyDown = (event: KeyboardEvent): void => {
    const target = event.target
    if (target instanceof HTMLElement && target.tagName === 'INPUT') {
      return
    }
    this.keys.add(event.code)
    if (
      event.code === 'ArrowUp' ||
      event.code === 'ArrowDown' ||
      event.code === 'ArrowLeft' ||
      event.code === 'ArrowRight' ||
      event.code === 'Space'
    ) {
      event.preventDefault()
    }
  }

  private handleKeyUp = (event: KeyboardEvent): void => {
    this.keys.delete(event.code)
  }

  private handleBlur = (): void => {
    this.keys.clear()
    this.joystick.set(0, 0)
  }

  private handlePointerDown = (event: PointerEvent): void => {
    this.pointers.set(event.pointerId, new Vector2(event.clientX, event.clientY))
    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()]
      this.pinchDistance =
        first && second ? Math.hypot(first.x - second.x, first.y - second.y) : 0
      this.dragging = false
      return
    }
    this.dragging = true
    this.dragPointer = event.pointerId
    this.lastPointer.set(event.clientX, event.clientY)
  }

  private handlePointerMove = (event: PointerEvent): void => {
    if (this.pointers.has(event.pointerId)) {
      this.pointers.set(event.pointerId, new Vector2(event.clientX, event.clientY))
    }
    if (this.pointers.size === 2) {
      const [first, second] = [...this.pointers.values()]
      if (first && second && this.pinchDistance > 0) {
        const next = Math.hypot(first.x - second.x, first.y - second.y)
        this.zoom(this.pinchDistance / Math.max(next, 1))
        this.pinchDistance = next
      }
      return
    }
    if (!this.dragging || event.pointerId !== this.dragPointer) {
      return
    }
    const dx = event.clientX - this.lastPointer.x
    const dy = event.clientY - this.lastPointer.y
    this.lastPointer.set(event.clientX, event.clientY)
    this.orbit(dx, dy)
  }

  private handlePointerUp = (event: PointerEvent): void => {
    this.pointers.delete(event.pointerId)
    if (event.pointerId === this.dragPointer) {
      this.dragging = false
      this.dragPointer = -1
    }
    if (this.pointers.size < 2) {
      this.pinchDistance = 0
    }
  }

  private handleWheel = (event: WheelEvent): void => {
    event.preventDefault()
    this.zoom(event.deltaY > 0 ? 1.12 : 1 / 1.12)
  }

  /** True when the visitor is dragging the camera, so picking must not fire. */
  get isDragging(): boolean {
    return this.dragging
  }

  orbit(dx: number, dy: number): void {
    this.targetYaw -= dx * 0.0052
    this.targetPitch = clamp(this.targetPitch + dy * 0.004, 0.06, 1.35)
    this.lastDragAt = performance.now() / 1000
  }

  zoom(factor: number): void {
    const min = 6
    const max = this.isMobile ? 46 : 60
    this.targetDistance = clamp(this.targetDistance * factor, min, max)
  }

  setJoystick(x: number, y: number): void {
    this.joystick.set(x, y)
  }

  setOverview(on: boolean): void {
    this.overview = on
  }

  get isOverview(): boolean {
    return this.overview
  }

  resetView(): void {
    this.targetYaw = this.heading + Math.PI
    this.targetPitch = 0.34
    this.targetDistance = 16
    this.lastDragAt = performance.now() / 1000
  }

  /**
   * Frames an exhibit for the guided tour: turns the visitor toward it and
   * pulls the camera back to a comfortable viewing distance.
   */
  setCameraForViewing(
    targetX: number,
    targetZ: number,
    distance: number,
    pitch: number,
  ): void {
    const dx = targetX - this.position.x
    const dz = targetZ - this.position.z
    if (Math.hypot(dx, dz) > 0.001) {
      this.targetYaw = Math.atan2(dx, dz) + Math.PI
    }
    this.targetDistance = distance
    this.targetPitch = pitch
    this.lastDragAt = performance.now() / 1000
  }

  // ---------------------------------------------------------------- movement

  goTo(x: number, z: number): boolean {
    const path = this.nav.findPath({ x: this.position.x, z: this.position.z }, { x, z })
    if (!path || path.length < 2) {
      this.path = null
      return false
    }
    this.path = path
    this.pathIndex = 1
    return true
  }

  stop(): void {
    this.path = null
  }

  get isWalking(): boolean {
    return this.speed > 0.6
  }

  update(dt: number, elapsed: number): void {
    const running = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')
    const maxSpeed = this.locked ? 24 : running ? RUN_SPEED : WALK_SPEED

    let direction: Vector2 | null = null
    if (!this.locked && !this.overview) {
      direction = this.readInput()
      if (direction) {
        this.path = null
      }
    }
    if (!direction && this.path) {
      direction = this.followPath()
    }

    const targetSpeed = direction ? maxSpeed : 0
    this.speed = lerp(
      this.speed,
      targetSpeed,
      approach(dt, direction ? 7 : 12),
    )

    if (direction && this.speed > 0.05) {
      const wanted = Math.atan2(direction.x, direction.y)
      this.heading +=
        angleDelta(this.heading, wanted) * approach(dt, TURN_RATE)
      const moved = this.tryMove(
        direction.x * this.speed * dt,
        direction.y * this.speed * dt,
      )
      if (moved) {
        this.blockedTime = 0
        this.stepAccumulator += this.speed * dt
        if (this.stepAccumulator > STEP_DISTANCE) {
          this.stepAccumulator = 0
          this.onStep?.()
        }
      } else {
        this.blockedTime += dt
        if (this.blockedTime > 0.5) {
          this.blockedTime = 0
          if (this.path && this.path.length > 0) {
            const last = this.path[this.path.length - 1]
            if (last) {
              this.goTo(last.x, last.z)
            }
          } else {
            this.onBlocked?.()
          }
        }
      }
    }

    this.groundY = this.heightGrid.heightAt(this.position.x, this.position.z)
    this.position.y = this.groundY
    this.applyTransform()
    this.updateCamera(dt, elapsed)
    this.explorer.update(dt, this.speed / RUN_SPEED, elapsed)
  }

  private readInput(): Vector2 | null {
    const input = this.input.set(0, 0)
    const keys = this.keys
    if (keys.has('KeyW') || keys.has('ArrowUp')) input.y -= 1
    if (keys.has('KeyS') || keys.has('ArrowDown')) input.y += 1
    if (keys.has('KeyA') || keys.has('ArrowLeft')) input.x -= 1
    if (keys.has('KeyD') || keys.has('ArrowRight')) input.x += 1
    if (input.lengthSq() === 0 && this.joystick.lengthSq() > 0.02) {
      input.copy(this.joystick)
    }
    return this.toWorldDirection(input, false)
  }

  private followPath(): Vector2 | null {
    if (!this.path) {
      return null
    }
    const waypoint = this.path[this.pathIndex]
    if (!waypoint) {
      this.path = null
      return null
    }
    const dx = waypoint.x - this.position.x
    const dz = waypoint.z - this.position.z
    const distance = Math.hypot(dx, dz)
    if (distance < 0.9) {
      this.pathIndex += 1
      if (this.pathIndex >= this.path.length) {
        this.path = null
        this.onArrive?.()
      }
      return this.followPath()
    }
    const input = this.input.set(dx / distance, dz / distance)
    return this.toWorldDirection(input, true)
  }

  /** Converts screen-space intent into a world direction using the camera yaw. */
  private toWorldDirection(input: Vector2, worldSpace: boolean): Vector2 | null {
    if (input.lengthSq() < 1e-6) {
      return null
    }
    if (input.lengthSq() > 1) {
      input.normalize()
    }
    if (worldSpace) {
      // Path waypoints are already world-space directions.
      this.moveDirection.copy(input)
      return this.moveDirection
    }
    const yaw = this.yaw
    const forwardX = -Math.sin(yaw)
    const forwardZ = -Math.cos(yaw)
    const rightX = Math.cos(yaw)
    const rightZ = -Math.sin(yaw)
    this.moveDirection.set(
      forwardX * -input.y + rightX * input.x,
      forwardZ * -input.y + rightZ * input.x,
    )
    return this.moveDirection
  }

  private tryMove(dx: number, dz: number): boolean {
    const nextX = this.position.x + dx
    const nextZ = this.position.z + dz
    if (this.canOccupy(nextX, nextZ)) {
      this.position.x = nextX
      this.position.z = nextZ
      return true
    }
    // Slide along whichever axis is still free, so walls never trap the walk.
    if (this.canOccupy(nextX, this.position.z)) {
      this.position.x = nextX
      return true
    }
    if (this.canOccupy(this.position.x, nextZ)) {
      this.position.z = nextZ
      return true
    }
    // Last resort: a fence post or an ice shard can sit exactly on the line of
    // travel. Steer around it rather than stopping dead, which would leave the
    // guided tour waiting on a walker that is wedged.
    const distance = Math.hypot(dx, dz)
    const heading = Math.atan2(dz, dx)
    for (const detour of [0.6, -0.6, 1.2, -1.2, 1.9, -1.9]) {
      const nx = this.position.x + Math.cos(heading + detour) * distance
      const nz = this.position.z + Math.sin(heading + detour) * distance
      if (this.canOccupy(nx, nz)) {
        this.position.x = nx
        this.position.z = nz
        return true
      }
    }
    return false
  }

  private canOccupy(x: number, z: number): boolean {
    if (Math.abs(x) > PARK.walkX || Math.abs(z) > PARK.walkZ) {
      return false
    }
    return this.walkable(x, z, BODY_RADIUS)
  }

  private applyTransform(): void {
    this.explorer.group.position.set(this.position.x, this.groundY, this.position.z)
    this.explorer.group.rotation.y = this.heading
  }

  // ------------------------------------------------------------------ camera

  private snapCamera(): void {
    this.yaw = this.targetYaw
    this.pitch = this.targetPitch
    this.distance = this.targetDistance
    this.updateCamera(1, 0, true)
  }

  private updateCamera(dt: number, elapsed: number, snap = false): void {
    const blend = snap ? 1 : approach(dt, 6)

    // Gently swing the camera behind the visitor while walking straight ahead,
    // but never while the visitor is steering sideways or has just dragged.
    const forwardish =
      !this.input || (Math.abs(this.input.y) > 0.6 && Math.abs(this.input.x) < 0.6)
    if (
      this.speed > 2 &&
      forwardish &&
      elapsed - this.lastDragAt > 3 &&
      !this.overview
    ) {
      const behind = this.heading + Math.PI
      this.targetYaw += angleDelta(this.targetYaw, behind) * approach(dt, 0.8)
    }

    this.yaw += angleDelta(this.yaw, this.targetYaw) * blend
    this.pitch = lerp(this.pitch, this.targetPitch, blend)
    this.distance = lerp(this.distance, this.targetDistance, blend)

    const overviewTarget = this.overview ? 1 : 0
    this.overviewBlend = lerp(
      this.overviewBlend,
      overviewTarget,
      snap ? 1 : approach(dt, 2.2),
    )

    this.cameraLook.set(this.position.x, this.groundY + 1.45, this.position.z)
    const cosPitch = Math.cos(this.pitch)
    this.cameraPosition.set(
      this.cameraLook.x + Math.sin(this.yaw) * cosPitch * this.distance,
      this.cameraLook.y + Math.sin(this.pitch) * this.distance,
      this.cameraLook.z + Math.cos(this.yaw) * cosPitch * this.distance,
    )

    // Never let the camera sink into the valley floor.
    const floor =
      this.heightGrid.heightAt(this.cameraPosition.x, this.cameraPosition.z) + 0.9
    if (this.cameraPosition.y < floor) {
      this.cameraPosition.y = floor
    }

    const eased = this.overviewBlend * this.overviewBlend * (3 - 2 * this.overviewBlend)
    if (eased > 0.0001) {
      this.cameraPosition.lerp(this.overviewPose.position, eased)
      this.cameraLook.lerp(this.overviewPose.look, eased)
    }

    this.camera.position.copy(this.cameraPosition)
    this.camera.lookAt(this.cameraLook)
  }

  /** Camera position and look target, exposed for the guided tour. */
  getCameraPose(): { position: Vector3; look: Vector3 } {
    return { position: this.cameraPosition, look: this.cameraLook }
  }

  dispose(): void {
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('keyup', this.handleKeyUp)
    window.removeEventListener('blur', this.handleBlur)
    this.dom.removeEventListener('pointerdown', this.handlePointerDown)
    this.dom.removeEventListener('pointermove', this.handlePointerMove)
    this.dom.removeEventListener('pointerup', this.handlePointerUp)
    this.dom.removeEventListener('pointercancel', this.handlePointerUp)
    this.dom.removeEventListener('wheel', this.handleWheel)
  }
}
