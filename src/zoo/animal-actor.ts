import {
  Group,
  Mesh,
  MeshBasicMaterial,
  Quaternion,
  RingGeometry,
  Vector3,
  type AnimationAction,
  type AnimationMixer,
  type Object3D,
  type PerspectiveCamera,
} from 'three'
import { approach, clamp, lerp } from '@/src/zoo/noise'
import { WATER_LEVEL } from '@/src/zoo/park-data'
import {
  createExhibitLabel,
  type ExhibitLabel,
  type LabelContent,
} from '@/src/zoo/labels'
import { modelScaleForSizeFact, type ZooExhibit } from '@/src/zoo/zoo-exhibits'
import type { HeightGrid } from '@/src/zoo/terrain'
import type { ModelCache } from '@/src/viewer/model-cache'
import {
  buildStagedModel,
  type StagedViewerModel,
} from '@/src/viewer/build-staged-model'
import { disposeObject3D } from '@/src/viewer/dispose'
import { collectReactionBones, type ReactionBone } from '@/src/viewer/reaction-bones'

/** How an exhibit reacts when the visitor greets it. */
export type ReactionKind =
  | 'sway'
  | 'headbutt'
  | 'rear'
  | 'nod'
  | 'hunker'
  | 'stomp'
  | 'flap'
  | 'flutter'
  | 'dive'

const REACTIONS: Readonly<Record<string, ReactionKind>> = {
  stegosaurus: 'sway',
  pachycephalosaurus: 'headbutt',
  'tyrannosaurus-rex': 'rear',
  triceratops: 'sway',
  apatosaurus: 'rear',
  gigantoraptor: 'nod',
  maiasaura: 'nod',
  sauropelta: 'hunker',
  dilophosaurus: 'nod',
  mammoth: 'stomp',
  pteranodon: 'flap',
  rhamphorhynchus: 'flap',
  tupandactylus: 'flap',
  meganeura: 'flutter',
  ichthyosaur: 'dive',
  plesiosaurus: 'dive',
  mosasaurus: 'dive',
  megalodon: 'dive',
}

export type ActorState = 'idle' | 'loading' | 'ready' | 'failed'

const REACTION_DURATION = 1.9
const AXIS_X = new Vector3(1, 0, 0)
const AXIS_Y = new Vector3(0, 1, 0)
const AXIS_Z = new Vector3(0, 0, 1)
const scratchQuaternion = new Quaternion()

interface Joints {
  head: readonly ReactionBone[]
  tail: readonly ReactionBone[]
  legs: readonly ReactionBone[]
}

export interface ActorUpdateContext {
  readonly camera: PerspectiveCamera
  readonly playerX: number
  readonly playerZ: number
  readonly elapsed: number
  readonly labelsVisible: boolean
  readonly stationNear: boolean
}

/**
 * One exhibit. The actor always exists — it carries the label, the ground
 * ring and the enclosure footprint — while its GLB is streamed in and out
 * around the visitor, so the park stays inside a sane memory budget.
 */
export class AnimalActor {
  readonly exhibit: ZooExhibit
  /** World anchor at the exhibit's site; always in the scene. */
  readonly group = new Group()

  private readonly modelHolder = new Group()
  private readonly ring: Mesh
  private readonly label: ExhibitLabel
  private readonly heightGrid: HeightGrid
  private readonly joints: Joints
  private readonly ringMaterial: MeshBasicMaterial

  private staged: StagedViewerModel | null = null
  private mixer: AnimationMixer | null = null
  private action: AnimationAction | null = null
  private animatedBones = new Set<Object3D>()
  private reactionKind: ReactionKind
  private reactionTimer = Number.POSITIVE_INFINITY
  private hover = false
  private discovered = false
  private labelsVisible = true
  private facing: number
  private bodyLift = 0
  private ringOpacity = 0
  /** Height of the staged model in metres, once it has loaded. */
  boundsHeight = 4
  /** Raw staged model extents (x, y, z) in the model's own units. */
  boundsSize: [number, number, number] = [0, 0, 0]
  private baseY = 0
  private idlePhase = Math.random() * 10

  state: ActorState = 'idle'

