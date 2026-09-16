import {
  BoxGeometry,
  CapsuleGeometry,
  ConeGeometry,
  CylinderGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from 'three'
import { approach, clamp, lerp } from '@/src/zoo/noise'
import { disposeObject3D } from '@/src/viewer/dispose'

/**
 * The visitor's avatar. Built entirely from primitives so the park ships with
 * no extra licensed asset, and so the explorer can be modelled at true
 * human scale (1.75 m) next to life-size prehistoric animals.
 */
export interface Explorer {
  readonly group: Group
  /** `speedRatio` is 0 when standing still and 1 at a full run. */
  update: (dt: number, speedRatio: number, elapsed: number) => void
  setVisible: (visible: boolean) => void
  dispose: () => void
}

const SKIN = '#e9c19c'
const SHIRT = '#efe8d6'
const VEST = '#c7a367'
const TROUSERS = '#8d7a55'
const HAT = '#b08e4c'
const PACK = '#6f8452'
const BOOT = '#6a5136'
const HAIR = '#4a3628'

function material(color: string, roughness = 0.78): MeshStandardMaterial {
  return new MeshStandardMaterial({ color, roughness, metalness: 0 })
}

export function createExplorer(): Explorer {
  const group = new Group()
  group.name = 'explorer'
  const materials: MeshStandardMaterial[] = []
  const track = (mesh: Mesh): Mesh => {
    mesh.castShadow = true
    mesh.receiveShadow = true
    const material = mesh.material
    if (material instanceof MeshStandardMaterial) {
      materials.push(material)
    }
    return mesh
  }

  const skin = material(SKIN, 0.7)
  const shirt = material(SHIRT, 0.82)
  const vest = material(VEST, 0.8)
  const trousers = material(TROUSERS, 0.85)
  const hat = material(HAT, 0.75)
  const pack = material(PACK, 0.82)
  const boot = material(BOOT, 0.8)
  const hair = material(HAIR, 0.85)
  const dark = material('#3d3226', 0.6)

  // Body frame, pivoted at the hips so the whole avatar can bob.
  const body = new Group()
  body.position.y = 0.82
  group.add(body)

  const torso = track(new Mesh(new CapsuleGeometry(0.2, 0.32, 6, 14), vest))
  torso.position.y = 0.32
  torso.scale.set(1, 1, 0.82)
  body.add(torso)

  const shirtFront = track(new Mesh(new BoxGeometry(0.22, 0.3, 0.06), shirt))
  shirtFront.position.set(0, 0.34, 0.14)
  body.add(shirtFront)

  const belt = track(new Mesh(new CylinderGeometry(0.205, 0.205, 0.06, 16), dark))
  belt.position.y = 0.16
  belt.scale.set(1, 1, 0.84)
  body.add(belt)

  // Backpack.
  const backpack = track(new Mesh(new BoxGeometry(0.3, 0.34, 0.18), pack))
  backpack.position.set(0, 0.38, -0.17)
  body.add(backpack)
  const roll = track(new Mesh(new CylinderGeometry(0.07, 0.07, 0.3, 12), shirt))
  roll.rotation.z = Math.PI / 2
  roll.position.set(0, 0.58, -0.2)
  body.add(roll)

  // Head, with the safari hat.
  const head = new Group()
  head.position.y = 0.62
  body.add(head)

  const skull = track(new Mesh(new SphereGeometry(0.155, 20, 16), skin))
  skull.position.y = 0.14
  skull.scale.set(1, 1.05, 0.98)
  head.add(skull)

  const hairCap = track(new Mesh(new SphereGeometry(0.158, 20, 14), hair))
  hairCap.position.y = 0.16
  hairCap.scale.set(1, 0.85, 1)
  head.add(hairCap)

  const hatBrim = track(new Mesh(new CylinderGeometry(0.27, 0.29, 0.03, 22), hat))
  hatBrim.position.y = 0.26
  head.add(hatBrim)
  const hatCrown = track(new Mesh(new CylinderGeometry(0.15, 0.17, 0.15, 18), hat))
  hatCrown.position.y = 0.34
  head.add(hatCrown)
  const hatBand = track(new Mesh(new TorusGeometry(0.165, 0.018, 8, 22), dark))
  hatBand.rotation.x = Math.PI / 2
  hatBand.position.y = 0.29
  head.add(hatBand)

  // Face.
  for (const side of [-1, 1]) {
    const eye = track(new Mesh(new SphereGeometry(0.024, 10, 8), dark))
    eye.position.set(side * 0.055, 0.14, 0.142)
    head.add(eye)
  }
  const nose = track(new Mesh(new SphereGeometry(0.022, 10, 8), skin))
  nose.position.set(0, 0.1, 0.155)
  head.add(nose)

  // Arms: one capsule per arm, pivoted at the shoulder.
  const arms: Group[] = []
  for (const side of [-1, 1]) {
    const shoulder = new Group()
    shoulder.position.set(side * 0.245, 0.44, 0)
    body.add(shoulder)
    const arm = track(new Mesh(new CapsuleGeometry(0.058, 0.32, 5, 10), shirt))
    arm.position.y = -0.22
    shoulder.add(arm)
    const hand = track(new Mesh(new SphereGeometry(0.062, 10, 8), skin))
    hand.position.y = -0.42
    shoulder.add(hand)
    arms.push(shoulder)
  }

  // Legs: one capsule per leg, pivoted at the hip.
  const legs: Group[] = []
  for (const side of [-1, 1]) {
    const hip = new Group()
    hip.position.set(side * 0.095, 0, 0)
    body.add(hip)
    const thigh = track(new Mesh(new CapsuleGeometry(0.075, 0.4, 5, 10), trousers))
    thigh.position.y = -0.26
    hip.add(thigh)
    const shoe = track(new Mesh(new BoxGeometry(0.13, 0.09, 0.22), boot))
    shoe.position.set(0, -0.72, 0.03)
    hip.add(shoe)
    legs.push(hip)
  }

  // Shoulder satchel.
  const satchel = track(new Mesh(new BoxGeometry(0.16, 0.14, 0.07), pack))
  satchel.position.set(0.18, 0.2, 0.12)
  body.add(satchel)

  const leftArm = arms[0]
  const rightArm = arms[1]
  const leftLeg = legs[0]
  const rightLeg = legs[1]
  let walkPhase = 0
  let lean = 0
  let currentSpeed = 0

  return {
    group,
    update: (dt: number, speedRatio: number, elapsed: number) => {
      currentSpeed = lerp(currentSpeed, clamp(speedRatio, 0, 1), approach(dt, 10))
      walkPhase += dt * lerp(0.6, 9.4, currentSpeed)
      const swing = Math.sin(walkPhase) * lerp(0.06, 0.72, currentSpeed)
      const bob = Math.abs(Math.sin(walkPhase)) * lerp(0.005, 0.075, currentSpeed)
      const idleBreath = Math.sin(elapsed * 1.7) * 0.012 * (1 - currentSpeed)

      if (leftLeg) leftLeg.rotation.x = swing
      if (rightLeg) rightLeg.rotation.x = -swing
      if (leftArm) {
        leftArm.rotation.x = -swing * 0.85
        leftArm.rotation.z = 0.08 + Math.sin(elapsed * 1.4) * 0.02
      }
      if (rightArm) {
        rightArm.rotation.x = swing * 0.85
        rightArm.rotation.z = -0.08 - Math.sin(elapsed * 1.4) * 0.02
      }
      head.rotation.z = Math.sin(walkPhase * 0.5) * 0.05 * currentSpeed
      head.rotation.y = Math.sin(elapsed * 0.6) * 0.14 * (1 - currentSpeed)
      lean = lerp(lean, currentSpeed * 0.14, approach(dt, 6))
      body.rotation.x = lean
      body.position.y = 0.82 + bob + idleBreath
    },
    setVisible: (visible: boolean) => {
      group.visible = visible
    },
    dispose: () => {
      // Reuses the museum's teardown so geometries, materials and any
      // textures are released exactly once.
      disposeObject3D(group)
    },
  }
}

/**
 * The floating guide drone that leads the guided tour. It hovers ahead of the
 * visitor, faces the exhibit it is introducing and blinks while it waits.
 */
export interface GuideDrone {
  readonly group: Group
  /** Points the drone's lens at a world position. */
  lookAtPoint: (point: Vector3) => void
  moveTo: (target: Vector3) => void
  setVisible: (visible: boolean) => void
  update: (dt: number, elapsed: number) => void
  dispose: () => void
}

export function createGuideDrone(): GuideDrone {
  const group = new Group()
  group.name = 'guide-drone'
  group.visible = false
  // The hover bob lives on an inner group so it never fights the follow lerp.
  const bob = new Group()
  group.add(bob)
  const materials: MeshStandardMaterial[] = []

  const shell = new MeshStandardMaterial({ color: '#e9e3d4', roughness: 0.5 })
  const trim = new MeshStandardMaterial({
    color: '#f4b85f',
    roughness: 0.4,
    emissive: '#c98a25',
    emissiveIntensity: 0.5,
  })
  const lens = new MeshStandardMaterial({
    color: '#4fd0c0',
    roughness: 0.2,
    emissive: '#2ec4b6',
    emissiveIntensity: 1.6,
  })
  materials.push(shell, trim, lens)

  const body = new Mesh(new SphereGeometry(0.3, 20, 16), shell)
  body.castShadow = true
  body.scale.set(1, 0.86, 1)
  bob.add(body)

  const ring = new Mesh(new TorusGeometry(0.36, 0.045, 10, 26), trim)
  ring.rotation.x = Math.PI / 2
  bob.add(ring)

  const eye = new Mesh(new SphereGeometry(0.1, 14, 12), lens)
  eye.position.set(0, 0.03, 0.27)
  eye.scale.set(1.5, 1, 0.6)
  bob.add(eye)

  const fin = new Mesh(new ConeGeometry(0.1, 0.24, 8), trim)
  fin.position.y = -0.3
  fin.rotation.x = Math.PI
  bob.add(fin)

  const target = new Vector3()
  const lookTarget = new Vector3()
  let hasTarget = false
  let hasLook = false
  let yaw = 0
  let pitch = 0

  return {
    group,
    moveTo: (next: Vector3) => {
      target.copy(next)
      hasTarget = true
    },
    lookAtPoint: (point: Vector3) => {
      lookTarget.copy(point)
      hasLook = true
    },
    setVisible: (visible: boolean) => {
      group.visible = visible
    },
    update: (dt: number, elapsed: number) => {
      if (hasTarget) {
        const follow = approach(dt, 3.4)
        group.position.x = lerp(group.position.x, target.x, follow)
        group.position.y = lerp(group.position.y, target.y, follow)
        group.position.z = lerp(group.position.z, target.z, follow)
      }
      if (hasLook) {
        const dx = lookTarget.x - group.position.x
        const dy = lookTarget.y - group.position.y
        const dz = lookTarget.z - group.position.z
        yaw = Math.atan2(dx, dz)
        // The lens sits on the drone's +z face, so pitch is applied inverted.
        pitch = -Math.atan2(dy, Math.max(Math.hypot(dx, dz), 0.001))
      }
      group.rotation.y = yaw
      bob.rotation.x = lerp(bob.rotation.x, pitch, approach(dt, 3))
      bob.position.y = Math.sin(elapsed * 2.1) * 0.09
      ring.rotation.z = elapsed * 1.1
      const blink = Math.sin(elapsed * 5.5) > 0.2 ? 1 : 0.25
      lens.emissiveIntensity = 1.1 + blink * 0.9
      eye.scale.set(1.5, 1, 0.6 * (0.4 + blink * 0.6))
    },
    dispose: () => {
      disposeObject3D(group)
    },
  }
}
