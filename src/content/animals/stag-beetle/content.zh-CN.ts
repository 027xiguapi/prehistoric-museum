import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "锹甲",
  classificationLabel: "甲虫（锹甲科）",
  visibleFeature: "看它头上那对像鹿角一样的大颚，那是雄锹甲的“宝剑”。",
  narration: {
    sentences: [
          "这是锹甲，一种长着大颚的甲虫。",
          "雄锹甲的大颚像鹿角，主要用来和对手比摔跤。"
    ],
    pronunciation: [
      {
        text: "锹甲",
        reading: "qiāo jiǎ",
      },
    ],
  },
  facts: {
    period: "现代（约 1 亿年前出现至今）",
    discoveryRegions: ["亚洲东部","欧洲"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "锹甲的大颚并不是用来咬人的，而是雄虫之间争夺树汁和地盘的“摔跤武器”。它们小时候以腐朽的木头为食，要在树洞里住上好几年才变成甲虫。因为依赖老树，锹甲成了森林健康的“指示物种”——有锹甲的地方，说明森林里有足够多的老树和枯木。",
  sources: [
    {
        "title": "Stag beetle — 英国野生动物信托（The Wildlife Trusts）",
        "url": "https://www.wildlifetrusts.org/wildlife-explorer/invertebrates/beetles/stag-beetle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Lucanidae — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/stag-beetle",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖常见雄性个体；雌性没有大颚且更小。",
            "幼虫在朽木中生活的年数随气候与树种变化，为近似描述。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
