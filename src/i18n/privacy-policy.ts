import type { Locale } from '@/src/i18n/locale'
import { SUPPORT_EMAIL } from '@/src/i18n/contact'

/**
 * Localized privacy policy content.
 *
 * WonZoo exists in two forms and this policy has to describe both accurately,
 * because they behave differently:
 *
 * - the website (aitubestats.com) loads Google AdSense, so Google and its
 *   partners may set cookies and read identifiers to serve advertising;
 * - the app (the Capacitor build) deliberately ships without the AdSense
 *   loader, has no accounts, no analytics SDK and asks only for the camera,
 *   which is used on-device for AR.
 *
 * The policy therefore discloses the advertising data use explicitly instead of
 * claiming the project performs no advertising tracking, states that the site
 * is treated as child-directed, and points at the interest-based advertising
 * opt-outs.
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
    'WonZoo 有网站与应用两种形态。网站会展示 Google 广告，因此 Google 及其合作伙伴可能使用 Cookie 与标识符来投放广告；应用不含广告 SDK，也不收集个人身份信息，摄像头仅用于本地的增强现实体验。',
  lastUpdatedLabel: '最后更新',
  updatedDate: '2026 年 9 月 14 日',
  contactLabel: '联系我们',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '本政策覆盖什么',
      paragraphs: [
        '本政策适用于 WonZoo 网站（aitubestats.com）以及 WonZoo 应用。两者的数据处理方式并不相同，下面分别说明。',
        '我们不会要求你注册账号，也不会收集你的姓名、联系方式或任何儿童的个人信息。',
      ],
    },
    {
      title: '网站上的 Cookie 与广告',
      paragraphs: [
        '网站使用 Google AdSense 展示广告。Google 作为第三方广告服务商，可能在本网站放置并读取 Cookie，或使用网络信标（web beacon）、IP 地址、设备标识符等来投放、衡量和防止广告欺诈。',
        'Google 及其合作伙伴可能根据你访问本网站及其他网站的情况投放个性化广告。这类广告投放不适用于被标记为面向儿童的内容。',
        '你可以在 Google 广告设置（https://adssettings.google.com）管理或关闭个性化广告，也可以在欧洲地区通过 https://www.youronlinechoices.com、在美国通过 https://www.aboutads.info/choices 选择退出参与该计划的广告服务商。关于 Google 如何使用来自使用其服务的网站或应用的信息，请参阅 https://policies.google.com/technologies/partner-sites。',
        '关闭个性化广告后你仍会看到广告，只是相关性降低。',
      ],
    },
    {
      title: '我们收集的信息',
      paragraphs: [
        '网站不设置账号，不收集姓名、邮箱等身份信息，也不包含用户行为分析 SDK。网站服务器与 CDN 会按常规处理访问日志（例如 IP 地址、请求时间、User-Agent）以提供与保护服务。',
        '应用无需注册或登录，不会要求你提供姓名、联系方式、邮箱或任何儿童的个人信息。',
        '增强现实（AR）功能会在你主动开启时请求使用摄像头，用于把动物模型放到你周围的画面中。摄像头画面只在你的设备本地实时处理，我们不会录制、保存或上传任何画面。',
        '应用会在你的设备本地保存少量偏好设置（例如界面语言、是否已看过提示）。这些数据只存在你的设备上，不会发送给我们。',
      ],
    },
    {
      title: '我们不收集的信息',
      paragraphs: [
        '应用不包含账号系统，不收集身份信息，不进行广告追踪，也不包含行为分析 SDK；应用不展示广告。',
        '我们不访问你的位置、通讯录、相册或其他设备敏感数据。',
      ],
    },
    {
      title: '儿童隐私与广告',
      paragraphs: [
        '本网站与应用面向 2–6 岁儿童及其家长设计。我们不收集任何可识别儿童身份的信息，也没有账号或社交功能。',
        '本网站被我们视为面向儿童的内容，不会使用 Google 广告产品对儿童投放个性化广告或据此建立受众群体。个性化广告仅在获得必要同意的前提下适用，且不用于儿童内容。',
        '如果你认为我们无意中收集了儿童信息，请通过下方联系方式联系我们，我们会在核实后尽快删除。',
      ],
    },
    {
      title: '数据安全',
      paragraphs: [
        '摄像头画面只在本地处理；本地偏好设置保存在你的设备上。你可以在系统设置中撤销摄像头权限，或清除应用数据来删除本地保存的偏好。',
        '网站通过 HTTPS 提供服务。我们不会在广告请求中向 Google 传递任何可识别个人身份的信息。',
      ],
    },
    {
      title: '你的选择与权利',
      paragraphs: [
        '你可以随时撤销摄像头权限或清除本地数据；可以通过浏览器设置阻止或删除 Cookie，也可以在同意横幅中更改你的广告同意选择。',
        '由于我们不收集个人数据，通常没有需要“访问或删除”的个人资料。如果你对本政策或数据处理有任何疑问或请求，请通过下方联系方式联系我们。',
      ],
    },
    {
      title: '政策更新',
      paragraphs: [
        '我们可能会不时更新本政策。更新后的政策会发布在本页面，并同步更新“最后更新”日期。',
      ],
    },
  ],
}

const zhTW: PrivacyPolicyContent = {
  title: '隱私權政策',
  summary:
    'WonZoo 有網站與應用兩種形態。網站會顯示 Google 廣告，因此 Google 及其合作夥伴可能使用 Cookie 與識別碼來投放廣告；應用不含廣告 SDK，也不收集個人身分資訊，攝影機僅用於本地的擴增實境體驗。',
  lastUpdatedLabel: '最後更新',
  updatedDate: '2026 年 9 月 14 日',
  contactLabel: '聯絡我們',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '本政策涵蓋什麼',
      paragraphs: [
        '本政策適用於 WonZoo 網站（aitubestats.com）以及 WonZoo 應用程式。兩者的資料處理方式並不相同，以下分別說明。',
        '我們不會要求你註冊帳號，也不會收集你的姓名、聯絡方式或任何兒童的個人資訊。',
      ],
    },
    {
      title: '網站上的 Cookie 與廣告',
      paragraphs: [
        '網站使用 Google AdSense 顯示廣告。Google 作為第三方廣告服務商，可能在本網站放置並讀取 Cookie，或使用網路信標（web beacon）、IP 位址、裝置識別碼等來投放、衡量與防止廣告詐欺。',
        'Google 及其合作夥伴可能根據你造訪本網站及其他網站的情況投放個人化廣告。這類廣告投放不適用於被標記為面向兒童的內容。',
        '你可以在 Google 廣告設定（https://adssettings.google.com）管理或關閉個人化廣告，也可以在歐洲地區透過 https://www.youronlinechoices.com、在美國透過 https://www.aboutads.info/choices 選擇退出參與該計畫的廣告服務商。關於 Google 如何使用來自使用其服務的網站或應用程式的資訊，請參閱 https://policies.google.com/technologies/partner-sites。',
        '關閉個人化廣告後你仍會看到廣告，只是相關性降低。',
      ],
    },
    {
      title: '我們收集的資訊',
      paragraphs: [
        '網站不設置帳號，不收集姓名、電子郵件等身分資訊，也不包含使用者行為分析 SDK。網站伺服器與 CDN 會依常規處理存取日誌（例如 IP 位址、請求時間、User-Agent）以提供與保護服務。',
        '應用程式無需註冊或登入，不會要求你提供姓名、聯絡方式、電子郵件或任何兒童的個人資訊。',
        '擴增實境（AR）功能會在你主動開啟時請求使用攝影機，用於把動物模型放到你周圍的畫面中。攝影機畫面只在你的裝置本地即時處理，我們不會錄製、保存或上傳任何畫面。',
        '應用程式會在你的裝置本地保存少量偏好設定（例如介面語言、是否已看過提示）。這些資料只存在你的裝置上，不會傳送給我們。',
      ],
    },
    {
      title: '我們不收集的資訊',
      paragraphs: [
        '應用程式不包含帳號系統，不收集身分資訊，不進行廣告追蹤，也不包含行為分析 SDK；應用程式不顯示廣告。',
        '我們不存取你的位置、通訊錄、相簿或其他裝置敏感資料。',
      ],
    },
    {
      title: '兒童隱私與廣告',
      paragraphs: [
        '本網站與應用程式面向 2–6 歲兒童及其家長設計。我們不收集任何可識別兒童身分的資訊，也沒有帳號或社交功能。',
        '本網站被我們視為面向兒童的內容，不會使用 Google 廣告產品對兒童投放個人化廣告或據此建立受眾群體。個人化廣告僅在取得必要同意的前提下適用，且不用於兒童內容。',
        '如果你認為我們無意中收集了兒童資訊，請透過下方聯絡方式與我們聯絡，我們會在核實後盡快刪除。',
      ],
    },
    {
      title: '資料安全',
      paragraphs: [
        '攝影機畫面只在本地處理；本地偏好設定保存在你的裝置上。你可以在系統設定中撤銷攝影機權限，或清除應用程式資料來刪除本地保存的偏好。',
        '網站透過 HTTPS 提供服務。我們不會在廣告請求中向 Google 傳遞任何可識別個人身分的資訊。',
      ],
    },
    {
      title: '你的選擇與權利',
      paragraphs: [
        '你可以隨時撤銷攝影機權限或清除本地資料；可以透過瀏覽器設定封鎖或刪除 Cookie，也可以在同意橫幅中更改你的廣告同意選擇。',
        '由於我們不收集個人資料，通常沒有需要「存取或刪除」的個人資料。如果你對本政策或資料處理有任何疑問或請求，請透過下方聯絡方式與我們聯絡。',
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

const ja: PrivacyPolicyContent = {
  title: 'プライバシーポリシー',
  summary:
    'WonZoo にはウェブサイトとアプリの 2 つの形があります。ウェブサイトでは Google の広告を表示するため、Google とそのパートナーが Cookie や識別子を広告配信に使用することがあります。アプリには広告 SDK がなく、個人情報も収集せず、カメラは端末内の AR 体験にのみ使用します。',
  lastUpdatedLabel: '最終更新',
  updatedDate: '2026 年 9 月 14 日',
  contactLabel: 'お問い合わせ',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: '本ポリシーの対象',
      paragraphs: [
        '本ポリシーは WonZoo のウェブサイト（aitubestats.com）と WonZoo アプリの両方に適用されます。データの取り扱いは両者で異なるため、以下に分けて説明します。',
        'アカウント登録は必要なく、お名前や連絡先、お子さまの個人情報を収集することはありません。',
      ],
    },
    {
      title: 'ウェブサイトの Cookie と広告',
      paragraphs: [
        'ウェブサイトでは Google AdSense を利用して広告を表示しています。第三者である Google は、本サイトに Cookie を保存・読み取りしたり、ウェブビーコン、IP アドレス、デバイス識別子などを用いて広告の配信・測定・不正防止を行うことがあります。',
        'Google とそのパートナーは、本サイトや他のサイトへの訪問状況に基づいてパーソナライズ広告を配信することがあります。この配信は、子ども向けとして扱われるコンテンツには適用されません。',
        'パーソナライズ広告は Google の広告設定（https://adssettings.google.com）で管理・無効にできます。また、欧州では https://www.youronlinechoices.com、米国では https://www.aboutads.info/choices から、この仕組みに参加する事業者をオプトアウトできます。Google が自社サービスを利用するサイトやアプリの情報をどのように使用するかは https://policies.google.com/technologies/partner-sites をご覧ください。',
        'パーソナライズ広告を無効にしても広告は表示されますが、関連性は低下します。',
      ],
    },
    {
      title: '収集する情報',
      paragraphs: [
        'ウェブサイトにはアカウントがなく、氏名やメールアドレスなどの身元情報や、行動解析 SDK を含みません。ウェブサーバーと CDN は、サービスの提供と保護のために通常のアクセスログ（IP アドレス、リクエスト時刻、User-Agent など）を処理します。',
        'アプリは登録やログインを必要とせず、お名前・連絡先・メールアドレス、その他お子さまの個人情報をお尋ねすることはありません。',
        '拡張現実（AR）機能は、お客様が利用を選択したときにのみカメラへのアクセスを求め、周囲の映像の中に動物モデルを配置します。カメラ映像はお使いの端末上でリアルタイムに処理されるだけで、録画・保存・アップロードは一切行いません。',
        'アプリは端末内に少量の設定（表示言語やお知らせを表示済みかどうかなど）を保存します。このデータは端末内にとどまり、当方へ送信されることはありません。',
      ],
    },
    {
      title: '収集しない情報',
      paragraphs: [
        'アプリにはアカウントシステムがなく、身元情報の収集、広告トラッキング、行動解析 SDK も含みません。アプリは広告を表示しません。',
        '位置情報・連絡先・フォトライブラリ、その他の端末の機微なデータにはアクセスしません。',
      ],
    },
    {
      title: '子どものプライバシーと広告',
      paragraphs: [
        '本ウェブサイトとアプリは 2～6 歳のお子さまとその保護者向けに設計されています。お子さまを特定できる情報は収集せず、アカウントやソーシャル機能もありません。',
        '本ウェブサイトは子ども向けのコンテンツとして扱い、子どもに対して Google の広告プロダクトでパーソナライズ広告を配信したり、それに基づいてオーディエンスを作成したりすることはありません。パーソナライズ広告は必要な同意が得られた場合にのみ適用され、子ども向けコンテンツには使用しません。',
        'もしお子さまの情報を意図せず収集してしまったと思われる場合は、下記の連絡先までご連絡ください。確認のうえ、できるだけ早く削除します。',
      ],
    },
    {
      title: 'データの安全',
      paragraphs: [
        'カメラ映像は端末内でのみ処理され、ローカルの設定はお使いの端末に保存されます。システム設定でカメラの許可を取り消すか、アプリのデータを消去することで、ローカルに保存した設定を削除できます。',
        'ウェブサイトは HTTPS で提供されます。広告リクエストにおいて、個人を特定できる情報を Google に渡すことはありません。',
      ],
    },
    {
      title: 'お客様の選択と権利',
      paragraphs: [
        'カメラの許可の取り消しやローカルデータの消去はいつでも可能です。ブラウザの設定で Cookie を拒否・削除することも、同意バナーで広告に関する同意を変更することもできます。',
        '個人データを収集しないため、通常は「データの閲覧・削除」の対象はありません。本ポリシーやデータの取り扱いについてご質問・ご要望がある場合は、下記の連絡先までご連絡ください。',
      ],
    },
    {
      title: 'ポリシーの変更',
      paragraphs: [
        '本ポリシーは随時更新することがあります。更新したポリシーはこのページに掲載し、「最終更新」の日付も更新します。',
      ],
    },
  ],
}

const en: PrivacyPolicyContent = {
  title: 'Privacy policy',
  summary:
    'WonZoo exists as both a website and an app. The website shows Google advertising, so Google and its partners may use cookies and identifiers to serve ads. The app contains no advertising SDK, collects no personal information, and uses the camera only for the on-device AR experience.',
  lastUpdatedLabel: 'Last updated',
  updatedDate: '14 September 2026',
  contactLabel: 'Contact us',
  contactEmail: SUPPORT_EMAIL,
  sections: [
    {
      title: 'What this policy covers',
      paragraphs: [
        'This policy applies to the WonZoo website (aitubestats.com) and to the WonZoo app. They handle data differently, so each is described separately below.',
        'We do not ask you to create an account, and we do not collect your name, contact details or any personal information about a child.',
      ],
    },
    {
      title: 'Cookies and advertising on the website',
      paragraphs: [
        'The website uses Google AdSense to display advertising. As a third-party advertising provider, Google may place and read cookies on this site, or use web beacons, IP addresses and device identifiers, to serve and measure ads and to prevent advertising fraud.',
        'Google and its partners may serve personalised advertising based on your visits to this and other websites. This kind of advertising is not applied to content that we treat as child-directed.',
        'You can manage or turn off personalised advertising in Google Ads Settings (https://adssettings.google.com). In Europe you can opt out of participating providers at https://www.youronlinechoices.com, and in the United States at https://www.aboutads.info/choices. For how Google uses information from sites or apps that use its services, see https://policies.google.com/technologies/partner-sites.',
        'If you turn off personalised advertising you will still see ads, but they will be less relevant to you.',
      ],
    },
    {
      title: 'Information we collect',
      paragraphs: [
        'The website has no accounts, collects no identity information such as names or email addresses, and includes no behavioural analytics SDK. Our web server and CDN process ordinary access logs (for example IP address, request time and User-Agent) in order to deliver and protect the service.',
        'The app requires no account or sign-in, and never asks for your name, contact details, email, or any personal information about a child.',
        'The augmented reality (AR) feature asks for camera access only when you choose to use it, so it can place an animal model in the scene around you. The camera feed is processed on your device in real time; we never record, store, or upload any footage.',
        'The app stores a small amount of preferences on your device (such as the interface language and whether a notice has been seen). This data stays on your device and is never sent to us.',
      ],
    },
    {
      title: 'Information we do not collect',
      paragraphs: [
        'The app has no account system, collects no identity information, performs no advertising tracking, and includes no behavioural analytics SDK; the app does not display advertising.',
        'We do not access your location, contacts, photo library, or other sensitive device data.',
      ],
    },
    {
      title: "Children's privacy and advertising",
      paragraphs: [
        'The website and the app are designed for children aged 2–6 and their grown-ups. We collect no information that identifies a child, and there are no accounts or social features.',
        'We treat this website as child-directed content. We do not use Google advertising products to serve personalised advertising to children or to build audiences from their activity. Personalised advertising applies only where the necessary consent has been obtained, and is not used on child-directed content.',
        'If you believe we have unintentionally collected information about a child, please contact us using the details below and we will delete it as soon as possible after verification.',
      ],
    },
    {
      title: 'Data security',
      paragraphs: [
        'The camera feed is processed only on your device, and local preferences are stored on your device. You can revoke camera permission in your system settings, or clear the app data to remove locally stored preferences.',
        'The website is served over HTTPS. We do not pass personally identifiable information to Google in advertising requests.',
      ],
    },
    {
      title: 'Your choices and rights',
      paragraphs: [
        'You can revoke camera permission or clear local data at any time. You can also block or delete cookies in your browser settings, and change your advertising consent choices in the consent banner.',
        'Because we do not collect personal data, there is normally nothing to access or delete. If you have any questions or requests about this policy or our data handling, please contact us using the details below.',
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
    case 'ja':
      return ja
    default:
      return en
  }
}
