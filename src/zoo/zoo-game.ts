import {
  ACESFilmicToneMapping,
  Color,
  MeshBasicMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Ray,
  Scene,
  Sphere,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { AnimalActor } from '@/src/zoo/animal-actor'
import { ZooAudio } from '@/src/zoo/audio'
import { ParkEffects } from '@/src/zoo/effects'
import { createExplorer, createGuideDrone } from '@/src/zoo/explorer'
import {
  NavGrid,
  createWalkability,
  type ParkPoint,
  type Walkability,
} from '@/src/zoo/nav'
import { SITES, WATER_LEVEL } from '@/src/zoo/park-data'
import { Player } from '@/src/zoo/player'
import {
  buildExhibitPlinths,
  buildParkScenery,
  buildStationMarker,
  type ParkScenery,
} from '@/src/zoo/scenery'
import { GuidedTour } from '@/src/zoo/tour'
import {
  PARK_HAZE,
  applyParkFog,
  buildParkTerrain,
  pathSamples,
  type ParkTerrain,
} from '@/src/zoo/terrain'
import { updateTweens } from '@/src/zoo/tween'
import { buildZooExhibits, type ZooExhibit } from '@/src/zoo/zoo-exhibits'
import type { Locale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { ModelCache } from '@/src/viewer/model-cache'

/** A model streams in this close and is dropped beyond the second ring. */
const ACTIVATE_DISTANCE = 155
const DEACTIVATE_DISTANCE = 275
const MAX_CONCURRENT_LOADS = 2
const DISCOVERY_DWELL_SECONDS = 0.5
const TOUR_NARRATION_LIMIT_MS = 13000
const MAX_TAP_TRAVEL_METRES = 620

const STORAGE_DISCOVERED = 'wonzoo:zoo:discovered:v1'
const STORAGE_SOUND = 'wonzoo:zoo:sound:v1'

/**
 * Scene facts exposed for development diagnostics and visual test harnesses.
 * Never read by production code.
 */
export interface ZooDiagnostics {
  readonly cameraPosition: readonly [number, number, number]
  readonly playerPosition: readonly [number, number, number]
  readonly playerHeading: number
  readonly drawCalls: number
  readonly triangles: number
  readonly resident: readonly {
    readonly id: string
    readonly height: number
    readonly size: readonly [number, number, number]
    readonly distance: number
    readonly position: readonly [number, number, number]
    readonly visible: boolean
  }[]
  readonly labelsVisible: boolean
  readonly discovered: readonly string[]
  readonly fps: number
  /** Waypoints left on the walker's route; zero when standing still. */
  readonly pathPoints: number
  readonly tourActive: boolean
  readonly tourAnimalId: string | null
  readonly speaking: boolean
  readonly pendingLoads: number
}

export interface ZooSnapshot {
  readonly discovered: readonly string[]
  readonly total: number
  readonly nearbyId: string | null
  readonly speaking: boolean
  readonly labelsVisible: boolean
  readonly overview: boolean
  readonly tourActive: boolean
  readonly tourAnimalId: string | null
  readonly residentCount: number
  readonly pendingCount: number
  readonly soundEnabled: boolean
}

export interface ZooGameCallbacks {
  readonly onProgress: (fraction: number, label: string) => void
  readonly onReady: () => void
  readonly onSnapshot: (snapshot: ZooSnapshot) => void
  readonly onToast: (text: string) => void
  readonly onCelebrate: () => void
  readonly onExhibitInfo: (exhibit: ZooExhibit | null) => void
  readonly onFatal: (message: string) => void
}

export interface ZooGameOptions {
  readonly container: HTMLElement
  readonly locale: Locale
  readonly callbacks: ZooGameCallbacks
}

function frame(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve()
      })
    })
  })
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function readStoredList(key: string): string[] {
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) {
      return []
    }
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === 'string')
      : []
  } catch {
    return []
  }
}

function readStoredBoolean(key: string, fallback: boolean): boolean {
  try {
    const raw = window.localStorage.getItem(key)
    return raw === null ? fallback : raw === 'true'
  } catch {
    return fallback
  }
}

function writeStored(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Private browsing: progress simply does not persist.
  }
}

/**
 * The park runtime: owns the renderer, the world, the visitor and the
 * streaming of exhibit models, and reports state to the React HUD.
 *
 * Everything here is browser-only and instantiated from a dynamic import, so
 * the static export still renders the loading shell without three.js.
 */
export class ZooGame {
  readonly exhibitList: readonly ZooExhibit[]

  private readonly options: ZooGameOptions
  private readonly messages: ReturnType<typeof messagesFor>
  private readonly actors = new Map<string, AnimalActor>()
  private readonly discovered = new Set<string>()

