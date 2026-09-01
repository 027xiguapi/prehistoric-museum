/**
 * Pure comparison logic for the size drawer scenes: picks familiar reference
 * objects (apples, kids, grown-ups, cars, buses) whose count stays small
 * enough to read at a glance on a balance pan.
 */
import type { WeightEstimate } from '@/src/content/size-estimates'

export type WeightReferenceId = 'apple' | 'child' | 'adult' | 'car' | 'bus'

export interface WeightComparison {
  readonly reference: WeightReferenceId
  readonly count: number
}

interface WeightReference {
  readonly id: WeightReferenceId
  readonly kg: number
  /** Largest pile that still reads clearly on the pan. */
  readonly maxCount: number
}

const busReference: WeightReference = { id: 'bus', kg: 12_000, maxCount: 6 }

const weightReferences: readonly WeightReference[] = [
  { id: 'apple', kg: 0.2, maxCount: 8 },
  { id: 'child', kg: 20, maxCount: 6 },
  { id: 'adult', kg: 70, maxCount: 10 },
  { id: 'car', kg: 1_500, maxCount: 8 },
  busReference,
]

/** Taller piles collapse to a "×N" chip beyond this many drawn icons. */
export const maxBalanceIcons = 8

/** Reference grown-up height for the measuring scene, in metres. */
export const adultHeightMeters = 1.7

/** Single representative mass for the comparison: the range midpoint. */
export function representativeKg(weight: WeightEstimate): number {
  return (weight.minKg + weight.maxKg) / 2
}

export function pickWeightComparison(kg: number): WeightComparison {
  for (const reference of weightReferences) {
    const count = kg / reference.kg
    if (count >= 0.5 && count <= reference.maxCount) {
      return {
        reference: reference.id,
        count: Math.max(1, Math.round(count)),
      }
    }
  }
  return {
    reference: busReference.id,
    count: Math.max(1, Math.round(kg / busReference.kg)),
  }
}
