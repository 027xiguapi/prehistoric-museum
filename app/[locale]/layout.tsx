import type { ReactNode } from 'react'

import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'

import '@fontsource-variable/fredoka'
import '@fontsource-variable/noto-sans-sc'
import '@fontsource-variable/nunito'
import '@fontsource/zcool-kuaile'
import '@/src/styles.css'
import { I18nProvider } from '@/src/i18n/I18nProvider'
import { isLocale } from '@/src/i18n/locale'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#d8e7c2',
}

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '64x64' }],
    apple: [{ url: '/WonZoo.png', type: 'image/png' }],
  },
}

export function generateStaticParams() {
  return [{ locale: 'zh-CN' }, { locale: 'en' }]
}

export const dynamicParams = false

// ES5-only boot error trap for the Capacitor static export. When a device
// WebView is too old to parse the modern JS chunks, the app otherwise fails
// silently as a white screen; this capture-phase listener surfaces script
// load failures, runtime errors and unhandled rejections as a visible
// overlay so the failing device can report what actually broke. It stays
// silent (no DOM) unless an error occurs. Web deployment is excluded.
const BOOT_ERROR_TRAP = `(function () {
  var shown = null
  function show(line) {
    if (!shown) {
      shown = document.createElement('pre')
      shown.id = 'boot-error'
      shown.style.cssText = 'position:fixed;left:0;right:0;top:0;z-index:2147483647;background:#fff3f3;color:#a40000;padding:8px 10px;font:12px/1.4 monospace;white-space:pre-wrap;word-break:break-all;max-height:45vh;overflow:auto;margin:0;border-bottom:2px solid #a40000;'
      ;(document.body || document.documentElement).appendChild(shown)
    }
    shown.textContent += line + '\n'
  }
  window.addEventListener('error', function (event) {
    var target = event && event.target
    if (event && event.message) {
      show('[js] ' + event.message + ' @ ' + (event.filename || '?') + ':' + (event.lineno || 0))
    } else if (target && (target.src || target.href)) {
      show('[load] ' + (target.src || target.href))
    }
  }, true)
  window.addEventListener('unhandledrejection', function (event) {
    var reason = event && event.reason
    show('[promise] ' + ((reason && (reason.stack || reason.message)) || reason))
  })
})()`

interface LocaleLayoutParams {
  readonly children: ReactNode
  readonly params: Promise<{ readonly locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutParams) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        {process.env.NEXT_STATIC_EXPORT === '1' && (
          <script dangerouslySetInnerHTML={{ __html: BOOT_ERROR_TRAP }} />
        )}
        <I18nProvider initialState={{ locale, preference: locale }}>
          {children}
        </I18nProvider>
        {/* Raw <script> instead of next/script: AdSense logs a console
            warning about the data-nscript attribute the framework adds.
            Only the web deployment shows ads — the Capacitor app is a pure
            static export (`NEXT_STATIC_EXPORT=1`), so skip it there. */}
        {process.env.NEXT_STATIC_EXPORT !== '1' && (
          <script
            async
            crossOrigin="anonymous"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5878114055897626"
          />
        )}
      </body>
    </html>
  )
}
