import { redirect } from 'next/navigation'

// Root entry for static builds (Capacitor). The web deployment resolves the
// bare `/` path through the next-intl middleware instead, so this page only
// matters when `output: 'export'` produces `out/index.html` as the app entry.
export default function RootPage() {
  redirect('/zh-CN/')
}
