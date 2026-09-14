import type { Locale } from '@/src/i18n/locale'
import { SUPPORT_EMAIL } from '@/src/i18n/contact'

/**
 * Localized content for the site's trust documents and the footer that links
 * them.
 *
 * Only verifiable project facts are stated here: the museum's name, the
 * creator brand recorded in the i18n messages, the open-source licence scope
 * of the code, and the shared support address. Details that belong to the
 * operator — a registered legal entity, postal address, or a named responsible
 * person — are marked as pending in `operatorPendingNote` instead of being
 * invented, because a fabricated identity is exactly the kind of misleading
 * representation the AdSense publisher policies prohibit.
 */
export interface DocumentSection {
  readonly title: string
  readonly paragraphs: readonly string[]
}

export interface DocumentContent {
  readonly title: string
  readonly summary: string
  readonly sections: readonly DocumentSection[]
  readonly contactLabel: string
  readonly contactEmail: string
  /** Set only when the operator must still supply real identity details. */
  readonly operatorPendingNote?: string
}

export interface SiteDocumentLabels {
  readonly footerHeading: string
  readonly privacy: string
  readonly credits: string
  readonly about: string
  readonly contact: string
  readonly terms: string
  readonly support: string
}

const zhCNLabels: SiteDocumentLabels = {
  footerHeading: '关于与条款',
  privacy: '隐私政策',
  credits: '素材来源与署名',
  about: '关于 WonZoo',
  contact: '联系我们',
  terms: '使用条款',
  support: '技术支持',
}

const zhTWLabels: SiteDocumentLabels = {
  footerHeading: '關於與條款',
  privacy: '隱私權政策',
  credits: '素材來源與署名',
  about: '關於 WonZoo',
  contact: '聯絡我們',
  terms: '使用條款',
  support: '技術支援',
}

const jaLabels: SiteDocumentLabels = {
  footerHeading: 'このサイトについて',
  privacy: 'プライバシーポリシー',
  credits: '素材の出典とクレジット',
  about: 'WonZoo について',
  contact: 'お問い合わせ',
  terms: '利用規約',
  support: 'サポート',
}

const enLabels: SiteDocumentLabels = {
  footerHeading: 'About and terms',
  privacy: 'Privacy policy',
  credits: 'Credits and attributions',
  about: 'About WonZoo',
  contact: 'Contact us',
  terms: 'Terms of use',
  support: 'Technical support',
}

const labelsByLocale: Readonly<Record<Locale, SiteDocumentLabels>> = {
  'zh-CN': zhCNLabels,
  'zh-TW': zhTWLabels,
  ja: jaLabels,
  en: enLabels,
}

export function siteDocumentLabelsFor(locale: Locale): SiteDocumentLabels {
  return labelsByLocale[locale]
}

const operatorPendingNote = {
  'zh-CN':
    '运营主体信息（依法登记的名称、通信地址与负责人）需由站点运营者补充，未填写前不应视为已完整披露。',
  'zh-TW':
    '營運主體資訊（依法登記的名稱、通信地址與負責人）需由站點營運者補充，未填寫前不應視為已完整揭露。',
  ja: '運営主体の情報（登記上の名称、所在地、責任者）は運営者が追記する必要があります。記載されるまでは完全な開示とはみなされません。',
  en: 'The operating entity details (registered name, postal address and responsible person) still have to be supplied by the site operator, and are not complete disclosure until they are.',
} as const satisfies Record<Locale, string>

const aboutZhCN: DocumentContent = {
  title: '关于 WonZoo',
  summary:
    'WonZoo 是一座面向 2–6 岁儿童及其家长的 3D 线上自然博物馆，由「Leon做了个」创作与维护。',
  sections: [
    {
      title: '这个网站是什么',
      paragraphs: [
        'WonZoo 把史前动物做成可以在浏览器里转动的 3D 展台，配双语旁白与温和的观察引导，让家长和孩子一起认识这些动物。网站提供中文（简体与繁体）、日文和英文界面。',
        '每个展台的文案都标注了参考的科学来源，展台上的颜色与动作是基于化石证据的艺术复原，不代表化石已经给出了全部答案。',
      ],
    },
    {
      title: '内容与代码的许可',
      paragraphs: [
        '软件代码以 AGPL-3.0-only 开放；原创科普文案、旁白与展厅背景采用 CC BY-NC-SA 4.0（署名—非商业性使用—相同方式共享）。',
        '展台中的 3D 模型来自公开素材平台的第三方作者，各自的许可与来源记录在「素材来源与署名」页面。',
      ],
    },
    {
      title: '科普内容的定位',
      paragraphs: [
        '本站是面向家庭的科普读物，不是学术出版物，也不提供专业咨询。如果你发现内容有误，欢迎通过下方邮箱指出，我们会核实并更正。',
      ],
    },
    {
      title: '运营主体',
      paragraphs: [operatorPendingNote['zh-CN']],
    },
  ],
  contactLabel: '联系我们',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote['zh-CN'],
}

