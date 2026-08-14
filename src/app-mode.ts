// Runtime mode accessor.
//
// `NEXT_PUBLIC_MUSEUM_MODE` is inlined by Next.js at build time, so mode
// branches keep their dead-code elimination behaviour. When it is not set the
// mode falls back to `NODE_ENV` (`development` under `next dev`, `production`
// otherwise).

export type MuseumMode =
  | 'development'
  | 'production'
  | 'test'
  | 'review'
  | 'e2e'
  | 'model-still'

const explicitMode = process.env.NEXT_PUBLIC_MUSEUM_MODE

export const museumMode: MuseumMode =
  explicitMode === 'review' ||
  explicitMode === 'e2e' ||
  explicitMode === 'model-still' ||
  explicitMode === 'test'
    ? explicitMode
    : process.env.NODE_ENV === 'development'
      ? 'development'
      : process.env.NODE_ENV === 'test'
        ? 'test'
        : 'production'
