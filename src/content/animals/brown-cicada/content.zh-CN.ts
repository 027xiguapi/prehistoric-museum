import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "油蝉",
  classificationLabel: "夏蝉（日本常见种）",
  visibleFeature: "看它透明的翅膀和鼓鼓的眼睛——盛夏的“知了知了”就来自它。",
  narration: {
    sentences: [
          "这是油蝉，日本夏天最有代表性的蝉鸣“ミーン、ミーン”就来自它。",
          "雄蝉腹部的鼓膜振动发声，是昆虫世界的大嗓门。"
    ],
    pronunciation: [
      {
        text: "油蝉",
        reading: "yóu chán",
      },
    ],
  },
  facts: {
    period: "现代（蝉科延续数千万年）",
    discoveryRegions: ["日本","东亚部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.06,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "油蝉（アブラゼミ）是日本最常见的蝉之一，盛夏正午的蝉鸣多半来自它。只有雄蝉会鸣叫：腹部基部的鼓膜器每秒振动上百次，中空的腹腔充当共鸣箱。蝉的若虫在地下生活三到六年，用刺吸式口器吸食树根汁液，夏夜爬出地面羽化，成虫寿命只有几周。雌蝉会把卵产在枯枝里，卵孵化后若虫落地入土，开始下一轮地下生活。",
  sources: [
    {
        "title": "Graptopsaltria nigrofuscata — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Graptopsaltria_nigrofuscata",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "アブラゼミ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/aburazemi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含翅膀；若虫地下生活年限为估计范围。",
            "“油蝉”中文也叫大油蝉，不同地区俗称不一。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