const aboutZhTW: DocumentContent = {
  title: '關於 WonZoo',
  summary:
    'WonZoo 是一座面向 2–6 歲兒童及其家長的 3D 線上自然博物館，由「Leon做了個」創作與維護。',
  sections: [
    {
      title: '這個網站是什麼',
      paragraphs: [
        'WonZoo 把史前動物做成可以在瀏覽器裡轉動的 3D 展台，搭配雙語旁白與溫和的觀察引導，讓家長和孩子一起認識這些動物。網站提供中文（簡體與繁體）、日文與英文介面。',
        '每個展台的文案都標註了參考的科學來源，展台上的顏色與動作是基於化石證據的藝術復原，不代表化石已經給出了全部答案。',
      ],
    },
    {
      title: '內容與程式的授權',
      paragraphs: [
        '軟體程式以 AGPL-3.0-only 開放；原創科普文案、旁白與展廳背景採用 CC BY-NC-SA 4.0（姓名標示—非商業性—相同方式分享）。',
        '展台中的 3D 模型來自公開素材平台的第三方作者，各自的授權與來源記錄在「素材來源與署名」頁面。',
      ],
    },
    {
      title: '科普內容的定位',
      paragraphs: [
        '本站是面向家庭的科普讀物，不是學術出版物，也不提供專業諮詢。如果你發現內容有誤，歡迎透過下方信箱指出，我們會核實並更正。',
      ],
    },
    {
      title: '營運主體',
      paragraphs: [operatorPendingNote['zh-TW']],
    },
  ],
  contactLabel: '聯絡我們',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote['zh-TW'],
}

const aboutJa: DocumentContent = {
  title: 'WonZoo について',
  summary:
    'WonZoo は、2〜6 歳のお子さまとその保護者向けの 3D オンライン自然博物館で、「Leon Made This」が制作・運営しています。',
  sections: [
    {
      title: 'このサイトについて',
      paragraphs: [
        'WonZoo は史前動物をブラウザ上で回転できる 3D 展示にし、バイリンガルのナレーションと穏やかな観察ガイドを添えたサイトです。保護者の方とお子さまが一緒に動物を知ることができます。インターフェースは中国語（簡体字・繁体字）、日本語、英語に対応しています。',
        '各展示の解説には参照した科学的情報源を記載しています。展示の色や動きは化石の証拠に基づく芸術的な復元であり、化石がすべての答えを示しているわけではありません。',
      ],
    },
    {
      title: 'コンテンツとコードのライセンス',
      paragraphs: [
        'ソフトウェアのコードは AGPL-3.0-only で公開されています。オリジナルの解説文、ナレーション、展示背景は CC BY-NC-SA 4.0（表示—非営利—継承）で提供されます。',
        '展示内の 3D モデルは公開アセットサイトの第三者の作者によるもので、それぞれのライセンスと出典は「素材の出典とクレジット」ページに記載しています。',
      ],
    },
    {
      title: '解説内容の位置づけ',
      paragraphs: [
        '当サイトは家庭向けの科学読み物であり、学術出版物ではなく、専門的な助言も提供しません。内容に誤りを見つけた場合は、下記のメールでお知らせください。確認のうえ訂正します。',
      ],
    },
    {
      title: '運営主体',
      paragraphs: [operatorPendingNote.ja],
    },
  ],
  contactLabel: 'お問い合わせ',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote.ja,
}

