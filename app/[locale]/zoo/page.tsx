import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ZooGameView } from '@/src/components/ZooGameView'
import { isLocale, supportedLocales } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'

export const dynamicParams = false

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }))
}

interface ZooPageProps {
  readonly params: Promise<{ readonly locale: string }>
}

export async function generateMetadata({
  params,
}: ZooPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) {
    return {}
  }
  const messages = messagesFor(locale)
  return {
    title: `${messages.zoo.title} | ${messages.museumName}`,
    description: messages.zoo.subtitle,
  }
}

/**
 * The walkable 3D park. The WebGL runtime is imported dynamically inside
 * `ZooGameView`, so this route still prerenders to a static shell and the
 * Capacitor / static export build keeps working.
 */
export default async function ZooPage({ params }: ZooPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }
  return <ZooGameView locale={locale} />
}
