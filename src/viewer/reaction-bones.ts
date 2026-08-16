import { Quaternion, Vector3, type Object3D } from 'three'

export interface ReactionBone {
  readonly bone: Object3D
  readonly baseQuat: Quaternion
}

/** One leg's joint chain: hip/shoulder → knee/elbow → foot. */
export interface LegChain {
  readonly upper: ReactionBone | null
  readonly lower: ReactionBone | null
  readonly foot: ReactionBone | null
  /**
   * Sign of the local-X rotation that folds the knee/elbow anatomically.
   * Measured per rig when the bones are collected, so every animal bends
   * the right way regardless of exporter bone orientation.
   */
  readonly flexSign: 1 | -1
}

export interface ReactionBones {
  /** Front-left and front-right leg chains. */
  readonly frontLegs: readonly [LegChain, LegChain] | null
  /** Hind-left and hind-right leg chains. */
  readonly backLegs: readonly [LegChain, LegChain] | null
  /** Neck chain from base to head; driven together for shakes/nibbles. */
  readonly neck: readonly ReactionBone[]
  /** Tail chain base segments; driven for a walking sway. */
  readonly tail: readonly ReactionBone[]
}

/**
 * Bone-name conventions seen across the museum rigs. The upper bone anchors
 * a chain; lower and foot bones are only searched inside that anchor's
 * subtree, so e.g. a hind `Foot` bone can never be wired to a front leg.
 */
interface LegNaming {
  readonly upper: readonly string[]
  readonly lower: readonly string[]
  readonly foot: readonly string[]
}

const FRONT_NAMINGS: Record<'left' | 'right', readonly LegNaming[]> = {
  left: [
    {
      upper: ['UpperArm.L', 'upper_arm.L'],
      lower: ['LowerArm', 'forearm'],
      foot: ['Foot', 'forefoot', 'Hand'],
    },
    { upper: ['lArm'], lower: ['lForearm'], foot: ['lHand'] },
  ],
  right: [
    {
      upper: ['UpperArm.R', 'upper_arm.R'],
      lower: ['LowerArm', 'forearm'],
      foot: ['Foot', 'forefoot', 'Hand'],
    },
    { upper: ['rArm'], lower: ['rForearm'], foot: ['rHand'] },
  ],
}

const BACK_NAMINGS: Record<'left' | 'right', readonly LegNaming[]> = {
  left: [
    {
      upper: ['UpperLeg.L', 'thigh.L'],
      lower: ['LowerLeg', 'lower_leg', 'Shin'],
      foot: ['BackFoot', 'hind_foot', 'Foot', 'Ankle'],
    },
    { upper: ['lThigh'], lower: ['lShin'], foot: ['lFoot'] },
  ],
  right: [
    {
      upper: ['UpperLeg.R', 'thigh.R'],
      lower: ['LowerLeg', 'lower_leg', 'Shin'],
      foot: ['BackFoot', 'hind_foot', 'Foot', 'Ankle'],
    },
    { upper: ['rThigh'], lower: ['rShin'], foot: ['rFoot'] },
  ],
}

const NECK_PREFIXES = ['Neck1', 'Neck2', 'Neck3', 'Neck4', 'Head'] as const
const TAIL_PREFIXES = ['TailBase', 'Tail1', 'Tail2'] as const

/**
 * GLTFLoader renames every node with `PropertyBinding.sanitizeNodeName`,
 * which strips `.`, `[`, `]`, `:` and `/` (spaces become `_`). Authored
 * prefixes like `UpperArm.L` therefore never match the runtime name
 * `UpperArmL_016` — normalize both sides before comparing.
 */
function sanitizeBoneName(name: string): string {
  return name.replace(/\s/g, '_').replace(/[[\].:/]/g, '')
}

function findBone(
  scope: Object3D,
  prefixes: readonly string[],
): ReactionBone | null {
  for (const prefix of prefixes) {
    const sanitizedPrefix = sanitizeBoneName(prefix)
    let found: Object3D | undefined
    scope.traverse((object) => {
      if (
        !found &&
        object !== scope &&
        sanitizeBoneName(object.name).startsWith(sanitizedPrefix)
      ) {
        found = object
      }
    })
    if (found) {
      return { bone: found, baseQuat: found.quaternion.clone() }
    }
  }
  return null
}

function findLegChain(root: Object3D, naming: LegNaming): LegChain | null {
  const upper = findBone(root, naming.upper)
  if (!upper) {
    return null
  }
  const lower = findBone(upper.bone, naming.lower)
  const foot = findBone((lower ?? upper).bone, naming.foot)
  return { upper, lower, foot, flexSign: probeFlexSign(lower, foot) }
}

function findLegChainForSide(
  root: Object3D,
  namings: readonly LegNaming[],
): LegChain | null {
  for (const naming of namings) {
    const chain = findLegChain(root, naming)
    if (chain) {
      return chain
    }
  }
  return null
}

/**
 * Locate the rig bones the care reactions animate (walk gait, neck shake).
 * Bone names follow the quadruped conventions seen in the museum rigs
 * (`UpperArm.L`/`upper_arm.L`/`lArm` and friends); legs that do not match
 * simply yield no chains and fall back to body-only motion, so this stays
 * safe on any animal.
 */
