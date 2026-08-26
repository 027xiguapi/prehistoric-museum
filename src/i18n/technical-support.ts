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

const zhTW: TechnicalSupportContent = {
  title: '技術支援',
  summary:
    '遇到問題？查看常見問題與設備要求，或直接聯絡我們。',
  contactLabel: '聯絡我們',
  contactIntro:
    '如果仍有問題，請傳送郵件至下方地址，並附上設備型號、系統版本和問題描述，我們會盡快回覆。',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '常見問題',
      paragraphs: [],
      questions: [
        {
          question: 'AR 打不開，或攝影機無法使用怎麼辦？',
          answer:
            'AR 需要攝影機權限。請在系統設定中為 WonZoo 開啟攝影機權限後重試；AR 還需要設備同時支援攝影機與 WebGL。',
        },
        {
          question: '3D 模型載入緩慢或失敗？',
          answer:
            '動物模型首次下載會佔用一些流量，建議在 Wi-Fi 環境下載入；載入失敗時點擊動物卡片即可重試。',
        },
        {
          question: '聽不到介紹語音？',
          answer:
            '介紹語音不會自動播放，請點擊「聽介紹」按鈕，並確認設備沒有處於靜音狀態。',
        },
        {
          question: '如何切換介面語言？',
          answer:
            '進入「設定」→「語言」，選擇簡體中文、繁體中文、English 或跟隨系統。',
        },
        {
          question: '畫面卡頓，或設備發熱？',
          answer:
            '請嘗試關閉其他背景應用或降低螢幕亮度；長時間使用 AR 時設備略微發熱屬正常現象。',
        },
      ],
    },
    {
      title: '設備要求',
      paragraphs: [
        'WonZoo 支援較新的 iOS / Android 設備；網頁版需要支援 WebGL 的現代瀏覽器。',
        'AR 功能需要設備具備攝影機，並透過安全（HTTPS）頁面存取。',
        '請保持系統為較新版本，以獲得最佳體驗。',
      ],
    },
  ],
}

const ja: TechnicalSupportContent = {
  title: 'テクニカルサポート',
  summary:
    'お困りですか？よくある質問と必要な環境をご確認いただくか、直接お問い合わせください。',
  contactLabel: 'お問い合わせ',
  contactIntro:
    'それでも解決しない場合は、端末の機種名・OS のバージョン・問題の内容を添えて下記のアドレスまでメールをお送りください。できるだけ早くご返信します。',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: 'よくある質問',
      paragraphs: [],
      questions: [
        {
          question: 'AR が開かない、またはカメラが使えない',
          answer:
            'AR にはカメラの許可が必要です。システム設定で WonZoo のカメラを許可してからもう一度お試しください。AR にはカメラと WebGL の両方に対応した端末も必要です。',
        },
        {
          question: '3D モデルの読み込みが遅い、または失敗する',
          answer:
            '動物モデルの初回ダウンロードは通信量を使うため、Wi-Fi 環境での読み込みをおすすめします。失敗した場合は動物のカードをタップして再試行できます。',
        },
        {
          question: 'ナレーションが聞こえない',
          answer:
            'ナレーションは自動では再生されません。「聞く」ボタンをタップし、端末がマナーモードになっていないかご確認ください。',
        },
        {
          question: '言語を変更するには？',
          answer:
            '「設定」→「言語」で、簡体中文・繁體中文・日本語・English のいずれかを選ぶか、システム言語に従うことができます。',
        },
        {
          question: '画面がカクつく、または端末が熱くなる',
          answer:
            '他のバックグラウンドアプリを閉じるか、画面の明るさを下げてお試しください。長時間の AR 使用時に端末が少し温かくなるのは正常です。',
        },
      ],
    },
    {
      title: '必要な環境',
      paragraphs: [
        'WonZoo は比較的新しい iOS / Android 端末に対応しています。ウェブ版は WebGL に対応したモダンブラウザが必要です。',
        'AR にはカメラを搭載した端末が必要で、安全な（HTTPS）ページからアクセスします。',
        '快適にご利用いただくため、OS は新しいバージョンに保つことをおすすめします。',
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
            'Open “Settings” → “Language”, then choose Simplified Chinese, Traditional Chinese, English, or follow the system language.',
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

export function technicalSupportFor(
  locale: Locale,
): TechnicalSupportContent {
  switch (locale) {
    case 'zh-CN':
      return zhCN
    case 'zh-TW':
      return zhTW
    case 'ja':
      return ja
    default:
      return en
  }
}
