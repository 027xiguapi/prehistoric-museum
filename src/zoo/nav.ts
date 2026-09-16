import { clamp } from '@/src/zoo/noise'
import { PARK, WATER_LEVEL } from '@/src/zoo/park-data'
import type { HeightGrid } from '@/src/zoo/terrain'

/** The explorer never wades: standing ground must clear the waterline. */
export const MIN_WALK_HEIGHT = WATER_LEVEL + 0.45
/** ~34°. Steeper than this reads as a cliff, so it is not walkable. */
export const MAX_WALK_SLOPE = 0.68
/** Half-width of the explorer's body, used to keep it out of geometry. */
export const BODY_RADIUS = 0.55

/**
 * Broad-phase circle storage for everything the explorer must not walk
 * through: scenery, paddock fences, exhibit footprints.
 */
export class ObstacleField {
  private readonly cell: number
  private readonly buckets = new Map<number, number[]>()
  private readonly entries: { x: number; z: number; r2: number }[] = []

  constructor(cell = 8) {
    this.cell = cell
  }

  private key(ix: number, iz: number): number {
    return (ix + 4096) * 8192 + (iz + 4096)
  }

  add(x: number, z: number, radius: number): void {
    const entry = { x, z, r2: radius * radius }
    const index = this.entries.length
    this.entries.push(entry)
    const span = Math.ceil(radius / this.cell)
    const cx = Math.floor(x / this.cell)
    const cz = Math.floor(z / this.cell)
    for (let iz = cz - span; iz <= cz + span; iz += 1) {
      for (let ix = cx - span; ix <= cx + span; ix += 1) {
        const key = this.key(ix, iz)
        const bucket = this.buckets.get(key)
        if (bucket) {
          bucket.push(index)
        } else {
          this.buckets.set(key, [index])
        }
      }
    }
  }

  /** True when `(x, z)` is inside any circle grown by `inflation`. */
  blocks(x: number, z: number, inflation = 0): boolean {
    const ix = Math.floor(x / this.cell)
    const iz = Math.floor(z / this.cell)
    const bucket = this.buckets.get(this.key(ix, iz))
    if (!bucket) {
      return false
    }
    for (const index of bucket) {
      const entry = this.entries[index]
      if (!entry) {
        continue
      }
      const limit = Math.sqrt(entry.r2) + inflation
      const dx = x - entry.x
      const dz = z - entry.z
      if (dx * dx + dz * dz < limit * limit) {
        return true
      }
    }
    return false
  }

  get size(): number {
    return this.entries.length
  }
}

export interface Walkability {
  (x: number, z: number, inflation?: number): boolean
}

/**
 * The single source of truth for "can a visitor stand here". The navigation
 * grid and the explorer's own collision both call it, so a planned path can
 * never route through a wall the body then refuses to cross.
 */
export function createWalkability(
  heightGrid: HeightGrid,
  obstacles: ObstacleField,
): Walkability {
  return (x, z, inflation = 0) => {
    if (Math.abs(x) > PARK.walkX || Math.abs(z) > PARK.walkZ) {
      return false
    }
    if (heightGrid.heightAt(x, z) < MIN_WALK_HEIGHT) {
      return false
    }
    if (heightGrid.slopeAt(x, z) > MAX_WALK_SLOPE) {
      return false
    }
    return !obstacles.blocks(x, z, inflation)
  }
}

export interface ParkPoint {
  readonly x: number
  readonly z: number
}

interface HeapEntry {
  readonly f: number
  readonly index: number
}

/**
 * A* over a uniform grid with no corner cutting and a string-pull pass, so
 * tap-to-move and the guided tour both produce walkable, natural routes.
 */
export class NavGrid {
  readonly cell = 2
  readonly minX = -PARK.width / 2
  readonly minZ = -PARK.depth / 2
  readonly nx = Math.ceil(PARK.width / 2)
  readonly nz = Math.ceil(PARK.depth / 2)
  private readonly walkable: Uint8Array

  constructor(walkable: Walkability, inflation = 1.25) {
    this.walkable = new Uint8Array(this.nx * this.nz)
    for (let iz = 0; iz < this.nz; iz += 1) {
      const z = this.minZ + (iz + 0.5) * this.cell
      for (let ix = 0; ix < this.nx; ix += 1) {
        const x = this.minX + (ix + 0.5) * this.cell
        this.walkable[iz * this.nx + ix] = walkable(x, z, inflation) ? 1 : 0
      }
    }
  }

  toCell(x: number, z: number): [number, number] {
    return [
      Math.floor((x - this.minX) / this.cell),
      Math.floor((z - this.minZ) / this.cell),
    ]
  }

