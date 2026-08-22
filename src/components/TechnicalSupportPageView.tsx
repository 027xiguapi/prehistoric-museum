import { LifeBuoy } from 'lucide-react'

import { BackButton } from './buttons/BackButton'
import type { Locale } from '../i18n/locale'
import { messagesFor } from '../i18n/messages'
import { technicalSupportFor } from '../i18n/technical-support'

/**
 * Public, static technical-support page. Reachable at a public URL for App
 * Store review, with an FAQ, device requirements and a contact route in the
 * route's locale.
 */
export function TechnicalSupportPageView({ locale }: { readonly locale: Locale }) {
  const messages = messagesFor(locale)
  const support = technicalSupportFor(locale)

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
            <LifeBuoy aria-hidden="true" size={16} strokeWidth={2.2} />
            {messages.museumName}
          </p>
          <h1>{support.title}</h1>
        </div>
      </header>

      <div className="info-body">
        {support.sections.map((section) => (
          <section className="config-section info-section" key={section.title}>
            <div className="config-section__head">
              <h2>{section.title}</h2>
            </div>
            {section.questions && section.questions.length > 0 ? (
              <div className="info-faq">
                {section.questions.map((item) => (
                  <div className="info-faq__item" key={item.question}>
                    <h3 className="info-faq__question">{item.question}</h3>
                    <p className="info-faq__answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="info-section__text">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
          </section>
        ))}

        <section className="config-section info-section">
          <div className="config-section__head">
            <h2>{support.contactLabel}</h2>
          </div>
          <div className="info-section__text">
            <p>{support.contactIntro}</p>
            <p>
              <a href={`mailto:${support.contactEmail}`}>{support.contactEmail}</a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