  constructor(exhibit: ZooExhibit, heightGrid: HeightGrid) {
    this.exhibit = exhibit
    this.heightGrid = heightGrid
    this.facing = exhibit.site.facing
    this.reactionKind = REACTIONS[exhibit.id] ?? 'nod'

    const site = exhibit.site
    this.group.name = `exhibit-${exhibit.id}`
    this.group.position.set(site.x, 0, site.z)
    this.modelHolder.name = `exhibit-${exhibit.id}-model`
    this.group.add(this.modelHolder)

    // Ground ring, drawn where the visitor should stand.
    const ringScale = clamp(
      site.mode === 'water' ? 4 : site.radius > 0 ? site.radius + 2.4 : 4,
      2.4,
      16,
    )
    const ringGeometry = new RingGeometry(0.86, 1, 52)
    ringGeometry.rotateX(-Math.PI / 2)
    this.ringMaterial = new MeshBasicMaterial({
      color: exhibit.accent,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      depthTest: false,
    })
    this.ring = new Mesh(ringGeometry, this.ringMaterial)
    this.ring.scale.setScalar(ringScale)
    this.ring.renderOrder = 6
    this.ring.name = `ring-${exhibit.id}`
    this.group.add(this.ring)

    // Labels are sized to the exhibit so a mammoth's card is not the same
    // size as a dragonfly's.
    const labelWidth = clamp(
      site.mode === 'water' ? 9 : 5 + (site.radius || 1) * 0.75,
      5.2,
      13,
    )
    this.label = createExhibitLabel(this.buildLabelContent(), labelWidth)
    this.group.add(this.label.sprite)

    this.joints = {
      head: [],
      tail: [],
      legs: [],
    }

    this.placeModel()
    this.refreshLabelPosition()
    this.ring.visible = false
  }

  private buildLabelContent(): LabelContent {
    return {
      name: this.exhibit.name,
      subtitle: `${this.exhibit.period} · ${this.exhibit.zoneName}`,
      accent: this.exhibit.accent,
      discovered: this.discovered,
    }
  }

  // ------------------------------------------------------------- lifecycle

  get id(): string {
    return this.exhibit.id
  }

  get isReady(): boolean {
    return this.state === 'ready'
  }

  get isLoading(): boolean {
    return this.state === 'loading'
  }

