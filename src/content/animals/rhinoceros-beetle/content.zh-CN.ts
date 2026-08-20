import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "独角仙",
  classificationLabel: "兜虫（日本国民昆虫）",
  visibleFeature: "看它分叉的头角——像迷你犀牛的角，能把对手挑起来摔出去。",
  narration: {
    sentences: [
          "这是独角仙，日本孩子夏天最想抓到的昆虫。",
          "它能举起比自己重几十倍的东西，是昆虫界的大力士。"
    ],
    pronunciation: [
      {
        text: "独角仙",
        reading: "dú jiǎo xiān",
      },
    ],
  },
  facts: {
    period: "现代（金龟总科延续上亿年）",
    discoveryRegions: ["日本","东亚森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.04,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "独角仙（カブトムシ）的名字来自武士头盔（兜），雄虫的头角向前分叉、胸角短而上翘，打架时钻到对手身下把它举起来扔下树。幼虫（蛴螬）在腐殖土里生活约一年，吃腐叶和朽木；成虫夏夜聚集在麻栎等流汁液的树干上。独角仙在日本是国民级昆虫，孩子们养它、商店夏天卖它；雌虫没有角，负责在腐殖土里产卵。",
  sources: [
    {
        "title": "Japanese rhinoceros beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Japanese_rhinoceros_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "カブトムシ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/kabutomushi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间含角；雌虫无角且明显更小。",
            "本馆“1048 批次”中有犀牛甲虫模型，可能同属近缘；发布前需核对。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
