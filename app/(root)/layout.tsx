import type { ReactNode } from 'react'

import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import '@fontsource-variable/fredoka'
import '@fontsource-variable/noto-sans-sc'
import '@fontsource-variable/nunito'
import '@fontsource/zcool-kuaile'
import '../../src/styles.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#d8e7c2',
}

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
}

// The locale-neutral entry always boots as the Chinese museum (the former
// static index.html behaved the same way); client navigation may normalize
// the URL to `/{locale}/` afterwards.
export default function MuseumEntryLayout({
  children,
}: {
  readonly children: ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5878114055897626"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
