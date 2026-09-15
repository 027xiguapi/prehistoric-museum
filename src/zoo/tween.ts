// Minimal dependency-free tween engine for the zoo's UI reactions
// (rings, labels, reaction envelopes). Ported from the clay-safari reference
// and typed for this project.

export interface Easing {
  (t: number): number
}

export const Ease = {
  linear: (t: number): number => t,
  outQuad: (t: number): number => 1 - (1 - t) * (1 - t),
  inOutQuad: (t: number): number =>
    t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2,
  outBack: (t: number): number => {
    const c = 1.70158
    return 1 + (c + 1) * (t - 1) ** 3 + c * (t - 1) ** 2
  },
  outElastic: (t: number): number => {
    if (t === 0 || t === 1) {
      return t
    }
    return 2 ** (-10 * t) * Math.sin(((t * 10 - 0.75) * (2 * Math.PI)) / 3) + 1
  },
  outBounce: (t: number): number => {
    const n = 7.5625
    const d = 2.75
    if (t < 1 / d) {
      return n * t * t
    }
    if (t < 2 / d) {
      const x = t - 1.5 / d
      return n * x * x + 0.75
    }
    if (t < 2.5 / d) {
      const x = t - 2.25 / d
      return n * x * x + 0.9375
    }
    const x = t - 2.625 / d
    return n * x * x + 0.984375
  },
  /** `0 → 1 → 0`, handy for one-shot reaction envelopes. */
  arc: (t: number): number => Math.sin(t * Math.PI),
} satisfies Record<string, Easing>

/** Any object with mutable numeric properties. */
export type TweenTarget = Record<string, number>

interface NumericTween {
  readonly kind: 'numeric'
  readonly target: TweenTarget
  readonly prop: string
  readonly from: number
  readonly to: number
  readonly duration: number
  readonly ease: Easing
  readonly pingPong: boolean
  readonly id: string | undefined
  readonly onDone: (() => void) | undefined
  elapsed: number
}

interface FunctionTween {
  readonly kind: 'function'
  readonly fn: (eased: number, raw: number) => void
  readonly duration: number
  readonly ease: Easing
  readonly onDone: (() => void) | undefined
  elapsed: number
}

type ActiveTween = NumericTween | FunctionTween

const active: ActiveTween[] = []

export interface TweenOptions {
  readonly delay?: number
  readonly ease?: Easing
  /** When true the value rises to `to` and returns to `from`. */
  readonly pingPong?: boolean
  readonly onDone?: () => void
  /**
   * Replaces any in-flight tween with the same `id` on the same target, so
   * repeated hover/selection events cannot stack.
   */
  readonly id?: string
}

export function tween(
  target: TweenTarget,
  prop: string,
  to: number,
  duration: number,
  options: TweenOptions = {},
): void {
  if (options.id !== undefined) {
    for (let index = active.length - 1; index >= 0; index -= 1) {
      const entry = active[index]
      if (
        entry &&
        entry.kind === 'numeric' &&
        entry.id === options.id &&
        entry.target === target
      ) {
        active.splice(index, 1)
      }
    }
  }
  const current = target[prop]
  active.push({
    kind: 'numeric',
    target,
    prop,
    from: typeof current === 'number' ? current : 0,
    to,
    duration: Math.max(duration, 0.0001),
    ease: options.ease ?? Ease.outQuad,
    pingPong: options.pingPong ?? false,
    id: options.id,
    onDone: options.onDone,
    elapsed: -(options.delay ?? 0),
  })
}

export function tweenFn(
  fn: (eased: number, raw: number) => void,
  duration: number,
  options: Omit<TweenOptions, 'pingPong' | 'id'> = {},
): void {
  active.push({
    kind: 'function',
    fn,
    duration: Math.max(duration, 0.0001),
    ease: options.ease ?? Ease.linear,
    onDone: options.onDone,
    elapsed: -(options.delay ?? 0),
  })
}

export function cancelTweens(target: TweenTarget): void {
  for (let index = active.length - 1; index >= 0; index -= 1) {
    const entry = active[index]
    if (entry && entry.kind === 'numeric' && entry.target === target) {
      active.splice(index, 1)
    }
  }
}

export function clearTweens(): void {
  active.length = 0
}

export function updateTweens(dt: number): void {
  for (let index = active.length - 1; index >= 0; index -= 1) {
    const entry = active[index]
    if (!entry) {
      continue
    }
    entry.elapsed += dt
    if (entry.elapsed < 0) {
      continue
    }
    const raw = Math.min(1, entry.elapsed / entry.duration)
    const eased = entry.ease(raw)
    if (entry.kind === 'function') {
      entry.fn(eased, raw)
    } else {
      entry.target[entry.prop] = entry.pingPong
        ? entry.from + (entry.to - entry.from) * Math.sin(eased * Math.PI)
        : entry.from + (entry.to - entry.from) * eased
    }
    if (raw >= 1) {
      active.splice(index, 1)
      if (entry.kind === 'numeric' && entry.pingPong) {
        entry.target[entry.prop] = entry.from
      }
      entry.onDone?.()
    }
  }
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
