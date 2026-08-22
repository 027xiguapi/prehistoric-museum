import { LocaleNotFoundPage } from '@/src/components/LocaleNotFoundPage'

// Root boundary for URLs that match no route at all (previously these fell
// through to Next.js' default English 404).
export default function RootNotFound() {
  return <LocaleNotFoundPage />
}
