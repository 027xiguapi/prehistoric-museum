import type { AssetKind } from '@/src/content/types'
import type { Locale } from '@/src/i18n/locale'

/**
 * Localized content for the public credits and attribution page.
 *
 * The 3D models shown in the museum are third-party assets published by their
 * authors, and the licences they are released under require attribution. This
 * page is generated from the same typed provenance records that feed
 * `THIRD_PARTY_NOTICES.md`, so every model credited here is traceable back to
 * the exact source URL and author recorded in its animal package.
 *
 * All four locales are written out in full. Japanese and Traditional Chinese
 * are real translations, not fallbacks to another locale's copy.
 */
export interface CreditsPageContent {
  readonly title: string
  readonly summary: string
  readonly modelsTitle: string
  readonly modelsIntro: string
  readonly generatedTitle: string
  readonly generatedIntro: string
  readonly generatedNarration: string
  readonly generatedBackground: string
  readonly generatedDerived: string
  readonly licensingTitle: string
  readonly licensingBody: string
  readonly kindLabels: Readonly<Record<AssetKind, string>>
}

const zhCN: CreditsPageContent = {
  title: '素材来源与署名',
  summary:
    'WonZoo 展台里的 3D 动物模型由各自作者创作并公开授权发布。这里逐一致谢，并说明旁白、背景等生成素材的来源。',
  modelsTitle: '第三方 3D 模型',
  modelsIntro:
    '以下模型来自公开的 3D 素材平台，按作者与原始来源逐条列出。每个模型在进入展台前都做过几何压缩、贴图转换与米制归一化，具体改动记录在对应的来源档案中。',
  generatedTitle: '项目生成素材',
  generatedIntro:
    '以下素材由本项目在确稿文案的基础上离线生成，不使用运行时合成：',
  generatedNarration:
    '双语旁白音频，由 Qwen3-TTS CustomVoice 依据已审校文稿离线合成。',
  generatedBackground:
    '展厅背景插画，由 OpenAI 内置图像生成工具依据已审校的栖息地描述生成。',
  generatedDerived:
    '海报与缩略图，由本项目从上述模型渲染并裁切而来。',
  licensingTitle: '许可说明',
  licensingBody:
    '代码、原创科普内容、第三方素材与品牌标识分别适用不同的许可，完整清单请见仓库中的 LICENSING.md 与 THIRD_PARTY_NOTICES.md。',
  kindLabels: {
    model: '3D 模型',
    'embedded-textures': '内嵌贴图',
    background: '展厅背景',
    poster: '海报图',
    thumbnail: '缩略图',
    narration: '旁白音频',
  },
}

const zhTW: CreditsPageContent = {
  title: '素材來源與署名',
  summary:
    'WonZoo 展台裡的 3D 動物模型由各自作者創作並公開授權釋出。這裡逐一誌謝，並說明旁白、背景等生成素材的來源。',
  modelsTitle: '第三方 3D 模型',
  modelsIntro:
    '以下模型來自公開的 3D 素材平台，依作者與原始來源逐條列出。每個模型在進入展台前都做過幾何壓縮、貼圖轉換與公尺制正規化，具體改動記錄在對應的來源檔案中。',
  generatedTitle: '專案生成素材',
  generatedIntro:
    '以下素材由本專案在定稿文案的基礎上離線生成，不使用執行階段合成：',
  generatedNarration:
    '雙語旁白音訊，由 Qwen3-TTS CustomVoice 依已審校文稿離線合成。',
  generatedBackground:
    '展廳背景插畫，由 OpenAI 內建圖像生成工具依已審校的棲地描述生成。',
  generatedDerived:
    '海報與縮圖，由本專案從上述模型算圖並裁切而來。',
  licensingTitle: '授權說明',
  licensingBody:
    '程式碼、原創科普內容、第三方素材與品牌標識分別適用不同的授權，完整清單請見倉庫中的 LICENSING.md 與 THIRD_PARTY_NOTICES.md。',
  kindLabels: {
    model: '3D 模型',
    'embedded-textures': '內嵌貼圖',
    background: '展廳背景',
    poster: '海報圖',
    thumbnail: '縮圖',
    narration: '旁白音訊',
  },
}

const ja: CreditsPageContent = {
  title: '素材の出典とクレジット',
  summary:
    'WonZoo の展示に登場する 3D 動物モデルは、それぞれの作者が制作し公開ライセンスで提供している素材です。ここに作者を明記し、ナレーションや背景など生成素材の出典も説明します。',
  modelsTitle: 'サードパーティの 3D モデル',
  modelsIntro:
    '以下のモデルは公開の 3D アセットサイトから取得したもので、作者と原典ごとに記載しています。各モデルは展示に組み込む前にジオメトリ圧縮、テクスチャ変換、メートル単位への正規化を行い、その内容は各出典記録に残しています。',
  generatedTitle: 'プロジェクト生成素材',
  generatedIntro:
    '以下の素材は、確定したテキストをもとに本プロジェクトがオフラインで生成したもので、実行時の合成は行っていません。',
  generatedNarration:
    'バイリンガルのナレーション音声。Qwen3-TTS CustomVoice により、校正済みの原稿からオフラインで合成しました。',
  generatedBackground:
    '展示背景のイラスト。OpenAI の組み込み画像生成ツールにより、校正済みの生息環境の記述から生成しました。',
  generatedDerived:
    'ポスターとサムネイル。本プロジェクトが上記のモデルからレンダリングして切り出したものです。',
  licensingTitle: 'ライセンスについて',
  licensingBody:
    'コード、オリジナルの解説文、サードパーティ素材、ブランド標識にはそれぞれ異なるライセンスが適用されます。完全な一覧はリポジトリの LICENSING.md と THIRD_PARTY_NOTICES.md を参照してください。',
  kindLabels: {
    model: '3D モデル',
    'embedded-textures': '埋め込みテクスチャ',
    background: '展示背景',
    poster: 'ポスター画像',
    thumbnail: 'サムネイル',
    narration: 'ナレーション音声',
  },
}

const en: CreditsPageContent = {
  title: 'Credits and attributions',
  summary:
    'The 3D animal models in the WonZoo exhibits were made by their respective authors and published under open licences. This page credits each of them and explains where the narration, backgrounds and other generated assets come from.',
  modelsTitle: 'Third-party 3D models',
  modelsIntro:
    'These models come from public 3D asset libraries and are listed by author and original source. Before entering an exhibit each model was geometrically compressed, its textures converted, and its scale normalised to metres; the exact changes are recorded in that model’s provenance file.',
  generatedTitle: 'Project-generated assets',
  generatedIntro:
    'The following assets were generated offline by this project from finalised copy, with no runtime synthesis:',
  generatedNarration:
    'Bilingual narration audio, synthesised offline by Qwen3-TTS CustomVoice from reviewed scripts.',
  generatedBackground:
    'Exhibit background illustrations, generated with the OpenAI built-in image tool from reviewed habitat descriptions.',
  generatedDerived:
    'Posters and thumbnails, rendered and cropped by this project from the models above.',
  licensingTitle: 'Licensing',
  licensingBody:
    'Code, original museum content, third-party material and Brand Assets are covered by different licences. See LICENSING.md and THIRD_PARTY_NOTICES.md in the repository for the full breakdown.',
  kindLabels: {
    model: '3D model',
    'embedded-textures': 'Embedded textures',
    background: 'Exhibit background',
    poster: 'Poster image',
    thumbnail: 'Thumbnail',
    narration: 'Narration audio',
  },
}

export function creditsPageFor(locale: Locale): CreditsPageContent {
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
