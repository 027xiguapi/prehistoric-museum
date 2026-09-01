import { useEffect, useState } from 'react'

/**
 * Eases a number from 0 up to `target` once on mount, used by the size
 * drawer's measuring marker. Prefers-reduced-motion jumps straight to the
 * target so the final value is never gated behind animation.
 */
export function useCountUp(
  target: number,
  durationMs = 900,
  delayMs = 0,
): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frame = window.requestAnimationFrame(() => setValue(target))
      return () => window.cancelAnimationFrame(frame)
    }
    let start: number | null = null
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        start ??= now
        const progress = Math.min(1, (now - start) / durationMs)
        setValue(target * (1 - (1 - progress) ** 3))
        if (progress < 1) {
          frame = window.requestAnimationFrame(tick)
        }
      }
      frame = window.requestAnimationFrame(tick)
    }, delayMs)
    return () => {
      window.clearTimeout(timer)
      window.cancelAnimationFrame(frame)
    }
  }, [target, durationMs, delayMs])

  return value
}
