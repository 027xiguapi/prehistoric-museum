import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "普通章鱼",
  classificationLabel: "头足类动物（章鱼科）",
  visibleFeature: "数一数它的八条腕，再看看皮肤上的小疙瘩——它会随时“换衣服”。",
  narration: {
    sentences: [
          "这是普通章鱼，海洋里最会变戏法的无脊椎动物。",
          "它有八条灵活的腕和三颗心脏，皮肤还能一秒变色。"
    ],
    pronunciation: [
      {
        text: "普通章鱼",
        reading: "pǔ tōng zhāng yú",
      },
    ],
  },
  facts: {
    period: "现代（章鱼类延续数亿年）",
    discoveryRegions: ["热带与温带海域"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "普通章鱼是“深海爱因斯坦”：会开罐子、走迷宫、模仿其他动物，短期的记忆和学习能力让科学家惊叹。皮肤里密布着成千上万的色素细胞，配合能竖起的皮肤小乳突，几秒内就能和礁石融为一体。两颗心给鳃泵血，一颗心供应全身，血液里用含铜的蛋白质运氧，所以血是蓝色的。",
  sources: [
    {
        "title": "Octopus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/octopus-mollusk",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Common octopus — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Common_octopus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间以腕展开的“臂距”计，因个体差异很大，仅作家庭友好的近似。",
            "本条目与既有“章鱼”草稿为同类动物的不同模型，正式收录前将择一保留或合并。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
