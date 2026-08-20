import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "亚特拉斯南洋大兜虫",
  classificationLabel: "大型兜虫（东南亚）",
  visibleFeature: "看它头顶和胸前的三根长角——雄性用角当杠杆，把对手从树枝上撬下去。",
  narration: {
    sentences: [
          "这是亚特拉斯南洋大兜虫，东南亚森林里的大力士。",
          "它的幼虫在腐木里住上一两年，才变成威武的甲虫。"
    ],
    pronunciation: [
      {
        text: "亚特拉斯南洋大兜虫",
        reading: "yà tè lā sī nán yáng dà dōu chóng",
      },
    ],
  },
  facts: {
    period: "现代（金龟总科延续上亿年）",
    discoveryRegions: ["东南亚（马来西亚、印度尼西亚等地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.09,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "亚特拉斯南洋大兜虫（Chalcosoma atlas）是亚洲最大的甲虫之一，雄虫可以长到九厘米。三根角里两根长在胸前、一根长在头顶，战斗方式像摔跤：钻到对手身下把它掀翻。成虫吸食树汁和过熟的果实，幼虫（蛴螬）吃腐殖土和朽木，脾气出了名地暴躁。兜虫的“大力”不是传说——甲虫类能搬动数十倍于体重的物体。",
  sources: [
    {
        "title": "Atlas beetle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Atlas_beetle",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chalcosoma atlas — 台湾生命大百科",
        "url": "https://taieol.tw/pages/33412",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间含角；雌虫没有角且明显更小。",
            "中文俗名众多（南洋大兜、亚特拉斯兜虫等），以学名为准。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
