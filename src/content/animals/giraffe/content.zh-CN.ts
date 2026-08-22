import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "长颈鹿",
  classificationLabel: "最高的陆生动物",
  visibleFeature: "数一数它身上的斑块——每只长颈鹿的花纹都是独一无二的。",
  narration: {
    sentences: [
          "这是长颈鹿，世界上最高的陆生动物。",
          "它的舌头又长又灵活，能够到高高的金合欢树叶。"
    ],
    pronunciation: [
      {
        text: "长颈鹿",
        reading: "cháng jǐng lù",
      },
    ],
  },
  facts: {
    period: "现代（长颈鹿属延续数百万年）",
    discoveryRegions: ["非洲撒哈拉以南的稀树草原"],
        size: {
      kind: 'body-length',
      minMeters: 3.8,
      maxMeters: 4.7,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "长颈鹿站立时高 4–6 米，仅脖子就可达两米，但它的颈椎和人类一样只有 7 块，只是每块都特别长。深蓝色的舌头长达 45 厘米，可以卷住带刺的金合欢枝叶。长颈鹿的心脏重量超过 10 千克，用极高的血压把血液泵上长脖子。每只长颈鹿的斑纹都像指纹一样独特；研究还表明“长颈鹿”可能不止一个物种。",
  sources: [
    {
        "title": "Giraffe — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/giraffe",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Giraffe — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/giraffe",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为躯干前后长度；站立高度（4–6 米）远大于体长。",
            "长颈鹿的物种划分仍有争议：可能是一个物种，也可能是多个物种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
