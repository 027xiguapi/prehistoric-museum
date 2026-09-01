/**
 * Approximate mass estimates powering the balance-scale comparison in the
 * size drawer. These are coarse, widely published mid-range estimates chosen
 * for a kid-facing "as heavy as …" illustration; the UI always presents them
 * with approximate wording ("约" / "about"), never as reviewed facts. Animals
 * missing from the table render the drawer's "weight unavailable" state.
 */
export interface WeightEstimate {
  readonly minKg: number
  readonly maxKg: number
}

const weightEstimatesKg = {
  apatosaurus: { minKg: 25_000, maxKg: 35_000 },
  dilophosaurus: { minKg: 300, maxKg: 500 },
  gigantoraptor: { minKg: 1_400, maxKg: 2_500 },
  ichthyosaur: { minKg: 500, maxKg: 1_000 },
  maiasaura: { minKg: 2_500, maxKg: 4_000 },
  mammoth: { minKg: 5_000, maxKg: 8_000 },
  megalodon: { minKg: 40_000, maxKg: 60_000 },
  meganeura: { minKg: 0.1, maxKg: 0.2 },
  mosasaurus: { minKg: 10_000, maxKg: 20_000 },
  pachycephalosaurus: { minKg: 400, maxKg: 500 },
  plesiosaurus: { minKg: 500, maxKg: 2_000 },
  pteranodon: { minKg: 20, maxKg: 35 },
  rhamphorhynchus: { minKg: 1, maxKg: 2 },
  sauropelta: { minKg: 1_500, maxKg: 2_000 },
  stegosaurus: { minKg: 3_500, maxKg: 7_000 },
  triceratops: { minKg: 6_000, maxKg: 12_000 },
  tupandactylus: { minKg: 20, maxKg: 30 },
  'tyrannosaurus-rex': { minKg: 7_000, maxKg: 9_000 },
} as const satisfies Readonly<Record<string, WeightEstimate>>

export function weightEstimateFor(animalId: string): WeightEstimate | null {
  return (
    (weightEstimatesKg as Readonly<Record<string, WeightEstimate>>)[
      animalId
    ] ?? null
  )
}
