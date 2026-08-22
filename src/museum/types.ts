import type { ModelLoadProgress } from '../viewer/ViewerController'

export type ModelDataNotice =
  | { readonly kind: 'first-entry' }
  | {
      readonly animalId: string
      readonly kind: 'large-model'
      readonly modelBytes: number
    }

export type ViewerFailureKind = 'context-lost' | 'webgl-unavailable'

export interface ModelLoadingProgress {
  readonly animalId: string
  readonly loadedBytes: number
  readonly percent: number | null
  readonly phase: 'checking-cache' | 'downloading' | 'preparing'
  readonly requestToken: number
  readonly source: ModelLoadProgress['source'] | null
  readonly totalBytes: number
}
