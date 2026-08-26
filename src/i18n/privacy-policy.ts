import type { Locale } from '@/src/i18n/locale'
import { SUPPORT_EMAIL } from '@/src/i18n/contact'

/**
 * Localized privacy policy content.
 *
 * WonZoo is a children's museum app with no accounts, no analytics SDKs and
 * no advertising SDKs; the only device capability it asks for is the camera,
 * which is used exclusively for the on-device AR experience. The policy below
 * stays accurate to that behaviour so it can be submitted to the App Store
 * (which requires a public, honest privacy policy URL).
 */
export interface PrivacySection {
  readonly title: string
  readonly paragraphs: readonly string[]
}

export interface PrivacyPolicyContent {
  readonly title: string
  readonly summary: string
  readonly lastUpdatedLabel: string
  readonly updatedDate: string
  readonly contactLabel: string
  readonly contactEmail: string
  readonly sections: readonly PrivacySection[]
}

const zhCN: PrivacyPolicyContent = {
  title: '隐私政策',
  summary:
    'WonZoo 是一款面向儿童的 3D 史前动物应用：无需账号，不收集个人身份信息，不包含广告与分析 SDK，摄像头仅用于本地的增强现实体验。',
  lastUpdatedLabel: '最后更新',
  updatedDate: '2026 年 8 月 22 日',
  contactLabel: '联系我们',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '我们收集的信息',
      paragraphs: [
        '本应用无需注册或登录，不会要求您提供姓名、联系方式、邮箱或任何儿童的个人信息。',
        '增强现实（AR）功能会在您主动开启时请求使用摄像头，用于把动物模型放到您周围的画面中。摄像头画面只在您的设备本地实时处理，我们不会录制、保存或上传任何画面。',
        '应用会在您的设备本地保存少量偏好设置（例如界面语言、是否已看过流量提示）。这些数据只存在您的设备上，不会发送给我们。',
      ],
    },
    {
      title: '我们不收集的信息',
      paragraphs: [
        '本应用不包含账号系统，不收集身份信息，不进行广告追踪，也不包含行为分析 SDK。',
        '我们不会访问您的位置、通讯录、相册或其他设备敏感数据。',
      ],
    },
    {
      title: '儿童隐私',
      paragraphs: [
        '本应用面向 2–6 岁儿童及其家长设计。我们不收集任何可识别儿童身份的信息，也没有账号或社交功能。',
        '如果您认为我们无意中收集了儿童信息，请通过下方联系方式联系我们，我们会在核实后尽快删除。',
      ],
    },
    {
      title: '第三方服务',
      paragraphs: [
        '应用本身不包含第三方广告或分析 SDK。',
        '如果您通过网页版访问 WonZoo，网页可能会展示由 Google AdSense 提供的广告；其数据收集与使用请参阅 Google 的隐私政策。',
      ],
    },
    {
      title: '数据安全',
      paragraphs: [
        '摄像头画面仅在本地处理；本地偏好设置保存在您的设备上。您可以在系统设置中撤销摄像头权限，或清除应用数据来删除本地保存的偏好。',
      ],
    },
    {
      title: '您的权利',
      paragraphs: [
        '由于我们不收集个人数据，通常无需进行「访问或删除个人数据」操作。您可以随时撤销摄像头权限或清除本地数据。',
        '如果您对本政策或数据处理有任何疑问或请求，请通过下方联系方式与我们联系。',
      ],
    },
    {
      title: '政策更新',
      paragraphs: [
        '我们可能会不时更新本政策。更新后的政策会发布在本页面，并同步更新「最后更新」日期。',
      ],
    },
  ],
}

