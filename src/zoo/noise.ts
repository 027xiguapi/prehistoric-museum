// Deterministic value noise and RNG for the zoo park. Every visitor must see
// the same park, so all scenery placement is seeded and never uses
// `Math.random()`.

function hash(ix: number, iz: number): number {
  let n = Math.imul(ix, 374761393) + Math.imul(iz, 668265263)
  n = Math.imul(n ^ (n >>> 13), 1274126177)
  n = n ^ (n >>> 16)
  return (n >>> 0) / 4294967295
}

export function vnoise(x: number, z: number): number {
  const ix = Math.floor(x)
  const iz = Math.floor(z)
  const fx = x - ix
  const fz = z - iz
  const u = fx * fx * (3 - 2 * fx)
  const v = fz * fz * (3 - 2 * fz)
  const a = hash(ix, iz)
  const b = hash(ix + 1, iz)
  const c = hash(ix, iz + 1)
  const d = hash(ix + 1, iz + 1)
  return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v
}

export function fbm(x: number, z: number, octaves = 4): number {
  let sum = 0
  let amplitude = 0.5
  let frequency = 1
  let norm = 0
  for (let index = 0; index < octaves; index += 1) {
    sum += amplitude * vnoise(x * frequency, z * frequency)
    norm += amplitude
    amplitude *= 0.5
    frequency *= 2.03
  }
  return sum / norm
}

export interface SeededRandom {
  (): number
  pick<Value>(values: readonly Value[]): Value
  range(min: number, max: number): number
}

export function rng(seed = 1): SeededRandom {
  let state = (seed >>> 0) || 1
  const next = (): number => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    return state / 4294967296
  }
  const random = next as SeededRandom
  random.range = (min, max) => min + (max - min) * next()
  random.pick = <Value>(values: readonly Value[]): Value => {
    const value = values[Math.floor(next() * values.length)]
    if (value === undefined) {
      throw new Error('rng.pick 收到了空数组。')
    }
    return value
  }
  return random
}

/** `0` at `a`, `1` at `b`, smooth in between. Works when `b < a`. */
export function smoothstep(a: number, b: number, x: number): number {
  if (a === b) {
    return x < a ? 0 : 1
  }
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function clamp(x: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, x))
}

/** Shortest signed angular difference from `from` to `to`, in radians. */
export function angleDelta(from: number, to: number): number {
  let delta = to - from
  delta = Math.atan2(Math.sin(delta), Math.cos(delta))
  return delta
}

/** Frame-rate independent exponential approach factor. */
export function approach(dt: number, rate: number): number {
  return 1 - Math.exp(-dt * rate)
}
