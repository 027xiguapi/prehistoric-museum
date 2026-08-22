import { useI18n } from '@/src/i18n/I18nProvider'
import type { ModelDataNotice } from '@/src/museum/types'

interface ModelDataNoticeAsideProps {
  readonly message: string | null
  readonly notice: ModelDataNotice
  readonly onDismiss: () => void
}

export function ModelDataNoticeAside({
  message,
  notice,
  onDismiss,
}: ModelDataNoticeAsideProps) {
  const { messages } = useI18n()
  return (
    <aside
      aria-atomic="true"
      aria-live="polite"
      className="model-data-notice"
      data-notice-kind={notice.kind}
      role="status"
    >
      <span aria-hidden="true" className="model-data-notice__dot" />
      <p>{message}</p>
      <button
        aria-label={messages.dataNotice.dismissLabel}
        onClick={onDismiss}
        type="button"
      >
        {messages.dataNotice.dismiss}
      </button>
    </aside>
  )
}