const aboutEn: DocumentContent = {
  title: 'About WonZoo',
  summary:
    'WonZoo is a 3D online natural-history museum for children aged 2–6 and their grown-ups, created and maintained by Leon Made This.',
  sections: [
    {
      title: 'What this site is',
      paragraphs: [
        'WonZoo turns prehistoric animals into 3D exhibits you can rotate in the browser, with bilingual narration and gentle observation prompts so a grown-up and a child can meet the animals together. The interface is available in Chinese (Simplified and Traditional), Japanese and English.',
        'Every exhibit lists the scientific sources it draws on. The colours and motion you see are an evidence-based artistic reconstruction, not a claim that the fossils have settled every question.',
      ],
    },
    {
      title: 'Content and code licensing',
      paragraphs: [
        'The software code is released under AGPL-3.0-only. The original interpretive writing, narration and exhibit backgrounds are licensed under CC BY-NC-SA 4.0 (attribution, non-commercial, share-alike).',
        'The 3D models in the exhibits come from third-party authors on public asset libraries; each model’s licence and source are recorded on the credits page.',
      ],
    },
    {
      title: 'What the science writing is for',
      paragraphs: [
        'This is family science writing, not an academic publication, and it is not professional advice. If you find an error, please tell us using the address below and we will check and correct it.',
      ],
    },
    {
      title: 'Who operates the site',
      paragraphs: [operatorPendingNote.en],
    },
  ],
  contactLabel: 'Contact us',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote.en,
}

const contactZhCN: DocumentContent = {
  title: '联系我们',
  summary: '内容更正、技术问题与授权事宜，都可以通过下面的邮箱联系我们。',
  sections: [
    {
      title: '联系邮箱',
      paragraphs: [
        '所有咨询请发送至下方邮箱。我们通常在数个工作日内回复。',
      ],
    },
    {
      title: '写信时请附上',
      paragraphs: [
        '内容问题：请给出页面地址，以及你认为有误的地方和你的依据来源，方便我们核对。',
        '技术问题：请说明设备型号、系统版本、浏览器版本与问题描述；如果是应用，请附上版本号。',
      ],
    },
    {
      title: '运营主体',
      paragraphs: [operatorPendingNote['zh-CN']],
    },
  ],
  contactLabel: '联系邮箱',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote['zh-CN'],
}

const contactZhTW: DocumentContent = {
  title: '聯絡我們',
  summary: '內容更正、技術問題與授權事宜，都可以透過下方信箱與我們聯絡。',
  sections: [
    {
      title: '聯絡信箱',
      paragraphs: [
        '所有諮詢請寄至下方信箱。我們通常會在數個工作日內回覆。',
      ],
    },
    {
      title: '寫信時請附上',
      paragraphs: [
        '內容問題：請提供頁面網址，以及你認為有誤的地方和你的依據來源，方便我們核對。',
        '技術問題：請說明裝置型號、系統版本、瀏覽器版本與問題描述；如果是應用程式，請附上版本號。',
      ],
    },
    {
      title: '營運主體',
      paragraphs: [operatorPendingNote['zh-TW']],
    },
  ],
  contactLabel: '聯絡信箱',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote['zh-TW'],
}

const contactJa: DocumentContent = {
  title: 'お問い合わせ',
  summary:
    '内容の訂正、技術的な問題、ライセンスに関するご連絡は、下記のメールアドレスまでお願いします。',
  sections: [
    {
      title: '連絡先',
      paragraphs: [
        'お問い合わせは下記のメールアドレスへお送りください。通常は数営業日以内に返信します。',
      ],
    },
    {
      title: 'お書き添えいただきたい内容',
      paragraphs: [
        '内容について：該当ページの URL と、誤りと考えられる箇所、参照した情報源をお知らせください。',
        '技術的な問題について：端末の機種、OS のバージョン、ブラウザのバージョン、問題の内容をお知らせください。アプリの場合はバージョン番号もお願いします。',
      ],
    },
    {
      title: '運営主体',
      paragraphs: [operatorPendingNote.ja],
    },
  ],
  contactLabel: '連絡先',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote.ja,
}

