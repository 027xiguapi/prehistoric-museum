import { useEffect, useMemo } from 'react'

export type CarePlayKind = 'meat' | 'leaf' | 'bath' | 'ball'

interface StagePlayEffectProps {
  readonly kind: CarePlayKind
  /** Called once the particle burst finishes, so the parent can clean up. */
  readonly onDone: () => void
}

interface ParticleSpec {
  readonly leftPercent: number
  readonly delayMs: number
  readonly durationMs: number
  readonly sizePx: number
  readonly spinDeg: number
}

const FALL_DURATION_MS = 1_500
const FALL_SPREAD_MS = 500
const RISE_DURATION_MS = 2_000
const RISE_SPREAD_MS = 700
const PARTICLE_COUNT = 9

function buildParticles(): ParticleSpec[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const lane = (index + 0.5) / PARTICLE_COUNT
    // Jitter within the lane so the burst does not look like a grid.
    const jitter = (Math.random() - 0.5) * (70 / PARTICLE_COUNT)
    return {
      leftPercent: 18 + lane * 64 + jitter,
      delayMs: Math.round(Math.random() * (index % 2 === 0 ? FALL_SPREAD_MS : RISE_SPREAD_MS)),
      durationMs:
        (index % 2 === 0 ? FALL_DURATION_MS : RISE_DURATION_MS) +
        Math.round(Math.random() * 300),
      sizePx: 18 + Math.round(Math.random() * 14),
      spinDeg: Math.round((Math.random() - 0.5) * 720),
    }
  })
}

/**
 * One-shot particle burst over the model stage: food falls from above, bath
 * bubbles rise from below, the ball game drops and bounces a single ball.
 * Purely decorative (aria-hidden); the semantic feedback lives in the live
 * region message the parent announces.
 */
export function StagePlayEffect({ kind, onDone }: StagePlayEffectProps) {
  const particles = useMemo(() => buildParticles(), [])
  const ballGame = kind === 'ball'
  const maxDurationMs = ballGame
    ? 2_600
    : (kind === 'bath' ? RISE_DURATION_MS : FALL_DURATION_MS) +
      Math.max(FALL_SPREAD_MS, RISE_SPREAD_MS) +
      400

  useEffect(() => {
    const timer = window.setTimeout(onDone, maxDurationMs)
    return () => {
      window.clearTimeout(timer)
    }
  }, [maxDurationMs, onDone])

  const falling = kind !== 'bath'
  // The ball game uses one big ball; everything else scatters particles.
  const bits = ballGame ? particles.slice(0, 1) : particles

  return (
    <div aria-hidden="true" className="care-fx" data-care-kind={kind}>
      {bits.map((particle, index) => (
        <span
          className={
            ballGame
              ? 'care-fx__bit care-fx__bit--ball'
              : falling
                ? `care-fx__bit care-fx__bit--${kind}`
                : 'care-fx__bit care-fx__bit--bubble'
          }
          key={index}
          style={{
            animationDelay: ballGame ? '0ms' : `${particle.delayMs}ms`,
            animationDuration: ballGame
              ? undefined
              : `${particle.durationMs}ms`,
            ['--care-left' as string]: ballGame
              ? '46%'
              : `${particle.leftPercent}%`,
            ['--care-size' as string]: ballGame ? '52px' : `${particle.sizePx}px`,
            ['--care-spin' as string]: `${particle.spinDeg}deg`,
          }}
        />
      ))}
    </div>
  )
}