export function collectReactionBones(root: Object3D): ReactionBones {
  const frontLeft = findLegChainForSide(root, FRONT_NAMINGS.left)
  const frontRight = findLegChainForSide(root, FRONT_NAMINGS.right)
  const backLeft = findLegChainForSide(root, BACK_NAMINGS.left)
  const backRight = findLegChainForSide(root, BACK_NAMINGS.right)
  return {
    frontLegs: frontLeft && frontRight ? [frontLeft, frontRight] : null,
    backLegs: backLeft && backRight ? [backLeft, backRight] : null,
    neck: NECK_PREFIXES.map((prefix) => findBone(root, [prefix])).filter(
      (bone): bone is ReactionBone => bone !== null,
    ),
    tail: TAIL_PREFIXES.map((prefix) => findBone(root, [prefix])).filter(
      (bone): bone is ReactionBone => bone !== null,
    ),
  }
}

/** Calls `resetBone` on every joint of a leg chain. */
export function resetLegChain(chain: LegChain | null): void {
  if (!chain) {
    return
  }
  for (const joint of [chain.upper, chain.lower, chain.foot]) {
    if (joint) {
      resetBone(joint)
    }
  }
}

const AXIS_X = new Vector3(1, 0, 0)
const AXIS_Y = new Vector3(0, 1, 0)
const AXIS_Z = new Vector3(0, 0, 1)
const scratchQuat = new Quaternion()
const scratchVec = new Vector3()
const FLEX_PROBE_RADIANS = 0.35

/**
 * Measures which local-X rotation direction lifts the foot — that direction
 * folds the joint anatomically (front elbows fold backwards, hind knees fold
 * forwards). Rigs are probed individually because exporters disagree on bone
 * orientation, so a fixed sign bends some animals backwards.
 */
function probeFlexSign(
  lower: ReactionBone | null,
  foot: ReactionBone | null,
): 1 | -1 {
  if (!lower || !foot) {
    return 1
  }
  const lowerBone = lower.bone
  const liftAt = (radians: number): number => {
    lowerBone.quaternion
      .copy(lower.baseQuat)
      .multiply(scratchQuat.setFromAxisAngle(AXIS_X, radians))
    lowerBone.updateWorldMatrix(true, true)
    return foot.bone.getWorldPosition(scratchVec).y
  }
  const positiveLift = liftAt(FLEX_PROBE_RADIANS)
  const negativeLift = liftAt(-FLEX_PROBE_RADIANS)
  lowerBone.quaternion.copy(lower.baseQuat)
  lowerBone.updateWorldMatrix(true, true)
  return positiveLift >= negativeLift ? 1 : -1
}

/**
 * One complete stride cycle for a single leg, split into two phases around
 * the shared gait angle `theta = cycle + offset`:
 *
 * - Swing (sin theta > 0): the hip pitches forward, the knee/elbow folds
 *   (direction from `chain.flexSign`) and the ankle counter-rotates, so the
 *   sole lifts clear of the ground and sweeps through.
 * - Stance (sin theta < 0): the hip pushes backward, the knee is fully
 *   straight and the ankle returns to neutral, planting the sole flat.
 *
 * `offset` staggers the legs; diagonal pairs share the same offset.
 */
export function strideLeg(
  chain: LegChain,
  cycle: number,
  offset: number,
  config: StrideConfig,
): void {
  const theta = cycle + offset
  // Hip/shoulder: forward pitch during swing, backward push during stance.
  const hipPitch = Math.sin(theta) * config.upperAmplitude
  // Knee/elbow flexion exists only while the leg is airborne: zero at
  // lift-off, peaking mid-swing, fully straight again at touchdown.
  const swingPhase = Math.max(0, Math.sin(theta))
  const flexion =
    (swingPhase ** config.flexCurve) * config.lowerAmplitude * chain.flexSign
  if (chain.upper) {
    swingBone(chain.upper, hipPitch, 'x')
  }
  if (chain.lower) {
    swingBone(chain.lower, flexion, 'x')
  }
  if (chain.foot) {
    // The ankle counter-rotates against hip and knee so the sole stays
    // ground-aligned through both phases.
    swingBone(chain.foot, -(hipPitch + flexion) * config.footCompensation, 'x')
  }
}

export interface StrideConfig {
  /** Hip/shoulder pitch amplitude in radians. */
  readonly upperAmplitude: number
  /** Peak knee/elbow flexion during the swing phase, in radians. */
  readonly lowerAmplitude: number
  /** Exponent shaping the flexion pulse; below 1 holds the bend longer. */
  readonly flexCurve: number
  /** Fraction of the hip+knee pitch the ankle counter-rotates. */
  readonly footCompensation: number
}

/** Rotates a bone by `radians` around a local axis, relative to its rest pose. */
export function swingBone(
  bone: ReactionBone,
  radians: number,
  axis: 'x' | 'y' | 'z',
): void {
  const axisVector = axis === 'x' ? AXIS_X : axis === 'y' ? AXIS_Y : AXIS_Z
  bone.bone.quaternion
    .copy(bone.baseQuat)
    .multiply(scratchQuat.setFromAxisAngle(axisVector, radians))
}

/** Restores a bone to its rest pose. */
export function resetBone(bone: ReactionBone): void {
  bone.bone.quaternion.copy(bone.baseQuat)
}
