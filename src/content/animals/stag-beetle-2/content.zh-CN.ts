import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "锹形虫（模型二）",
  classificationLabel: "锹甲（雄性大颚）",
  visibleFeature: "看它发达的上颚——锹甲的名字来自武士头盔上的“锹形”装饰。",
  narration: {
    sentences: [
          "这是锹形虫，雄虫用大颚决斗，争夺吸食树汁的地盘。",
          "被它的大颚夹住并不会太痛——大颚主要是用来“举”对手的。"
    ],
    pronunciation: [
      {
        text: "锹形虫（模型二）",
        reading: "qiāo xíng chóng",
      },
    ],
  },
  facts: {
    period: "现代（锹甲科延续数千万年）",
    discoveryRegions: ["东亚与东南亚森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "锹甲科有一千三百多种，雄虫的大颚用于同类决斗：把对手夹住、举起、摔下树干，赢者占据流汁液的树洞。大颚看似吓人，咬合力却不如雌虫的小颚。幼虫在朽木或腐殖土里生活一到数年，成虫寿命只有一个夏天。锹甲的体型与幼年期吃到的腐木量密切相关——同一窝幼虫养出的成虫，大颚长度能差好几倍。",
  sources: [
    {
        "title": "Stag beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stag_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "クワガタムシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本批次中有两个锹甲模型，此为模型二；具体物种未在模型数据中标注。",
            "体长区间含大颚；雌虫明显更小。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