  private renderer: WebGLRenderer | null = null
  private scene: Scene | null = null
  private camera: PerspectiveCamera | null = null
  private terrain: ParkTerrain | null = null
  private scenery: ParkScenery | null = null
  private nav: NavGrid | null = null
  private walkable: Walkability | null = null
  private player: Player | null = null
  private effects: ParkEffects | null = null
  private audio: ZooAudio | null = null
  private tour: GuidedTour | null = null
  private explorer: ReturnType<typeof createExplorer> | null = null
  private drone: ReturnType<typeof createGuideDrone> | null = null
  private stationMarker: ReturnType<typeof buildStationMarker> | null = null
  private readonly stationPoints = new Map<string, ParkPoint>()

  private modelCache: ModelCache | null = null
  private abortController: AbortController | null = null
  private readonly loadQueue: string[] = []
  private readonly loading = new Set<string>()

  private labelsVisible = true
  private hoverId: string | null = null
  private nearbyId: string | null = null
  private readonly dwell = new Map<string, number>()
  private celebrated = false
  private lastSnapshotAt = 0
  private snapshotDirty = true
  private disposed = false

  private elapsed = 0
  private measuredFps = 0
  private lastFrameAt = 0
  private streamTimer = 0
  private hoverTimer = 0

  private readonly pointerDown = new Vector2()
  private readonly pointerCurrent = new Vector2()
  private pointerDownAt = 0
  private readonly ray = new Ray()
  private readonly probe = new Sphere()
  private readonly pickPoint = new Vector3()
  private readonly focusScratch = new Vector3()
  private readonly groundScratch = new Vector3()

  constructor(options: ZooGameOptions) {
    this.options = options
    this.messages = messagesFor(options.locale)
    this.exhibitList = buildZooExhibits(options.locale)
    for (const id of readStoredList(STORAGE_DISCOVERED)) {
      if (this.exhibitList.some((exhibit) => exhibit.id === id)) {
        this.discovered.add(id)
      }
    }
  }

  // ------------------------------------------------------------------- boot

  async start(): Promise<void> {
    const { container, callbacks } = this.options
    const isMobile = matchMedia('(pointer: coarse)').matches || window.innerWidth < 800

    try {
      const renderer = new WebGLRenderer({
        antialias: !isMobile,
        powerPreference: 'high-performance',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2))
      renderer.setSize(
        Math.max(container.clientWidth, 1),
        Math.max(container.clientHeight, 1),
        false,
      )
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = PCFSoftShadowMap
      renderer.toneMapping = ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.02
      renderer.domElement.className = 'zoo-canvas'
      renderer.domElement.setAttribute('aria-hidden', 'true')
      container.appendChild(renderer.domElement)
      this.renderer = renderer
    } catch {
      callbacks.onFatal(this.messages.zoo.errors.webgl)
      return
    }

    const scene = new Scene()
    // Without an explicit background the renderer clears to opaque black, so
    // any pixel the sky dome does not cover — most visibly in the whole-park
    // view, which flies 400 m out — would read as a hole in the world.
    scene.background = new Color(PARK_HAZE)
    applyParkFog(scene)
    const camera = new PerspectiveCamera(
      54,
      Math.max(container.clientWidth, 1) / Math.max(container.clientHeight, 1),
      0.3,
      // Has to reach the far side of the 700 m sky dome from the overview
      // pose, which sits ~425 m from the park centre.
      1800,
    )
    this.scene = scene
    this.camera = camera

    // Labels are canvas art, so wait for the web font before drawing the
    // first card rather than baking a fallback face into every texture.
    await this.waitForFonts()

    callbacks.onProgress(0.05, this.messages.zoo.loading.ground)
    await frame()
    const trail = pathSamples()
    const terrain = buildParkTerrain(scene, trail)
    this.terrain = terrain

    callbacks.onProgress(0.3, this.messages.zoo.loading.plants)
    await frame()
    // Scenery is placed before the navigation grid exists, because the grid
    // needs the obstacle field the scenery produces. Station snapping only
    // needs the terrain, so it runs against that instead.
    const scenery = buildParkScenery(scene, terrain.heightGrid, terrain.pathField, trail, {
      isMobile,
    })
    this.scenery = scenery
    buildExhibitPlinths(scene, terrain.heightGrid)
    this.stationMarker = buildStationMarker(scene)

    callbacks.onProgress(0.52, this.messages.zoo.loading.trails)
    await frame()
    const walkable = createWalkability(terrain.heightGrid, scenery.obstacles)
    this.walkable = walkable
    const nav = new NavGrid(walkable, 1.25)
    this.nav = nav
    for (const site of SITES) {
      const snapped = nav.nearest(site.station[0], site.station[1], 60)
      this.stationPoints.set(site.animalId, snapped ?? { x: site.station[0], z: site.station[1] })
    }

    callbacks.onProgress(0.64, this.messages.zoo.loading.exhibits)
    await frame()
    this.explorer = createExplorer()
    scene.add(this.explorer.group)
    this.drone = createGuideDrone()
    scene.add(this.drone.group)
    this.effects = new ParkEffects(scene)
    this.modelCache = new ModelCache({ maxEntries: 6, maxBytes: 48 * 1024 * 1024 })
    this.abortController = new AbortController()

    for (const exhibit of this.exhibitList) {
      const actor = new AnimalActor(exhibit, terrain.heightGrid)
      actor.setLabelsVisible(this.labelsVisible)
      actor.setDiscovered(this.discovered.has(exhibit.id))
      this.actors.set(exhibit.id, actor)
      scene.add(actor.group)
    }

    const player = new Player({
      camera,
      dom: container,
      heightGrid: terrain.heightGrid,
      nav,
      walkable,
      explorer: this.explorer,
      isMobile,
      onStep: () => {
        this.audio?.step()
      },
      onBlocked: () => {
        this.audio?.blocked()
        this.toast(this.messages.zoo.toasts.blocked)
      },
    })
    this.player = player

    this.audio = new ZooAudio({
      onSpeakingChange: () => {
        this.snapshotDirty = true
      },
      onNarrationError: () => {
        this.toast(this.messages.zoo.toasts.narrationFailed)
      },
    })
    this.audio.setEnabled(readStoredBoolean(STORAGE_SOUND, true))

    this.tour = new GuidedTour({
      player,
      actors: this.actors,
      stations: this.stationPoints,
      drone: this.drone,
      visit: (actor, fromTour) => this.visit(actor, fromTour),
      announce: (message) => {
        this.toast(message)
      },
      onStateChange: () => {
        this.snapshotDirty = true
      },
    })

    callbacks.onProgress(0.78, this.messages.zoo.loading.friends)
    await frame()
    await this.preloadNearest(player.position, 3)

    this.bindEvents(container)
    this.exposeDiagnostics()
    callbacks.onProgress(1, this.messages.zoo.loading.ready)
    this.lastFrameAt = performance.now()
    this.renderer.setAnimationLoop(this.tick)
    callbacks.onReady()
    this.snapshotDirty = true
    this.emitSnapshot()
  }

