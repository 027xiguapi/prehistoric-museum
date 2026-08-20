import type { ReactNode } from 'react'

import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'

import '@fontsource-variable/fredoka'
import '@fontsource-variable/noto-sans-sc'
import '@fontsource-variable/nunito'
import '@fontsource/zcool-kuaile'
import '../../src/styles.css'
import { isLocale } from '../../src/i18n/locale'

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
        {children}
        {/* Raw <script> instead of next/script: AdSense logs a console
            warning about the data-nscript attribute the framework adds. */}
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5878114055897626"
        />
      </body>
    </html>
  )
}
