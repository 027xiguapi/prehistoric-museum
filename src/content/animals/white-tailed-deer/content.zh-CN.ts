import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "白尾鹿",
  classificationLabel: "鹿科动物（白尾鹿）",
  visibleFeature: "看它尾巴的背面——受惊逃跑时会高高竖起，露出一面白色“小旗帜”。",
  narration: {
    sentences: [
          "这是白尾鹿，北美洲最常见的鹿。",
          "刚出生的小鹿身上有白色斑点，像撒了一层糖霜。"
    ],
    pronunciation: [
      {
        text: "白尾鹿",
        reading: "bái wěi lù",
      },
    ],
  },
  facts: {
    period: "现代（鹿科延续数千万年）",
    discoveryRegions: ["北美洲","南美洲北部"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2.1,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "白尾鹿受惊时会高高竖起尾巴，露出雪白的尾底，像一面小旗子给身后的同伴“报警”。刚出生的小鹿趴在草丛里一动不动，白色斑点是它的“隐身衣”。公鹿的鹿角每年冬天脱落、春天重新长出，是动物界长得最快的骨头之一。它的弹跳力惊人，能跃过两米高的障碍，一口气跳出八九米远。",
  sources: [
    {
        "title": "White-tailed deer — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/white-tailed-deer",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "White-tailed deer — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/White-tailed_deer",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“鹿”草稿为不同物种的不同模型，正式收录前将复核种类区分。",
            "体型南北差异很大，北方种群通常更大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