  /**
   * Review harness. A headless visual test cannot see the canvas, so the park
   * exposes the facts a reviewer would otherwise read off the screen: the
   * rendered scene's shape, every exhibit's life size, and whether each
   * authored viewpoint is reachable. Compiled out of production builds, in the
   * same spirit as the museum's own `__museumReviewSetAnimationTime` hook.
   */
  private exposeDiagnostics(): void {
    if (process.env.NODE_ENV === 'production') {
      return
    }
    const harness = {
      diagnostics: () => this.diagnostics(),
      loadAll: () => this.loadEveryExhibit(),
      selfTest: () => this.selfTest(),
    }
    ;(
      window as unknown as { __zooHarness?: typeof harness }
    ).__zooHarness = harness
  }

  private async loadEveryExhibit(): Promise<number> {
    for (const exhibit of this.exhibitList) {
      const id = exhibit.id
      if (!this.actors.get(id)?.isReady && !this.loadQueue.includes(id)) {
        this.loadQueue.push(id)
      }
    }
    await this.pumpQueue(true)
    let guard = 0
    while ((this.loadQueue.length > 0 || this.loading.size > 0) && guard < 200) {
      guard += 1
      await wait(150)
    }
    return [...this.actors.values()].filter((actor) => actor.isReady).length
  }

  /**
   * Walks every exhibit's viewpoint and reports what a reviewer needs: is the
   * viewpoint on walkable ground, does fast travel land there, how big is the
   * animal, and how far back does the camera sit.
   */
  async selfTest(): Promise<{
    readonly loaded: number
    readonly rows: readonly {
      readonly id: string
      readonly mode: string
      readonly station: readonly [number, number]
      readonly stationWalkable: boolean
      readonly landedAt: readonly [number, number]
      readonly landedOnWalkable: boolean
      readonly largestMetres: number
      readonly cameraDistance: number
      readonly cameraToExhibit: number
    }[]
  }> {
    const loaded = await this.loadEveryExhibit()
    const walkable = this.walkable
    const rows = []
    for (const exhibit of this.exhibitList) {
      const actor = this.actors.get(exhibit.id)
      const station = this.stationPoints.get(exhibit.id)
      if (!actor || !station || !walkable || !this.player) {
        continue
      }
      this.travelTo(exhibit.id)
      const player = this.player
      const playerGround = this.terrain?.heightGrid.heightAt(
        player.position.x,
        player.position.z,
      )
      const framing = actor.framingFor(player.position.x, player.position.z)
      const cameraToExhibit = Math.hypot(
        player.position.x - exhibit.site.x,
        player.position.z - exhibit.site.z,
      )
      rows.push({
        id: exhibit.id,
        mode: exhibit.site.mode,
        station: [station.x, station.z] as const,
        stationWalkable: walkable(station.x, station.z, 0),
        landedAt: [player.position.x, player.position.z] as const,
        landedOnWalkable: walkable(player.position.x, player.position.z, 0.5),
        largestMetres: Math.max(
          actor.boundsSize[0],
          actor.boundsSize[2],
          actor.boundsHeight,
        ),
        cameraDistance: framing.distance,
        cameraToExhibit,
      })
      void playerGround
    }
    return { loaded, rows }
  }

