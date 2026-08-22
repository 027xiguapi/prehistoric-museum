import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "柴犬",
  classificationLabel: "日本古老猎犬",
  visibleFeature: "看它机警的三角耳和卷曲的尾巴——柴犬是网络表情“Doge”的原型。",
  narration: {
    sentences: [
          "这是柴犬，日本最古老的犬种之一。",
          "它爱干净得像猫，还会发出独特的“柴犬尖叫”。"
    ],
    pronunciation: [
      {
        text: "柴犬",
        reading: "chái quǎn",
      },
    ],
  },
  facts: {
    period: "现代（血统有数千年历史，1936 年被列为日本天然纪念物）",
    discoveryRegions: ["日本（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "柴犬的血统可追溯到随古人迁入日本列岛的犬，数千年间在山地协助猎捕小鸟和小兽。“柴”字一说来自它红褐色的毛像柴枝，一说来自它穿梭的灌木丛（日语“柴”意为灌木）。它独立、爱干净、有领地意识，兴奋或不情愿时会发出惊人的高音尖叫。第二次世界大战后柴犬一度濒临灭绝，如今是日本饲养最多的本土犬，还成了加密货币狗狗币的标志形象。",
  sources: [
    {
        "title": "Shiba Inu — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/shiba-inu/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Shiba Inu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Shiba_Inu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含卷尾。",
            "“柴”字的语源有两种说法，均未完全确证。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
