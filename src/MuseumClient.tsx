'use client'

import { useSyncExternalStore } from 'react'

import { App } from './App'
import type { InitialAppState } from './app-bootstrap'

interface MuseumClientProps {
  readonly initialState: InitialAppState
  // E2E fixture runs force a pure client render (the old entry script used
  // `root.replaceChildren()` for the same purpose), so SSR markup is skipped.
  readonly csrOnly?: boolean
}

export function MuseumClient({
  initialState,
  csrOnly = false,
}: MuseumClientProps) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

  if (csrOnly && !mounted) {
    return null
  }
  return <App initialState={initialState} />
}
