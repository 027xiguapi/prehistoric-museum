import { LocaleNotFoundContent } from '@/src/components/LocaleNotFoundPage'

// 404 inside the locale group: the [locale] layout already renders
// <html>/<body>, so this boundary only contributes the localized content.
export default function LocaleNotFound() {
  return <LocaleNotFoundContent />
}
