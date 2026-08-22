import type { Locale } from '@/src/i18n/locale'
import { SUPPORT_EMAIL } from '@/src/i18n/contact'

/**
 * Localized technical-support content. iOS App Store submission requires a
 * public support URL; this page provides the FAQ, device requirements and a
 * contact route in both supported languages.
 */
export interface SupportQuestion {
  readonly question: string
  readonly answer: string
}

export interface SupportSection {
  readonly title: string
  readonly paragraphs: readonly string[]
  readonly questions?: readonly SupportQuestion[]
}

export interface TechnicalSupportContent {
  readonly title: string
  readonly summary: string
  readonly contactLabel: string
  readonly contactIntro: string
  readonly contactEmail: string
  readonly sections: readonly SupportSection[]
}

const zhCN: TechnicalSupportContent = {
  title: '技术支持',
  summary:
    '遇到问题？查看常见问题与设备要求，或直接联系我们。',
  contactLabel: '联系我们',
  contactIntro:
    '如果仍有问题，请发送邮件至下方地址，并附上设备型号、系统版本和问题描述，我们会尽快回复。',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '常见问题',
      paragraphs: [],
      questions: [
        {
          question: 'AR 打不开，或摄像头无法使用怎么办？',
          answer:
            'AR 需要摄像头权限。请在系统设置中为 WonZoo 开启摄像头权限后重试；AR 还需要设备同时支持摄像头与 WebGL。',
        },
        {
          question: '3D 模型加载缓慢或失败？',
          answer:
            '动物模型首次下载会占用一些流量，建议在 Wi-Fi 环境下加载；加载失败时点击动物卡片即可重试。',
        },
        {
          question: '听不到介绍语音？',
          answer:
            '介绍语音不会自动播放，请点击「听介绍」按钮，并确认设备没有处于静音状态。',
        },
        {
          question: '如何切换界面语言？',
          answer:
            '进入「设置」→「语言」，选择简体中文、English 或跟随系统。',
        },
        {
          question: '画面卡顿，或设备发热？',
          answer:
            '请尝试关闭其他后台应用或降低屏幕亮度；长时间使用 AR 时设备略微发热属正常现象。',
        },
      ],
    },
    {
      title: '设备要求',
      paragraphs: [
        'WonZoo 支持较新的 iOS / Android 设备；网页版需要支持 WebGL 的现代浏览器。',
        'AR 功能需要设备具备摄像头，并通过安全（HTTPS）页面访问。',
        '请保持系统为较新版本，以获得最佳体验。',
      ],
    },
  ],
}

const en: TechnicalSupportContent = {
  title: 'Technical Support',
  summary:
    'Need help? Read the FAQ and device requirements, or contact us directly.',
  contactLabel: 'Contact us',
  contactIntro:
    'If you still need help, email the address below with your device model, system version and a description of the problem, and we will reply as soon as we can.',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: 'Frequently asked questions',
      paragraphs: [],
      questions: [
        {
          question: 'AR won’t open, or the camera doesn’t work',
          answer:
            'AR needs camera permission. Allow WonZoo to use the camera in your system settings and try again. AR also needs a device that supports both a camera and WebGL.',
        },
        {
          question: 'The 3D model loads slowly or fails',
          answer:
            'An animal model’s first download uses some data, so try loading it on Wi-Fi. If it fails, tap the animal card to try again.',
        },
        {
          question: 'I can’t hear the narration',
          answer:
            'Narration never starts on its own. Tap the “Listen” button and make sure the device is not muted.',
        },
        {
          question: 'How do I change the language?',
          answer:
            'Open “Settings” → “Language”, then choose Simplified Chinese, English, or follow the system language.',
        },
        {
          question: 'The screen lags, or the device gets warm',
          answer:
            'Try closing other background apps or lowering the brightness. Slight warmth during longer AR sessions is normal.',
        },
      ],
    },
    {
      title: 'Device requirements',
      paragraphs: [
        'WonZoo supports recent iOS / Android devices; the website needs a modern browser with WebGL support.',
        'AR needs a device with a camera, accessed over a secure (HTTPS) page.',
        'Keep the system reasonably up to date for the best experience.',
      ],
    },
  ],
}

export function technicalSupportFor(locale: Locale): TechnicalSupportContent {
  return locale === 'zh-CN' ? zhCN : en
}
