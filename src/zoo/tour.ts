import { Vector3 } from 'three'
import { TOUR_ROUTE } from '@/src/zoo/park-data'
import type { AnimalActor } from '@/src/zoo/animal-actor'
import type { GuideDrone } from '@/src/zoo/explorer'
import type { Player } from '@/src/zoo/player'

export interface GuidedTourOptions {
  readonly player: Player
  readonly actors: ReadonlyMap<string, AnimalActor>
  readonly stations: ReadonlyMap<string, { readonly x: number; readonly z: number }>
  readonly drone: GuideDrone
  readonly visit: (actor: AnimalActor, fromTour: boolean) => Promise<void>
  readonly announce: (message: string) => void
  readonly onStateChange: (active: boolean, animalId: string | null) => void
}

const LEG_TIMEOUT_MS = 22000
const STALL_TIMEOUT_MS = 5000

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

/**
 * The guided tour: the drone leads the visitor from exhibit to exhibit along
 * the park trail, framing each animal and running the same "meet" flow a tap
 * would. Stops immediately when the visitor takes back the controls.
 */
export class GuidedTour {
  private readonly options: GuidedTourOptions
  private activeNow = false
  private token = 0
  private current: AnimalActor | null = null
  private readonly scratch = new Vector3()

  constructor(options: GuidedTourOptions) {
    this.options = options
  }

  get active(): boolean {
    return this.activeNow
  }

  get currentAnimalId(): string | null {
    return this.current?.id ?? null
  }

  toggle(): void {
    if (this.activeNow) {
      this.stop()
    } else {
      void this.start()
    }
  }

  async start(fromAnimalId?: string): Promise<void> {
    if (this.activeNow) {
      return
    }
    this.activeNow = true
    const token = (this.token += 1)
    const { player, drone, announce, onStateChange } = this.options
    player.locked = true
    drone.setVisible(true)
    onStateChange(true, null)
    announce('🤖 跟我走！Follow the drone!')

    let route = TOUR_ROUTE
    if (fromAnimalId) {
      const index = TOUR_ROUTE.indexOf(fromAnimalId)
      if (index >= 0) {
        route = TOUR_ROUTE.slice(index)
      }
    }

    for (const animalId of route) {
      if (!this.isCurrent(token)) {
        return
      }
      const actor = this.options.actors.get(animalId)
      if (!actor) {
        continue
      }
      this.current = actor
      onStateChange(true, animalId)

      const station = this.options.stations.get(animalId) ?? {
        x: actor.exhibit.site.x,
        z: actor.exhibit.site.z,
      }
      const reached = await this.walkTo(station.x, station.z, token)
      if (!this.isCurrent(token)) {
        return
      }
      if (!reached) {
        // Unreachable viewpoint: still introduce the animal from here.
        announce(`🤖 ${actor.exhibit.name}`)
      }

      this.frameExhibit(actor)
      await wait(420)
      if (!this.isCurrent(token)) {
        return
      }
      await this.options.visit(actor, true)
      await wait(650)
    }

    if (this.isCurrent(token)) {
      announce('🎉 导览结束！Tour complete!')
      await wait(1600)
      this.stop()
    }
  }

  stop(): void {
    if (!this.activeNow) {
      return
    }
    this.activeNow = false
    this.token += 1
    this.current = null
    this.options.player.locked = false
    this.options.player.stop()
    this.options.drone.setVisible(false)
    this.options.onStateChange(false, null)
  }

  /** Aims the drone ahead of the visitor and updates its look target. */
  update(): void {
    if (!this.activeNow) {
      return
    }
    const { player, drone } = this.options
    const actor = this.current
    const playerPosition = player.position
    if (actor) {
      actor.focusPoint(this.scratch)
      const dx = actor.exhibit.site.x - playerPosition.x
      const dz = actor.exhibit.site.z - playerPosition.z
      const length = Math.hypot(dx, dz) || 1
      drone.moveTo(
        this.scratch.set(
          playerPosition.x + (dx / length) * 4.5,
          playerPosition.y + 3.4,
          playerPosition.z + (dz / length) * 4.5,
        ),
      )
      drone.lookAtPoint(actor.focusPoint(this.scratch))
    } else {
      drone.moveTo(
        this.scratch.set(
          playerPosition.x,
          playerPosition.y + 3.4,
          playerPosition.z - 3,
        ),
      )
    }
  }

  private isCurrent(token: number): boolean {
    return this.activeNow && this.token === token
  }

  /** Walks the visitor to a point, resolving once the route finishes or stalls. */
  private async walkTo(x: number, z: number, token: number): Promise<boolean> {
    const { player } = this.options
    const started = player.goTo(x, z)
    if (!started) {
      // Already standing close enough, or no route: let the visitor walk.
      const distance = Math.hypot(player.position.x - x, player.position.z - z)
      return distance < 12
    }
    const deadline = performance.now() + LEG_TIMEOUT_MS
    let lastProgressAt = performance.now()
    let lastX = player.position.x
    let lastZ = player.position.z
    for (;;) {
      if (!this.isCurrent(token)) {
        return false
      }
      if (!player.path) {
        return true
      }
      const now = performance.now()
      if (Math.hypot(player.position.x - lastX, player.position.z - lastZ) > 0.5) {
        lastX = player.position.x
        lastZ = player.position.z
        lastProgressAt = now
      }
      if (now > deadline || now - lastProgressAt > STALL_TIMEOUT_MS) {
        player.stop()
        return false
      }
      await wait(140)
    }
  }

  private frameExhibit(actor: AnimalActor): void {
    const site = actor.exhibit.site
    const player = this.options.player
    const framing = actor.framingFor(player.position.x, player.position.z)
    player.setCameraForViewing(site.x, site.z, framing.distance, framing.pitch)
  }
}
