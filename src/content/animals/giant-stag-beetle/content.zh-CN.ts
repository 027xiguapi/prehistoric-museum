import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "大锹形虫",
  classificationLabel: "大型锹甲（日本）",
  visibleFeature: "看它巨大的颚——像鹿角一样的上颚是雄性决斗的武器。",
  narration: {
    sentences: [
          "这是大锹形虫，日本最大的锹甲。",
          "雄虫用大颚夹住对手，把他从树干上扔下去。"
    ],
    pronunciation: [
      {
        text: "大锹形虫",
        reading: "dà qiāo xíng chóng",
      },
    ],
  },
  facts: {
    period: "现代（锹甲科延续数千万年）",
    discoveryRegions: ["日本","东亚部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.075,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "大锹形虫（オオクワガタ）是日本锹甲中的王者，深受昆虫爱好者喜爱，一只大个体曾被视作“昆虫界的黑钻石”。雄虫的大颚长度可超过身体的一半，颚内侧的齿突形状能判断产地。幼虫以阔叶树的朽木为食，在木头里生活两三年；成虫夏夜聚集在流汁液的栎树等树干上吸食树汁。雌虫颚小得多，负责在朽木里产卵。",
  sources: [
    {
        "title": "Dorcus hopei — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dorcus_hopei",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオクワガタ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ookuwagata.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间含大颚；雌虫明显更小。",
            "中文名在不同资料中也作“大锹甲”“大锹形虫”，以日文汉字名为准。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