const zhTW: PrivacyPolicyContent = {
  title: '隱私權政策',
  summary:
    'WonZoo 是一款面向兒童的 3D 史前動物應用：無需帳號，不收集個人身分資訊，不包含廣告與分析 SDK，攝影機僅用於本地的擴增實境體驗。',
  lastUpdatedLabel: '最後更新',
  updatedDate: '2026 年 8 月 22 日',
  contactLabel: '聯絡我們',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '我們收集的資訊',
      paragraphs: [
        '本應用無需註冊或登入，不會要求您提供姓名、聯絡方式、電子郵件或任何兒童的個人資訊。',
        '擴增實境（AR）功能會在您主動開啟時請求使用攝影機，用於把動物模型放到您周圍的畫面中。攝影機畫面只在您的設備本地即時處理，我們不會錄製、保存或上傳任何畫面。',
        '應用會在您的設備本地保存少量偏好設定（例如介面語言、是否已看過流量提示）。這些資料只存在您的設備上，不會傳送給我們。',
      ],
    },
    {
      title: '我們不收集的資訊',
      paragraphs: [
        '本應用不包含帳號系統，不收集身分資訊，不進行廣告追蹤，也不包含行為分析 SDK。',
        '我們不會存取您的位置、通訊錄、相簿或其他設備敏感資料。',
      ],
    },
    {
      title: '兒童隱私',
      paragraphs: [
        '本應用面向 2–6 歲兒童及其家長設計。我們不收集任何可識別兒童身分的資訊，也沒有帳號或社交功能。',
        '如果您認為我們無意中收集了兒童資訊，請透過下方聯絡方式與我們聯絡，我們會在核實後盡快刪除。',
      ],
    },
    {
      title: '第三方服務',
      paragraphs: [
        '應用本身不包含第三方廣告或分析 SDK。',
        '如果您透過網頁版造訪 WonZoo，網頁可能會展示由 Google AdSense 提供的廣告；其資料收集與使用請參閱 Google 的隱私權政策。',
      ],
    },
    {
      title: '資料安全',
      paragraphs: [
        '攝影機畫面僅在本地處理；本地偏好設定保存在您的設備上。您可以在系統設定中撤銷攝影機權限，或清除應用資料來刪除本地保存的偏好。',
      ],
    },
    {
      title: '您的權利',
      paragraphs: [
        '由於我們不收集個人資料，通常無需進行「存取或刪除個人資料」操作。您可以隨時撤銷攝影機權限或清除本機資料。',
        '如果您對本政策或資料處理有任何疑問或請求，請透過下方聯絡方式與我們聯絡。',
      ],
    },
    {
      title: '政策更新',
      paragraphs: [
        '我們可能會不時更新本政策。更新後的政策會發布在本頁面，並同步更新「最後更新」日期。',
      ],
    },
  ],
}

const en: PrivacyPolicyContent = {
  title: 'Privacy Policy',
  summary:
    'WonZoo is a 3D prehistoric-animal app for children: no account, no personal identifiers, no advertising or analytics SDKs, and the camera is used only for the on-device AR experience.',
  lastUpdatedLabel: 'Last updated',
  updatedDate: '22 August 2026',
  contactLabel: 'Contact us',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: 'Information we collect',
      paragraphs: [
        'The app does not require an account or sign-in, and never asks for your name, contact details, email, or any personal information about a child.',
        'The augmented reality (AR) feature asks for camera access only when you choose to use it, so it can place an animal model in the scene around you. The camera feed is processed on your device in real time; we never record, store, or upload any footage.',
        'The app stores a small amount of preferences on your device (such as the interface language and whether a data notice has been seen). This data stays on your device and is never sent to us.',
      ],
    },
    {
      title: 'Information we do not collect',
      paragraphs: [
        'The app has no account system, collects no identity information, performs no advertising tracking, and includes no behavioural analytics SDK.',
        'We do not access your location, contacts, photo library, or other sensitive device data.',
      ],
    },
    {
      title: "Children's privacy",
      paragraphs: [
        'The app is designed for children aged 2–6 and their grown-ups. We collect no information that identifies a child, and there are no accounts or social features.',
        'If you believe we have unintentionally collected information about a child, please contact us using the details below and we will delete it as soon as possible after verification.',
      ],
    },
    {
      title: 'Third-party services',
      paragraphs: [
        'The app itself contains no third-party advertising or analytics SDKs.',
        'If you open WonZoo through the website, the site may display advertisements provided by Google AdSense; see Google’s privacy policy for how that service handles data.',
      ],
    },
    {
      title: 'Data security',
      paragraphs: [
        'The camera feed is processed only on your device, and local preferences are stored on your device. You can revoke camera permission in your system settings, or clear the app data to remove locally stored preferences.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'Because we do not collect personal data, there is normally nothing to access or delete. You can revoke camera permission or clear local data at any time.',
        'If you have any questions or requests about this policy or our data handling, please contact us using the details below.',
      ],
    },
    {
      title: 'Changes to this policy',
      paragraphs: [
        'We may update this policy from time to time. Any updated policy will be published on this page, and the “Last updated” date will be refreshed.',
      ],
    },
  ],
}

export function privacyPolicyFor(locale: Locale): PrivacyPolicyContent {
  switch (locale) {
    case 'zh-CN':
      return zhCN
    case 'zh-TW':
      return zhTW
    default:
      return en
  }
}