const contactEn: DocumentContent = {
  title: 'Contact us',
  summary:
    'Reach us about content corrections, technical problems or licensing questions using the address below.',
  sections: [
    {
      title: 'Email',
      paragraphs: [
        'Please send all enquiries to the address below. We usually reply within a few working days.',
      ],
    },
    {
      title: 'What to include',
      paragraphs: [
        'Content issue: include the page URL, what you believe is wrong, and the source you are relying on so we can check it.',
        'Technical issue: include your device model, operating-system version, browser version and a description of the problem. In the app, include the version number as well.',
      ],
    },
    {
      title: 'Who operates the site',
      paragraphs: [operatorPendingNote.en],
    },
  ],
  contactLabel: 'Email',
  contactEmail: SUPPORT_EMAIL,
  operatorPendingNote: operatorPendingNote.en,
}

const termsZhCN: DocumentContent = {
  title: '使用条款',
  summary:
    '使用本站即表示你接受以下条款。条款只覆盖本站的使用，不改变任何素材自身的许可。',
  sections: [
    {
      title: '用途与准确性',
      paragraphs: [
        '本站提供面向家庭的科普内容，供学习与娱乐使用，不构成专业意见。展台的形态、颜色与动作是基于化石证据的艺术复原，具有推测成分。',
        '我们会尽力核对内容，但不保证所有信息完整或无误；发现错误时我们会更正。',
      ],
    },
    {
      title: '许可范围',
      paragraphs: [
        '代码以 AGPL-3.0-only 发布；原创科普文案、旁白与展厅背景以 CC BY-NC-SA 4.0 发布。第三方模型的许可属于各自作者，详见「素材来源与署名」页面。',
        '「WonZoo」与「Leon做了个」等标识属于品牌标识，相关权利保留，不随上述许可授予。',
      ],
    },
    {
      title: '合理使用',
      paragraphs: [
        '请勿以干扰他人使用的方式访问本站，请勿试图绕过或破坏本站的安全与访问控制，请勿把本站内容用于误导他人的用途。',
      ],
    },
    {
      title: '责任限制',
      paragraphs: [
        '本站按「现状」提供。在法律允许的范围内，我们不对因使用本站而产生的间接损失承担责任。',
      ],
    },
    {
      title: '条款变更',
      paragraphs: [
        '条款如有更新，会发布在本页面并更新日期。继续使用本站即视为接受更新后的条款。',
      ],
    },
  ],
  contactLabel: '联系我们',
  contactEmail: SUPPORT_EMAIL,
}

const termsZhTW: DocumentContent = {
  title: '使用條款',
  summary:
    '使用本站即表示你接受以下條款。條款只涵蓋本站的使用，不改變任何素材自身的授權。',
  sections: [
    {
      title: '用途與準確性',
      paragraphs: [
        '本站提供面向家庭的科普內容，供學習與娛樂使用，不構成專業意見。展台的形態、顏色與動作是基於化石證據的藝術復原，具有推測成分。',
        '我們會盡力核對內容，但不保證所有資訊完整或無誤；發現錯誤時我們會更正。',
      ],
    },
    {
      title: '授權範圍',
      paragraphs: [
        '程式以 AGPL-3.0-only 發布；原創科普文案、旁白與展廳背景以 CC BY-NC-SA 4.0 發布。第三方模型的授權屬於各自作者，詳見「素材來源與署名」頁面。',
        '「WonZoo」與「Leon做了個」等標識屬於品牌標識，相關權利保留，不隨上述授權授予。',
      ],
    },
    {
      title: '合理使用',
      paragraphs: [
        '請勿以干擾他人使用的方式存取本站，請勿試圖繞過或破壞本站的安全與存取控制，請勿把本站內容用於誤導他人的用途。',
      ],
    },
    {
      title: '責任限制',
      paragraphs: [
        '本站按「現狀」提供。在法律允許的範圍內，我們不對因使用本站而產生的間接損失承擔責任。',
      ],
    },
    {
      title: '條款變更',
      paragraphs: [
        '條款如有更新，會發布在本頁面並更新日期。繼續使用本站即視為接受更新後的條款。',
      ],
    },
  ],
  contactLabel: '聯絡我們',
  contactEmail: SUPPORT_EMAIL,
}