  async load(modelCache: ModelCache, signal?: AbortSignal): Promise<boolean> {
    if (this.state === 'ready' || this.state === 'loading') {
      return this.state === 'ready'
    }
    this.state = 'loading'
    try {
      const staged = await buildStagedModel(this.exhibit.descriptor, {
        modelCache,
        ...(signal ? { signal } : {}),
      })
      if (signal?.aborted) {
        disposeObject3D(staged.group)
        this.state = 'idle'
        return false
      }
      this.staged = staged
      this.mixer = staged.mixer
      this.action = staged.action
      // The GLBs are authored at unrelated scales, so the exhibit is grown or
      // shrunk until it matches the size fact the museum publishes for it.
      const rawSize = staged.bounds.getSize(new Vector3())
      const scale = modelScaleForSizeFact(this.exhibit.size, [
        rawSize.x,
        rawSize.y,
        rawSize.z,
      ])
      staged.group.scale.setScalar(scale)
      this.boundsHeight = Math.max(rawSize.y * scale, 0.05)
      this.boundsSize = [rawSize.x * scale, rawSize.y * scale, rawSize.z * scale]
      this.modelHolder.add(staged.group)
      this.collectJoints()
      this.placeModel()
      this.refreshLabelPosition()
      this.state = 'ready'
      return true
    } catch (cause) {
      if (signal?.aborted) {
        this.state = 'idle'
        return false
      }
      this.state = 'failed'
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`展品 “${this.exhibit.id}” 没有成功加载。`, cause)
      }
      return false
    }
  }

  unload(): void {
    if (this.staged) {
      this.modelHolder.remove(this.staged.group)
      disposeObject3D(this.staged.group)
    }
    this.staged = null
    this.mixer = null
    this.action = null
    this.animatedBones = new Set()
    this.joints.head = []
    this.joints.tail = []
    this.joints.legs = []
    this.state = 'idle'
  }

  /**
   * Joint discovery reuses the museum's rig-agnostic bone heuristics, then
   * keeps only the bones the idle clip actually animates. Post-multiplying a
   * rotation onto a bone no clip writes would accumulate frame over frame.
   */
  private collectJoints(): void {
    const root = this.staged?.modelRoot
    const mixer = this.mixer
    const action = this.action
    if (!root || !mixer || !action) {
      return
    }
    const bones = collectReactionBones(root)
    const head: ReactionBone[] = []
    const legs: ReactionBone[] = []
    for (const bone of bones.neck) {
      head.push(bone)
    }
    for (const chain of bones.frontLegs ?? []) {
      if (chain.upper) legs.push(chain.upper)
    }
    for (const chain of bones.backLegs ?? []) {
      if (chain.upper) legs.push(chain.upper)
    }
    this.joints.head = head
    this.joints.tail = bones.tail
    this.joints.legs = legs

    const candidates = [...head, ...bones.tail, ...legs].map((joint) => joint.bone)
    this.animatedBones = probeAnimatedBones(
      mixer,
      action.getClip().duration,
      candidates,
    )
    mixer.setTime(0)
  }

  private placeModel(): void {
    const site = this.exhibit.site
    const ground = this.heightGrid.heightAt(site.x, site.z)
    let baseY: number
    switch (site.mode) {
      case 'land':
        // Sits on top of the earthen plinth.
        baseY = ground + 0.17
        break
      case 'water':
        baseY = WATER_LEVEL - (site.sinkFraction ?? 0.35) * this.boundsHeight
        break
      case 'perch':
        baseY = ground + (site.perchHeight ?? 2)
        break
      case 'fly':
        baseY = ground + (site.flyHeight ?? 4)
        break
    }
    this.baseY = baseY
  }

  private refreshLabelPosition(): void {
    const site = this.exhibit.site
    // The card floats just above the animal, with more clearance for tall ones.
    const lift = clamp(this.boundsHeight * 0.16, 0.7, 3)
    const ringOffset =
      site.mode === 'water'
        ? WATER_LEVEL - this.baseY + 0.06
        : site.mode === 'perch' || site.mode === 'fly'
          ? 0.15 + this.boundsHeight + lift
          : 0.3
    this.label.sprite.position.y = this.boundsHeight + lift
    this.ring.position.y = ringOffset
  }

  // ---------------------------------------------------------------- control

  setHover(on: boolean): void {
    this.hover = on
  }

  setDiscovered(on: boolean): void {
    if (this.discovered === on) {
      return
    }
    this.discovered = on
    this.label.setContent(this.buildLabelContent())
  }

  setLabelsVisible(visible: boolean): void {
    this.labelsVisible = visible
  }

  react(): void {
    this.reactionTimer = 0
  }

  get isReacting(): boolean {
    return this.reactionTimer < REACTION_DURATION
  }

  /** World position of the animal's visual centre, for camera framing. */
  focusPoint(target: Vector3): Vector3 {
    const height = this.boundsHeight
    return target.set(
      this.exhibit.site.x,
      this.baseY + height * (this.exhibit.site.mode === 'water' ? 0.5 : 0.62),
      this.exhibit.site.z,
    )
  }

  /**
   * Camera framing for a visitor standing at `(x, z)`: back the camera off
   * far enough that the whole animal fits, but not so far that it becomes a
   * speck — a 12 m tyrannosaur should fill a third of the frame from its
   * viewpoint, and a 0.7 m dragonfly should be a close-up.
   */
  framingFor(x: number, z: number): { distance: number; pitch: number } {
    const site = this.exhibit.site
    const largest = Math.max(this.boundsSize[0], this.boundsSize[2], this.boundsHeight)
    const viewing = clamp(largest * 0.95 + 5, 9, 38)
    const standing = Math.hypot(site.x - x, site.z - z)
    return {
      distance: clamp(viewing - standing, 7, 30),
      pitch: site.mode === 'land' || site.mode === 'water' ? 0.26 : 0.12,
    }
  }

  /** Distance from a point to the exhibit's footprint, in metres. */
  distanceTo(x: number, z: number): number {
    return Math.hypot(x - this.exhibit.site.x, z - this.exhibit.site.z)
  }

  // ----------------------------------------------------------------- update

  update(dt: number, context: ActorUpdateContext): void {
    const site = this.exhibit.site
    const elapsed = context.elapsed

    // Idle behaviour: a nearby visitor's exhibit turns to watch them.
    if (site.mode === 'land' || site.mode === 'perch') {
      const dx = context.playerX - site.x
      const dz = context.playerZ - site.z
      const distance = Math.hypot(dx, dz)
      if (distance < 46 && distance > 1) {
        this.facing = lerp(
          this.facing,
          Math.atan2(dx, dz),
          approach(dt, 0.7),
        )
      } else {
        this.facing = lerp(this.facing, site.facing, approach(dt, 0.25))
      }
    } else {
      this.facing = site.facing + Math.sin(elapsed * 0.09 + this.idlePhase) * 0.12
    }

    let lift = 0
    let hop = 0
    let pitch = 0
    let roll = 0
    let squash = 1
    let x = site.x
    let z = site.z

    // Per-mode idle motion.
    switch (site.mode) {
      case 'water':
        lift = Math.sin(elapsed * 0.75 + this.idlePhase) * 0.34
        roll = Math.sin(elapsed * 0.55 + this.idlePhase) * 0.045
        break
      case 'perch':
        lift = Math.sin(elapsed * 1.5 + this.idlePhase) * 0.06
        pitch = Math.sin(elapsed * 0.9 + this.idlePhase) * 0.03
        break
      case 'fly': {
        const radius = site.flyRadius ?? 6
        const angle = elapsed * 0.32 + this.idlePhase
        x = site.x + Math.cos(angle) * radius
        z = site.z + Math.sin(angle) * radius
        lift = Math.sin(elapsed * 1.9 + this.idlePhase) * 0.6
        this.facing = -angle + Math.PI / 2
        break
      }
      case 'land':
        lift = Math.sin(elapsed * 1.7 + this.idlePhase) * 0.018
        break
    }

    // Reaction envelope, layered on top of the idle motion.
    let reacting = false
    if (this.reactionTimer < REACTION_DURATION) {
      reacting = true
      this.reactionTimer += dt
      const t = clamp(this.reactionTimer / REACTION_DURATION, 0, 1)
      const envelope = Math.sin(t * Math.PI)
      const beat = Math.sin(t * Math.PI * 2)
      const decay = 1 - t
      switch (this.reactionKind) {
        case 'sway':
          roll += beat * 0.09 * decay
          hop += Math.abs(beat) * 0.1 * decay
          break
        case 'headbutt':
          pitch += beat * 0.16 * decay
          hop += Math.abs(beat) * 0.32 * decay
          break
        case 'rear':
          pitch -= envelope * 0.3
          hop += envelope * 0.55
          break
        case 'nod':
          pitch += Math.sin(t * Math.PI * 4) * 0.12 * decay
          hop += envelope * 0.2
          break
        case 'hunker':
          squash = 1 - envelope * 0.14
          lift -= envelope * 0.2
          break
        case 'stomp':
          hop += Math.abs(Math.sin(t * Math.PI * 6)) * 0.34 * decay
          pitch += Math.sin(t * Math.PI * 6) * 0.05 * decay
          break
        case 'flap':
          hop += envelope * 1.5
          pitch -= envelope * 0.18
          roll += Math.sin(t * Math.PI * 3) * 0.1 * decay
          break
        case 'flutter':
          hop += Math.abs(Math.sin(t * Math.PI * 9)) * 0.35 * decay
          roll += Math.sin(t * Math.PI * 5) * 0.14 * decay
          break
        case 'dive':
          lift -= envelope * (this.boundsHeight * 0.8)
          pitch += envelope * 0.16
          break
      }
    }

    this.driveJoints(
      reacting ? clamp(this.reactionTimer / REACTION_DURATION, 0, 1) : -1,
      elapsed,
    )

    this.group.position.set(x, this.baseY + lift, z)
    this.group.rotation.y = this.facing
    this.modelHolder.position.set(0, hop, 0)
    this.modelHolder.rotation.set(pitch, 0, roll)
    const scale = 1 / Math.sqrt(squash)
    this.modelHolder.scale.set(scale, squash, scale)

    this.mixer?.update(dt)
    this.updateRing(dt, context)
    this.updateLabel(context)
  }

  /**
   * Layers the reaction onto the rig. Rotations are post-multiplied after the
   * mixer writes the idle pose, which makes it an additive layer on top of the
   * clip rather than a fight with it.
   */
  private driveJoints(reaction: number, elapsed: number): void {
    const animate = reaction >= 0
    const t = animate ? reaction : 0
    const envelope = animate ? Math.sin(t * Math.PI) : 0
    const beat = animate ? Math.sin(t * Math.PI * 2) : 0
    const decay = animate ? 1 - t : 0

    for (const joint of this.joints.head) {
      if (!this.animatedBones.has(joint.bone)) {
        continue
      }
      switch (this.reactionKind) {
        case 'sway':
          offsetBone(joint, beat * 0.2 * decay, 'y')
          break
        case 'headbutt':
          offsetBone(joint, beat * 0.42 * decay, 'x')
          break
        case 'rear':
          offsetBone(joint, -envelope * 0.24, 'x')
          break
        case 'nod':
          offsetBone(joint, Math.sin(t * Math.PI * 4) * 0.26 * decay, 'x')
          break
        default:
          offsetBone(joint, Math.sin(elapsed * 0.8) * 0.03, 'x')
          break
      }
    }
    for (const joint of this.joints.tail) {
      if (!this.animatedBones.has(joint.bone)) {
        continue
      }
      if (animate) {
        offsetBone(joint, beat * 0.34 * decay, 'y')
      } else {
        offsetBone(joint, Math.sin(elapsed * 0.7 + joint.baseQuat.w * 9) * 0.08, 'y')
      }
    }
    for (const joint of this.joints.legs) {
      if (!this.animatedBones.has(joint.bone)) {
        continue
      }
      if (animate && (this.reactionKind === 'stomp' || this.reactionKind === 'headbutt')) {
        offsetBone(joint, Math.sin(t * Math.PI * 6) * 0.22 * decay, 'x')
      } else {
        offsetBone(joint, 0, 'x')
      }
    }
  }

  private updateRing(dt: number, context: ActorUpdateContext): void {
    const target = this.hover || context.stationNear ? (this.hover ? 0.85 : 0.45) : 0
    this.ringOpacity = lerp(this.ringOpacity, target, approach(dt, 8))
    this.ringMaterial.opacity = this.ringOpacity * (this.discovered ? 0.7 : 1)
    this.ring.visible = this.ringOpacity > 0.01
    const pulse = 1 + Math.sin(context.elapsed * 2.4) * 0.03
    this.ring.scale.setScalar(this.ringScale() * pulse)
  }

  private ringScale(): number {
    const site = this.exhibit.site
    return clamp(
      site.mode === 'water' ? 4 : site.radius > 0 ? site.radius + 2.4 : 4,
      2.4,
      16,
    )
  }

  private updateLabel(context: ActorUpdateContext): void {
    if (!this.labelsVisible) {
      this.label.sprite.visible = false
      return
    }
    const sprite = this.label.sprite
    sprite.visible = true
    const worldX = this.group.position.x
    const worldZ = this.group.position.z
    const distance = Math.hypot(
      context.camera.position.x - worldX,
      context.camera.position.z - worldZ,
    )
    // Hold a constant apparent size up close, then grow with distance so a
    // card across the valley is still readable.
    const scale = clamp(distance / 34, 0.5, 5.5) * (this.hover ? 1.06 : 1)
    const baseWidth = Number(sprite.userData.baseWidth ?? 6)
    const aspect = Number(sprite.userData.labelAspect ?? 0.47)
    sprite.scale.set(baseWidth * scale, baseWidth * scale * aspect, 1)
    const near = this.hover || context.stationNear
    const fade = near
      ? 1
      : clamp(1 - (distance - 170) / 130, 0.18, 1)
    const material = sprite.material
    material.opacity = fade
  }

  /** Screen-space half extent used to test whether a tap hit the exhibit. */
  hitRadius(): number {
    const site = this.exhibit.site
    return Math.max(site.radius, 1.6) + (site.mode === 'water' ? 5 : 0)
  }

  dispose(): void {
    this.unload()
    this.label.dispose()
    this.ring.geometry.dispose()
    this.ringMaterial.dispose()
    this.group.removeFromParent()
  }
}

