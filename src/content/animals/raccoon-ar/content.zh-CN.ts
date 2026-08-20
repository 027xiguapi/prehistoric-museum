import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "浣熊（AR 版）",
  classificationLabel: "浣熊科动物（北美浣熊）",
  visibleFeature: "找找它脸上的黑色“蒙面巾”，像戴着眼罩的小海盗。",
  narration: {
    sentences: [
          "这是浣熊，北美洲最会“洗东西”的小机灵鬼。",
          "它把食物放进水里搓来搓去，小手灵活得能打开瓶盖。"
    ],
    pronunciation: [
      {
        text: "浣熊（AR 版）",
        reading: "huàn xióng",
      },
    ],
  },
  facts: {
    period: "现代（浣熊科延续数百万年）",
    discoveryRegions: ["北美洲（起源）","欧洲与日本（引入）"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 1,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "浣熊的黑眼罩不只是“妆容”：深色毛发能减少反光，帮它在夜里看清东西。它的前爪极其灵敏，沾水后更像人的手指，“洗食物”其实是用小手摸清食物的形状和能不能吃。它还是城市生存冠军，开垃圾桶、翻后院样样精通；科学家做过测试，浣熊能记住打开复杂锁扣的方法长达三年。",
  sources: [
    {
        "title": "Raccoon — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/raccoon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Raccoon — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Raccoon",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“浣熊”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "体长含尾；城市里的浣熊常比野外个体更胖。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