const termsJa: DocumentContent = {
  title: '利用規約',
  summary:
    '本サイトを利用することで、以下の規約に同意したものとみなします。本規約はサイトの利用のみを対象とし、各素材のライセンスを変更するものではありません。',
  sections: [
    {
      title: '目的と正確性',
      paragraphs: [
        '本サイトは家庭向けの科学解説を提供するもので、学習と娯楽を目的とし、専門的な助言を構成しません。展示の形状・色・動きは化石の証拠に基づく芸術的な復元であり、推測を含みます。',
        '内容の確認に努めますが、すべての情報が完全かつ正確であることを保証するものではありません。誤りを見つけた場合は訂正します。',
      ],
    },
    {
      title: 'ライセンスの範囲',
      paragraphs: [
        'コードは AGPL-3.0-only、オリジナルの解説文・ナレーション・展示背景は CC BY-NC-SA 4.0 で公開されています。サードパーティのモデルのライセンスは各作者に帰属し、詳細は「素材の出典とクレジット」ページに記載しています。',
        '「WonZoo」「Leon Made This」などの標識はブランド資産であり、関連する権利は留保され、上記のライセンスには含まれません。',
      ],
    },
    {
      title: '適正な利用',
      paragraphs: [
        '他の利用者の妨げとなる方法で本サイトにアクセスしないでください。本サイトの安全性やアクセス制御を回避・破壊しようとしないでください。本サイトの内容を誤解を招く目的で使用しないでください。',
      ],
    },
    {
      title: '責任の制限',
      paragraphs: [
        '本サイトは「現状のまま」提供されます。法律で認められる範囲において、本サイトの利用によって生じた間接的な損害について責任を負いません。',
      ],
    },
    {
      title: '規約の変更',
      paragraphs: [
        '規約を更新する場合は本ページに掲載し、日付を更新します。更新後も本サイトを利用し続けた場合、更新後の規約に同意したものとみなします。',
      ],
    },
  ],
  contactLabel: 'お問い合わせ',
  contactEmail: SUPPORT_EMAIL,
}

const termsEn: DocumentContent = {
  title: 'Terms of use',
  summary:
    'By using this site you accept the terms below. They cover use of the site only and do not change the licence of any asset.',
  sections: [
    {
      title: 'Purpose and accuracy',
      paragraphs: [
        'This site provides family science content for learning and enjoyment and does not constitute professional advice. An exhibit’s shape, colour and motion are an evidence-based artistic reconstruction and contain conjecture.',
        'We check our content carefully but cannot guarantee that everything is complete or correct, and we correct errors when we find them.',
      ],
    },
    {
      title: 'Licence scope',
      paragraphs: [
        'The code is released under AGPL-3.0-only, and the original interpretive writing, narration and exhibit backgrounds under CC BY-NC-SA 4.0. Third-party model licences belong to their respective authors and are listed on the credits page.',
        'The WonZoo and Leon Made This marks are Brand Assets; the rights in them are reserved and are not granted by the licences above.',
      ],
    },
    {
      title: 'Acceptable use',
      paragraphs: [
        'Do not access the site in a way that interferes with other visitors, do not attempt to bypass or break its security or access controls, and do not use its content to mislead anyone.',
      ],
    },
    {
      title: 'Limitation of liability',
      paragraphs: [
        'The site is provided “as is”. To the extent the law allows, we are not liable for indirect losses arising from your use of it.',
      ],
    },
    {
      title: 'Changes to these terms',
      paragraphs: [
        'If these terms change, the updated version will be published on this page with a new date. Continuing to use the site means you accept the updated terms.',
      ],
    },
  ],
  contactLabel: 'Contact us',
  contactEmail: SUPPORT_EMAIL,
}

const documentsByLocale: Readonly<
  Record<Locale, { about: DocumentContent; contact: DocumentContent; terms: DocumentContent }>
> = {
  'zh-CN': { about: aboutZhCN, contact: contactZhCN, terms: termsZhCN },
  'zh-TW': { about: aboutZhTW, contact: contactZhTW, terms: termsZhTW },
  ja: { about: aboutJa, contact: contactJa, terms: termsJa },
  en: { about: aboutEn, contact: contactEn, terms: termsEn },
}

export function aboutDocumentFor(locale: Locale): DocumentContent {
  return documentsByLocale[locale].about
}

export function contactDocumentFor(locale: Locale): DocumentContent {
  return documentsByLocale[locale].contact
}

export function termsDocumentFor(locale: Locale): DocumentContent {
  return documentsByLocale[locale].terms
}