  toWorld(ix: number, iz: number): ParkPoint {
    return {
      x: this.minX + (ix + 0.5) * this.cell,
      z: this.minZ + (iz + 0.5) * this.cell,
    }
  }

  ok(ix: number, iz: number): boolean {
    return (
      ix >= 0 &&
      iz >= 0 &&
      ix < this.nx &&
      iz < this.nz &&
      this.walkable[iz * this.nx + ix] === 1
    )
  }

  isWalkable(x: number, z: number): boolean {
    const [ix, iz] = this.toCell(x, z)
    return this.ok(ix, iz)
  }

  /** Closest walkable point to `(x, z)`, searching outwards in rings. */
  nearest(x: number, z: number, maxCells = 40): ParkPoint | null {
    const [cx, cz] = this.toCell(x, z)
    if (this.ok(cx, cz)) {
      return { x, z }
    }
    for (let radius = 1; radius <= maxCells; radius += 1) {
      let best: ParkPoint | null = null
      let bestDistance = Number.POSITIVE_INFINITY
      for (let iz = cz - radius; iz <= cz + radius; iz += 1) {
        for (let ix = cx - radius; ix <= cx + radius; ix += 1) {
          if (Math.max(Math.abs(ix - cx), Math.abs(iz - cz)) !== radius) {
            continue
          }
          if (!this.ok(ix, iz)) {
            continue
          }
          const distance = (ix - cx) ** 2 + (iz - cz) ** 2
          if (distance < bestDistance) {
            bestDistance = distance
            best = this.toWorld(ix, iz)
          }
        }
      }
      if (best) {
        return best
      }
    }
    return null
  }

  lineOfSight(a: ParkPoint, b: ParkPoint): boolean {
    const dx = b.x - a.x
    const dz = b.z - a.z
    const length = Math.hypot(dx, dz)
    if (length < 1e-4) {
      return true
    }
    const steps = Math.ceil(length / (this.cell * 0.5))
    for (let step = 0; step <= steps; step += 1) {
      const t = step / steps
      if (!this.isWalkable(a.x + dx * t, a.z + dz * t)) {
        return false
      }
    }
    return true
  }

