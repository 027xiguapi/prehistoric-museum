import { ShieldCheck } from 'lucide-react'

import { BackButton } from '@/src/components/buttons/BackButton'
import type { Locale } from '@/src/i18n/locale'
import { messagesFor } from '@/src/i18n/messages'
import { privacyPolicyFor } from '@/src/i18n/privacy-policy'

/**
 * Public, static privacy policy page. It is rendered under the shared
 * [locale] layout so it is reachable at a public URL for App Store review,
 * and it reads its content from the locale passed down from the route.
 */
export function PrivacyPageView({ locale }: { readonly locale: Locale }) {
  const messages = messagesFor(locale)
  const privacy = privacyPolicyFor(locale)

  return (
    <main className="config-page info-page">
      <BackButton
        className="config-close"
        href={`/${locale}`}
        label={messages.collection.back}
      />

      <header className="config-hero">
        <div>
          <p className="config-hero__eyebrow">
            <ShieldCheck aria-hidden="true" size={16} strokeWidth={2.2} />
            {messages.museumName}
          </p>
          <h1>{privacy.title}</h1>
          <p>
            {privacy.lastUpdatedLabel} · {privacy.updatedDate}
          </p>
        </div>
      </header>

      <div className="info-body">
        {privacy.sections.map((section) => (
          <section className="config-section info-section" key={section.title}>
            <div className="config-section__head">
              <h2>{section.title}</h2>
            </div>
            <div className="info-section__text">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="config-section info-section">
          <div className="config-section__head">
            <h2>{privacy.contactLabel}</h2>
          </div>
          <div className="info-section__text">
            <p>
              <a href={`mailto:${privacy.contactEmail}`}>{privacy.contactEmail}</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
