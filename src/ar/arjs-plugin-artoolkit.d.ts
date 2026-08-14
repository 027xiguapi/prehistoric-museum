// Ambient declaration for `@ar-js-org/arjs-plugin-artoolkit`.
//
// The package ships TypeScript definitions at `types/index.d.ts`, but its
// `package.json` "exports" field omits a "types" condition, so the bundler
// module resolver used by this project cannot pick them up (TS7016). We
// re-declare the surface we actually use here. The runtime still resolves to
// the package's real ESM build; this file only provides compile-time types.
declare module '@ar-js-org/arjs-plugin-artoolkit' {
  export interface ArtoolkitPluginOptions {
    worker?: boolean
    lostThreshold?: number
    frameDurationMs?: number
    sweepIntervalMs?: number
    artoolkitModuleUrl?: string
    cameraParametersUrl?: string
    wasmBaseUrl?: string
    minConfidence?: number
  }

  export class ArtoolkitPlugin {
    constructor(options?: ArtoolkitPluginOptions)
    readonly version: string
    readonly workerReady: boolean
    init(core: { eventBus: unknown }): Promise<ArtoolkitPlugin>
    enable(): Promise<ArtoolkitPlugin>
    disable(): Promise<ArtoolkitPlugin>
    dispose(): Promise<ArtoolkitPlugin>
    loadMarker(
      patternUrl: string,
      size?: number,
    ): Promise<{ markerId: number; size: number }>
    getMarkerState(markerId: number): unknown
  }

  export const ARTOOLKIT_PLUGIN_VERSION: string
  export function convertModelViewToThreeMatrix(
    modelViewArray: ArrayLike<number>,
  ): Float32Array
}