  findPath(from: ParkPoint, to: ParkPoint): ParkPoint[] | null {
    const start = this.nearest(from.x, from.z)
    const goal = this.nearest(to.x, to.z)
    if (!start || !goal) {
      return null
    }
    const [si, sj] = this.toCell(start.x, start.z)
    const [gi, gj] = this.toCell(goal.x, goal.z)
    const nx = this.nx
    const total = nx * this.nz
    const gScore = new Float32Array(total).fill(Number.POSITIVE_INFINITY)
    const cameFrom = new Int32Array(total).fill(-1)
    const closed = new Uint8Array(total)
    const heap: HeapEntry[] = []

    const push = (f: number, index: number): void => {
      heap.push({ f, index })
      let child = heap.length - 1
      while (child > 0) {
        const parent = (child - 1) >> 1
        const parentEntry = heap[parent]
        const childEntry = heap[child]
        if (!parentEntry || !childEntry || parentEntry.f <= childEntry.f) {
          break
        }
        heap[parent] = childEntry
        heap[child] = parentEntry
        child = parent
      }
    }
    const pop = (): HeapEntry | undefined => {
      const top = heap[0]
      const last = heap.pop()
      if (heap.length > 0 && last) {
        heap[0] = last
        let parent = 0
        for (;;) {
          const left = parent * 2 + 1
          const right = left + 1
          let smallest = parent
          const smallestEntry = heap[smallest]
          const leftEntry = heap[left]
          const rightEntry = heap[right]
          if (
            left < heap.length &&
            leftEntry &&
            smallestEntry &&
            leftEntry.f < smallestEntry.f
          ) {
            smallest = left
          }
          const currentSmallest = heap[smallest]
          if (
            right < heap.length &&
            rightEntry &&
            currentSmallest &&
            rightEntry.f < currentSmallest.f
          ) {
            smallest = right
          }
          if (smallest === parent) {
            break
          }
          const a = heap[smallest]
          const b = heap[parent]
          if (!a || !b) {
            break
          }
          heap[smallest] = b
          heap[parent] = a
          parent = smallest
        }
      }
      return top
    }

    const heuristic = (ix: number, iz: number): number => {
      const dx = Math.abs(ix - gi)
      const dz = Math.abs(iz - gj)
      return Math.max(dx, dz) + 0.4142 * Math.min(dx, dz)
    }

    const startIndex = sj * nx + si
    const goalIndex = gj * nx + gi
    gScore[startIndex] = 0
    push(heuristic(si, sj), startIndex)

    const directions: readonly (readonly [number, number, number])[] = [
      [1, 0, 1],
      [-1, 0, 1],
      [0, 1, 1],
      [0, -1, 1],
      [1, 1, Math.SQRT2],
      [1, -1, Math.SQRT2],
      [-1, 1, Math.SQRT2],
      [-1, -1, Math.SQRT2],
    ]

    let found = false
    let iterations = 0
    while (heap.length > 0 && iterations < 200000) {
      iterations += 1
      const current = pop()
      if (!current) {
        break
      }
      if (current.index === goalIndex) {
        found = true
        break
      }
      if (closed[current.index]) {
        continue
      }
      closed[current.index] = 1
      const ci = current.index % nx
      const cj = (current.index / nx) | 0
      for (const direction of directions) {
        const [di, dj, cost] = direction
        const ni = ci + di
        const nj = cj + dj
        if (!this.ok(ni, nj)) {
          continue
        }
        // No corner cutting: both orthogonal neighbours must be free.
        if (di !== 0 && dj !== 0 && (!this.ok(ci + di, cj) || !this.ok(ci, cj + dj))) {
          continue
        }
        const nextIndex = nj * nx + ni
        if (closed[nextIndex]) {
          continue
        }
        const tentative = (gScore[current.index] ?? Number.POSITIVE_INFINITY) + cost
        if (tentative < (gScore[nextIndex] ?? Number.POSITIVE_INFINITY)) {
          gScore[nextIndex] = tentative
          cameFrom[nextIndex] = current.index
          push(tentative + heuristic(ni, nj), nextIndex)
        }
      }
    }

    if (!found) {
      return null
    }

    const cells: ParkPoint[] = []
    let cursor = goalIndex
    while (cursor !== -1) {
      cells.push(this.toWorld(cursor % nx, (cursor / nx) | 0))
      cursor = cameFrom[cursor] ?? -1
    }
    cells.reverse()
    const first = cells[0]
    const last = cells[cells.length - 1]
    if (first) {
      cells[0] = { x: from.x, z: from.z }
    }
    if (last) {
      cells[cells.length - 1] = { x: goal.x, z: goal.z }
    }

    // String pull: keep only the corners we actually have to turn at.
    const smoothed: ParkPoint[] = []
    const startPoint = cells[0]
    if (!startPoint) {
      return null
    }
    smoothed.push(startPoint)
    let index = 0
    while (index < cells.length - 1) {
      let candidate = cells.length - 1
      while (candidate > index + 1) {
        const a = cells[index]
        const b = cells[candidate]
        if (a && b && this.lineOfSight(a, b)) {
          break
        }
        candidate -= 1
      }
      const point = cells[candidate]
      if (!point) {
        break
      }
      smoothed.push(point)
      index = candidate
    }
    return smoothed
  }

}

/**
 * Snaps a point onto dry, walkable ground using terrain alone. The nav grid
 * cannot exist yet when scenery is placed — the grid needs the scenery's
 * obstacle field — so station snapping uses this first pass.
 */
export function snapToTerrainGround(
  heightGrid: HeightGrid,
  x: number,
  z: number,
  maxRadius = 70,
): ParkPoint {
  const standable = (px: number, pz: number): boolean =>
    Math.abs(px) <= PARK.walkX &&
    Math.abs(pz) <= PARK.walkZ &&
    heightGrid.heightAt(px, pz) >= MIN_WALK_HEIGHT &&
    heightGrid.slopeAt(px, pz) <= MAX_WALK_SLOPE
  if (standable(x, z)) {
    return { x, z }
  }
  for (let ring = 1; ring <= maxRadius; ring += 1) {
    const samples = Math.max(8, ring * 6)
    for (let step = 0; step < samples; step += 1) {
      const angle = (step / samples) * Math.PI * 2
      const px = x + Math.cos(angle) * ring
      const pz = z + Math.sin(angle) * ring
      if (standable(px, pz)) {
        return { x: px, z: pz }
      }
    }
  }
  return { x, z }
}

/** Angle of the walkable ground under a point, for tilting scenery. */
export function groundTilt(
  heightGrid: HeightGrid,
  x: number,
  z: number,
  step = 1.5,
): { pitch: number; roll: number } {
  const dx =
    (heightGrid.heightAt(x + step, z) - heightGrid.heightAt(x - step, z)) /
    (2 * step)
  const dz =
    (heightGrid.heightAt(x, z + step) - heightGrid.heightAt(x, z - step)) /
    (2 * step)
  return { pitch: clamp(dz, -1, 1), roll: clamp(-dx, -1, 1) }
}