function offsetBone(
  joint: ReactionBone,
  radians: number,
  axis: 'x' | 'y' | 'z',
): void {
  const axisVector = axis === 'x' ? AXIS_X : axis === 'y' ? AXIS_Y : AXIS_Z
  joint.bone.quaternion.multiply(
    scratchQuaternion.setFromAxisAngle(axisVector, radians),
  )
}

/**
 * Samples the idle clip at several times and reports which of the candidate
 * bones it actually writes. Bones it never touches must not be
 * post-multiplied, or their offset would compound every frame.
 */
function probeAnimatedBones(
  mixer: AnimationMixer,
  clipDuration: number,
  candidates: readonly Object3D[],
): Set<Object3D> {
  const animated = new Set<Object3D>()
  if (candidates.length === 0 || clipDuration <= 0) {
    return animated
  }
  const times = [0, clipDuration * 0.27, clipDuration * 0.58, clipDuration * 0.83]
  const snapshots: Quaternion[][] = []
  for (const time of times) {
    mixer.setTime(time)
    snapshots.push(candidates.map((bone) => bone.quaternion.clone()))
  }
  const first = snapshots[0]
  if (first) {
    candidates.forEach((bone, index) => {
      const reference = first[index]
      if (!reference) {
        return
      }
      for (let sample = 1; sample < snapshots.length; sample += 1) {
        const current = snapshots[sample]?.[index]
        if (current && Math.abs(current.dot(reference)) < 0.99999) {
          animated.add(bone)
          return
        }
      }
    })
  }
  return animated
}