  diagnostics(): ZooDiagnostics {
    const info = this.renderer?.info.render
    const player = this.player
    const camera = this.camera
    return {
      cameraPosition: camera
        ? [camera.position.x, camera.position.y, camera.position.z]
        : [0, 0, 0],
      playerPosition: player
        ? [player.position.x, player.position.y, player.position.z]
        : [0, 0, 0],
      playerHeading: player?.heading ?? 0,
      drawCalls: info?.calls ?? 0,
      triangles: info?.triangles ?? 0,
      resident: [...this.actors.values()]
        .filter((actor) => actor.isReady)
        .map((actor) => ({
          id: actor.exhibit.id,
          height: actor.boundsHeight,
          size: actor.boundsSize,
          distance: player
            ? actor.distanceTo(player.position.x, player.position.z)
            : 0,
          position: this.actorPosition(actor),
          visible: actor.group.visible,
        })),
      labelsVisible: this.labelsVisible,
      discovered: [...this.discovered],
      fps: this.measuredFps,
      pathPoints: player?.path?.length ?? 0,
      tourActive: this.tour?.active ?? false,
      tourAnimalId: this.tour?.currentAnimalId ?? null,
      speaking: this.audio?.isSpeaking ?? false,
      pendingLoads: this.loading.size + this.loadQueue.length,
    }
  }

  private actorPosition(actor: AnimalActor): [number, number, number] {
    const position = actor.group.position
    return [position.x, position.y, position.z]
  }

  private async waitForFonts(): Promise<void> {
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
    if (!fonts) {
      return
    }
    try {
      await Promise.race([
        fonts.ready,
        new Promise((resolve) => {
          setTimeout(resolve, 1200)
        }),
      ])
    } catch {
      // A font failure must never block the park.
    }
  }

  /** Loads the closest exhibits before the gate opens, so the park is not empty. */
  private async preloadNearest(origin: Vector3, count: number): Promise<void> {
    const ordered = [...this.actors.values()]
      .map((actor) => ({ actor, distance: actor.distanceTo(origin.x, origin.z) }))
      .sort((left, right) => left.distance - right.distance)
      .slice(0, count)
    let index = 0
    for (const entry of ordered) {
      if (this.disposed) {
        return
      }
      index += 1
      this.options.callbacks.onProgress(
        0.8 + (index / (count + 1)) * 0.18,
        `${this.messages.zoo.loading.friends} · ${entry.actor.exhibit.name}`,
      )
      this.loadQueue.push(entry.actor.id)
    }
    // Drain the queue so the visitor does not walk into an empty park.
    await this.pumpQueue(true)
    let guard = 0
    while ((this.loadQueue.length > 0 || this.loading.size > 0) && guard < 80) {
      guard += 1
      await wait(100)
    }
  }

  // ------------------------------------------------------------------ events

  private bindEvents(container: HTMLElement): void {
    container.addEventListener('pointerdown', this.handlePointerDown)
    container.addEventListener('pointerup', this.handlePointerUp)
    container.addEventListener('pointermove', this.handlePointerMove)
    container.addEventListener('pointerleave', this.handlePointerLeave)
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('resize', this.handleResize)
    this.resizeObserver = new ResizeObserver(this.handleResize)
    this.resizeObserver.observe(container)
  }

  private resizeObserver: ResizeObserver | null = null

  private handlePointerDown = (event: PointerEvent): void => {
    this.pointerDown.set(event.clientX, event.clientY)
    this.pointerCurrent.set(event.clientX, event.clientY)
    this.pointerDownAt = performance.now()
  }

  private handlePointerUp = (event: PointerEvent): void => {
    const travel = this.pointerDown.distanceTo(
      this.pointerCurrent.set(event.clientX, event.clientY),
    )
    const duration = performance.now() - this.pointerDownAt
    // A tap, not a camera drag: short, and barely moved.
    if (travel > 8 || duration > 600) {
      return
    }
    this.unlockAudio()
    this.handleTap(event.clientX, event.clientY)
  }

  private handlePointerMove = (event: PointerEvent): void => {
    this.pointerCurrent.set(event.clientX, event.clientY)
    const now = performance.now()
    if (now - this.hoverTimer < 90) {
      return
    }
    this.hoverTimer = now
    const exhibit = this.pickExhibit(event.clientX, event.clientY)
    const nextHover = exhibit?.id ?? null
    if (nextHover !== this.hoverId) {
      this.hoverId = nextHover
      this.options.container.style.cursor = nextHover ? 'pointer' : ''
    }
  }

  private handlePointerLeave = (): void => {
    this.hoverId = null
    this.options.container.style.cursor = ''
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const target = event.target
    if (target instanceof HTMLElement && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return
    }
    switch (event.code) {
      case 'KeyM':
        this.toggleOverview()
        break
      case 'KeyL':
        this.toggleLabels()
        break
      case 'KeyR':
        this.resetView()
        break
      case 'Space':
        event.preventDefault()
        this.greetNearby()
        break
      case 'Escape':
        this.stopNarration()
        if (this.tour?.active) {
          this.tour.stop()
        }
        break
      default:
        break
    }
  }

