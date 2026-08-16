import { LocaleNotFoundPage } from '../shared/LocaleNotFoundPage'

// Handles notFound() thrown inside the locale subtree (e.g. invalid locale
// segment, unknown animal detail).
export default function LocaleNotFound() {
  return <LocaleNotFoundPage />
}