  private handleResize = (): void => {
    const container = this.options.container
    const width = Math.max(container.clientWidth, 1)
    const height = Math.max(container.clientHeight, 1)
    if (this.camera) {
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
    }
    this.renderer?.setSize(width, height, false)
  }

  private unlockAudio(): void {
    this.audio?.unlock()
  }

  // --------------------------------------------------------------- picking

  private rayFor(clientX: number, clientY: number): Ray {
    const container = this.options.container
    const camera = this.camera
    if (!camera) {
      return this.ray.set(new Vector3(), new Vector3(0, 0, 1))
    }
    const rect = container.getBoundingClientRect()
    const ndcX = ((clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1
    const ndcY = -((clientY - rect.top) / Math.max(rect.height, 1)) * 2 + 1
    const origin = camera.position
    const direction = new Vector3(ndcX, ndcY, 0.5)
      .unproject(camera)
      .sub(origin)
      .normalize()
    return this.ray.set(origin, direction)
  }

  /**
   * Analytic ray march against the height field. Cheaper and steadier than a
   * triangle raycast over a 68k-triangle terrain mesh, and it needs no
   * picking proxies in the scene.
   */
  private pickGroundDistance(ray: Ray): number | null {
    const grid = this.terrain?.heightGrid
    if (!grid) {
      return null
    }
    const origin = ray.origin
    if (origin.y <= grid.heightAt(origin.x, origin.z)) {
      return 0
    }
    let previous = 0
    const step = 2.5
    for (let distance = step; distance <= MAX_TAP_TRAVEL_METRES; distance += step) {
      const x = origin.x + ray.direction.x * distance
      const y = origin.y + ray.direction.y * distance
      const z = origin.z + ray.direction.z * distance
      if (y <= grid.heightAt(x, z)) {
        let low = previous
        let high = distance
        for (let iteration = 0; iteration < 16; iteration += 1) {
          const middle = (low + high) / 2
          const mx = origin.x + ray.direction.x * middle
          const my = origin.y + ray.direction.y * middle
          const mz = origin.z + ray.direction.z * middle
          if (my <= grid.heightAt(mx, mz)) {
            high = middle
          } else {
            low = middle
          }
        }
        return high
      }
      previous = distance
    }
    return null
  }

  private pickExhibit(clientX: number, clientY: number): ZooExhibit | null {
    const ray = this.rayFor(clientX, clientY)
    let best: ZooExhibit | null = null
    let bestDistance = Number.POSITIVE_INFINITY
    const groundDistance = this.pickGroundDistance(ray)
    for (const exhibit of this.exhibitList) {
      const actor = this.actors.get(exhibit.id)
      actor?.focusPoint(this.pickPoint)
      const radius = actor
        ? Math.max(actor.hitRadius(), 2)
        : Math.max(exhibit.site.radius, 2)
      this.probe.center.copy(this.pickPoint)
      this.probe.radius = radius
      if (!ray.intersectSphere(this.probe, this.groundScratch)) {
        continue
      }
      const distance = ray.origin.distanceTo(this.groundScratch)
      if (distance >= bestDistance) {
        continue
      }
      // Reject exhibits hidden behind the escarpment: the ground in front of
      // them is closer to the camera than they are.
      if (groundDistance !== null && groundDistance < distance - 3) {
        continue
      }
      bestDistance = distance
      best = exhibit
    }
    return best
  }

  private handleTap(clientX: number, clientY: number): void {
    const exhibit = this.pickExhibit(clientX, clientY)
    if (exhibit) {
      void this.visit(this.actors.get(exhibit.id), false)
      return
    }
    const player = this.player
    if (!player) {
      return
    }
    const ray = this.rayFor(clientX, clientY)
    const distance = this.pickGroundDistance(ray)
    if (distance === null) {
      return
    }
    const x = ray.origin.x + ray.direction.x * distance
    const z = ray.origin.z + ray.direction.z * distance
    const target = this.nav?.nearest(x, z, 60)
    if (!target) {
      return
    }
    if (this.tour?.active) {
      this.tour.stop()
    }
    const started = player.goTo(target.x, target.z)
    if (!started) {
      this.audio?.blocked()
    }
  }

  // -------------------------------------------------------------- discovery

  private async visit(actor: AnimalActor | undefined, fromTour: boolean): Promise<void> {
    if (!actor || this.disposed) {
      return
    }
    const exhibit = actor.exhibit
    const site = exhibit.site
    const ground = this.terrain?.heightGrid.heightAt(site.x, site.z) ?? 0
    actor.react()
    this.audio?.greet()

    const focus = actor.focusPoint(this.focusScratch)
    this.effects?.sparkle(
      site.x,
      focus.y,
      site.z,
      exhibit.accent,
      30,
      Math.min(4, actor.hitRadius() * 0.5 + 1),
    )
    this.effects?.greeting(
      site.x,
      focus.y + actor.boundsHeight * 0.55 + 3.2,
      site.z,
      exhibit.name,
      exhibit.accent,
    )
    if (site.mode === 'water') {
      this.effects?.splash(site.x, site.z, 4)
    } else if (site.mode === 'land') {
      this.effects?.dust(site.x, ground, site.z)
    }

    const isNew = this.markDiscovered(exhibit.id)
    if (isNew && !fromTour) {
      this.audio?.discover()
      this.effects?.hearts(site.x, ground + actor.boundsHeight * 0.8, site.z)
    }

    const narration = exhibit.narrationUrl
    if (!narration || !this.audio) {
      return
    }
    const finished = this.audio.whenFinished()
    await this.audio.playNarration(narration)
    if (fromTour) {
      await Promise.race([finished, wait(TOUR_NARRATION_LIMIT_MS)])
    }
  }

  private markDiscovered(animalId: string): boolean {
    if (this.discovered.has(animalId)) {
      return false
    }
    this.discovered.add(animalId)
    this.actors.get(animalId)?.setDiscovered(true)
    writeStored(STORAGE_DISCOVERED, JSON.stringify([...this.discovered]))
    this.snapshotDirty = true
    const exhibit = this.exhibitList.find((entry) => entry.id === animalId)
    if (exhibit) {
      this.toast(
        this.messages.zoo.toasts.discovered(
          exhibit.name,
          this.discovered.size,
          this.exhibitList.length,
        ),
      )
    }
    if (this.discovered.size >= this.exhibitList.length && !this.celebrated) {
      this.celebrated = true
      const player = this.player
      this.effects?.confetti(
        player?.position.x ?? 0,
        (player?.position.y ?? 0) + 3,
        player?.position.z ?? 0,
      )
      this.audio?.celebrate()
      this.options.callbacks.onCelebrate()
    }
    return true
  }

  // --------------------------------------------------------------- streaming

  private updateStreaming(force = false): void {
    const player = this.player
    if (!player) {
      return
    }
    const origin = player.position
    const ordered = [...this.actors.values()]
      .map((actor) => ({
        actor,
        distance: actor.distanceTo(origin.x, origin.z),
      }))
      .sort((left, right) => left.distance - right.distance)

    for (const entry of ordered) {
      if (entry.distance > DEACTIVATE_DISTANCE && entry.actor.isReady) {
        entry.actor.unload()
        this.snapshotDirty = true
      }
    }
    for (const entry of ordered) {
      if (!force && entry.distance > ACTIVATE_DISTANCE) {
        break
      }
      const id = entry.actor.exhibit.id
      if (
        entry.actor.isReady ||
        entry.actor.isLoading ||
        this.loadQueue.includes(id)
      ) {
        continue
      }
      this.loadQueue.push(id)
    }
    void this.pumpQueue(false)
  }

  private async pumpQueue(awaitCompletion: boolean): Promise<void> {
    const pending: Promise<unknown>[] = []
    while (
      this.loadQueue.length > 0 &&
      this.loading.size < MAX_CONCURRENT_LOADS
    ) {
      const id = this.loadQueue.shift()
      if (!id) {
        break
      }
      const actor = this.actors.get(id)
      const cache = this.modelCache
      if (!actor || !cache) {
        continue
      }
      this.loading.add(id)
      this.snapshotDirty = true
      const task = actor
        .load(cache, this.abortController?.signal)
        .finally(() => {
          this.loading.delete(id)
          this.snapshotDirty = true
          void this.pumpQueue(false)
        })
      pending.push(task)
    }
    if (awaitCompletion && pending.length > 0) {
      await Promise.all(pending)
    }
  }

  // ------------------------------------------------------------------- loop

  private tick = (): void => {
    if (this.disposed) {
      return
    }
    const now = performance.now()
    const delta = this.lastFrameAt === 0 ? 0.016 : (now - this.lastFrameAt) / 1000
    this.lastFrameAt = now
    const dt = Math.min(0.05, Math.max(delta, 0.0001))
    this.elapsed += dt
    if (delta > 0) {
      this.measuredFps = this.measuredFps * 0.9 + (1 / delta) * 0.1
    }

    updateTweens(dt)

    const player = this.player
    const scene = this.scene
    const camera = this.camera
    const terrain = this.terrain
    if (!player || !scene || !camera || !terrain) {
      return
    }

    player.update(dt, this.elapsed)

    this.streamTimer += dt
    if (this.streamTimer > 0.4) {
      this.streamTimer = 0
      this.updateStreaming()
    }

    this.updateNearby(dt)

    const context = {
      camera,
      playerX: player.position.x,
      playerZ: player.position.z,
      elapsed: this.elapsed,
      labelsVisible: this.labelsVisible,
      stationNear: false,
    }
    for (const actor of this.actors.values()) {
      const isNearby = actor.exhibit.id === this.nearbyId
      actor.setHover(actor.exhibit.id === this.hoverId)
      actor.update(dt, { ...context, stationNear: isNearby })
    }

    this.scenery?.update(this.elapsed, player.position)
    this.effects?.update(dt, this.elapsed)
    this.tour?.update()
    terrain.update(this.elapsed)

    this.updateStationMarker()
    this.renderer?.render(scene, camera)

    if (this.snapshotDirty && now - this.lastSnapshotAt > 180) {
      this.emitSnapshot()
    }
  }

  private updateNearby(dt: number): void {
    const player = this.player
    if (!player) {
      return
    }
    let nearest: AnimalActor | null = null
    let nearestDistance = Number.POSITIVE_INFINITY
    for (const actor of this.actors.values()) {
      const distance = actor.distanceTo(player.position.x, player.position.z)
      const range = Math.max(24, actor.hitRadius() + 10)
      if (distance > range) {
        this.dwell.set(actor.exhibit.id, 0)
        continue
      }
      const dwell = (this.dwell.get(actor.exhibit.id) ?? 0) + dt
      this.dwell.set(actor.exhibit.id, dwell)
      if (!this.discovered.has(actor.exhibit.id) && dwell > DISCOVERY_DWELL_SECONDS) {
        void this.visit(actor, false)
        this.dwell.set(actor.exhibit.id, -999)
      }
      if (distance < nearestDistance) {
        nearestDistance = distance
        nearest = actor
      }
    }
    const nextNearby = nearest?.exhibit.id ?? null
    if (nextNearby !== this.nearbyId) {
      this.nearbyId = nextNearby
      this.snapshotDirty = true
      this.options.callbacks.onExhibitInfo(
        nearest ? nearest.exhibit : null,
      )
    }
  }

  private updateStationMarker(): void {
    const marker = this.stationMarker
    const player = this.player
    if (!marker || !player) {
      return
    }
    const actor = this.nearbyId ? this.actors.get(this.nearbyId) : null
    if (!actor) {
      marker.visible = false
      return
    }
    const site = actor.exhibit.site
    const ground = this.terrain?.heightGrid.heightAt(site.x, site.z) ?? 0
    marker.visible = !this.discovered.has(actor.exhibit.id)
    if (!marker.visible) {
      return
    }
    const radius = Math.max(actor.hitRadius() + 2, 2.6)
    marker.scale.setScalar(radius)
    marker.position.set(
      site.x,
      site.mode === 'water' ? WATER_LEVEL + 0.1 : ground + 0.14,
      site.z,
    )
    const material = marker.material
    if (material instanceof MeshBasicMaterial) {
      material.opacity = 0.4 + Math.sin(this.elapsed * 2.2) * 0.12
    }
  }

  private emitSnapshot(): void {
    this.lastSnapshotAt = performance.now()
    this.snapshotDirty = false
    const payload: ZooSnapshot = {
      discovered: [...this.discovered],
      total: this.exhibitList.length,
      nearbyId: this.nearbyId,
      speaking: this.audio?.isSpeaking ?? false,
      labelsVisible: this.labelsVisible,
      overview: this.player?.isOverview ?? false,
      tourActive: this.tour?.active ?? false,
      tourAnimalId: this.tour?.currentAnimalId ?? null,
      residentCount: [...this.actors.values()].filter((actor) => actor.isReady).length,
      pendingCount: this.loading.size + this.loadQueue.length,
      soundEnabled: this.audio?.isEnabled ?? true,
    }
    this.options.callbacks.onSnapshot(payload)
  }

  private toast(text: string): void {
    this.options.callbacks.onToast(text)
  }

  // -------------------------------------------------------------- public API

  /**
   * Called from the gate button. The first user gesture is the only reliable
   * moment to create an AudioContext, so the park waits for it.
   */
  begin(): void {
    this.unlockAudio()
    this.snapshotDirty = true
    this.emitSnapshot()
  }

  /** Virtual joystick feed in the range [-1, 1], from the touch HUD. */
  setJoystick(x: number, y: number): void {
    this.player?.setJoystick(x, y)
  }

  getExhibit(id: string): ZooExhibit | undefined {
    return this.exhibitList.find((exhibit) => exhibit.id === id)
  }

  getStationPoint(id: string): ParkPoint | undefined {
    return this.stationPoints.get(id)
  }

  /** Greets whatever exhibit the visitor is standing in front of. */
  greetNearby(): void {
    const id = this.nearbyId ?? this.hoverId
    if (!id) {
      this.toast(this.messages.zoo.toasts.noExhibitNearby)
      return
    }
    this.unlockAudio()
    void this.visit(this.actors.get(id), false)
  }

  /** Replays the current exhibit's approved narration. */
  speakNearby(): void {
    const id = this.nearbyId ?? this.hoverId
    const exhibit = id ? this.getExhibit(id) : undefined
    if (!exhibit) {
      this.toast(this.messages.zoo.toasts.noExhibitNearby)
      return
    }
    this.unlockAudio()
    if (!exhibit.narrationUrl || !this.audio) {
      this.toast(this.messages.zoo.toasts.narrationMissing)
      return
    }
    void this.audio.playNarration(exhibit.narrationUrl)
  }

  stopNarration(): void {
    this.audio?.stopNarration()
  }

  setSoundEnabled(on: boolean): void {
    this.unlockAudio()
    this.audio?.setEnabled(on)
    writeStored(STORAGE_SOUND, String(on))
    this.toast(on ? this.messages.zoo.toasts.soundOn : this.messages.zoo.toasts.soundOff)
  }

  get isSoundEnabled(): boolean {
    return this.audio?.isEnabled ?? true
  }

  toggleLabels(): void {
    this.labelsVisible = !this.labelsVisible
    for (const actor of this.actors.values()) {
      actor.setLabelsVisible(this.labelsVisible)
    }
    this.toast(
      this.labelsVisible
        ? this.messages.zoo.toasts.labelsOn
        : this.messages.zoo.toasts.labelsOff,
    )
    this.snapshotDirty = true
  }

  toggleOverview(): void {
    const player = this.player
    if (!player) {
      return
    }
    const next = !player.isOverview
    player.setOverview(next)
    if (next) {
      this.tour?.stop()
    }
    this.toast(next ? this.messages.zoo.toasts.overviewOn : this.messages.zoo.toasts.overviewOff)
    this.snapshotDirty = true
  }

  toggleTour(): void {
    this.unlockAudio()
    this.tour?.toggle()
    this.snapshotDirty = true
  }

  resetView(): void {
    this.player?.resetView()
  }

  /** Fast-travels to an exhibit's viewpoint, from the collection panel. */
  travelTo(animalId: string): void {
    const player = this.player
    const actor = this.actors.get(animalId)
    const station = this.stationPoints.get(animalId)
    if (!player || !actor || !station) {
      return
    }
    this.tour?.stop()
    player.setOverview(false)
    player.stop()
    player.position.x = station.x
    player.position.z = station.z
    player.heading = Math.atan2(
      actor.exhibit.site.x - station.x,
      actor.exhibit.site.z - station.z,
    )
    const framing = actor.framingFor(station.x, station.z)
    player.setCameraForViewing(
      actor.exhibit.site.x,
      actor.exhibit.site.z,
      framing.distance,
      framing.pitch,
    )
    this.toast(this.messages.zoo.toasts.travel(actor.exhibit.name))
    this.snapshotDirty = true
  }

  frameExhibit(animalId: string): void {
    const player = this.player
    const actor = this.actors.get(animalId)
    if (!player || !actor) {
      return
    }
    const station = this.stationPoints.get(animalId)
    if (station) {
      const heading = Math.atan2(
        actor.exhibit.site.x - station.x,
        actor.exhibit.site.z - station.z,
      )
      player.heading = heading
    }
    const distance = Math.max(
      14,
      Math.min(46, actor.boundsHeight * 2.2 + actor.hitRadius() * 0.9 + 6),
    )
    player.setCameraForViewing(
      actor.exhibit.site.x,
      actor.exhibit.site.z,
      distance,
      actor.exhibit.site.mode === 'perch' ? 0.12 : 0.28,
    )
  }

  resetProgress(): void {
    this.discovered.clear()
    writeStored(STORAGE_DISCOVERED, JSON.stringify([]))
    for (const actor of this.actors.values()) {
      actor.setDiscovered(false)
    }
    this.celebrated = false
    this.snapshotDirty = true
    this.emitSnapshot()
    this.toast(this.messages.zoo.toasts.progressReset)
  }

  // ---------------------------------------------------------------- teardown

  dispose(): void {
    if (this.disposed) {
      return
    }
    this.disposed = true
    this.abortController?.abort()
    this.renderer?.setAnimationLoop(null)
    this.resizeObserver?.disconnect()
    this.resizeObserver = null

    const container = this.options.container
    container.removeEventListener('pointerdown', this.handlePointerDown)
    container.removeEventListener('pointerup', this.handlePointerUp)
    container.removeEventListener('pointermove', this.handlePointerMove)
    container.removeEventListener('pointerleave', this.handlePointerLeave)
    window.removeEventListener('keydown', this.handleKeyDown)
    window.removeEventListener('resize', this.handleResize)

    this.tour?.stop()
    this.player?.dispose()
    for (const actor of this.actors.values()) {
      actor.dispose()
    }
    this.actors.clear()
    this.effects?.dispose()
    this.audio?.dispose()
    this.explorer?.dispose()
    this.drone?.dispose()
    this.scenery?.dispose()
    this.terrain?.dispose()
    this.stationMarker?.geometry.dispose()
    const markerMaterial = this.stationMarker?.material
    if (markerMaterial instanceof MeshBasicMaterial) {
      markerMaterial.dispose()
    }
    const scene = this.scene
    if (scene) {
      scene.clear()
    }
    this.renderer?.dispose()
    if (this.renderer?.domElement.parentElement === container) {
      container.removeChild(this.renderer.domElement)
    }
    this.renderer = null
    this.scene = null
    this.camera = null
  }
}
