import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "山羊",
  classificationLabel: "牛科家畜",
  visibleFeature: "看它弯弯的角和方方的瞳孔，爬起岩石来像走平地。",
  narration: {
    sentences: [
          "这是山羊，最能爬高的家畜。",
          "它的瞳孔是横着的长方形，看得特别宽。"
    ],
    pronunciation: [
      {
        text: "山羊",
        reading: "shān yáng",
      },
    ],
  },
  facts: {
    period: "现代（约 1 万年前驯化至今）",
    discoveryRegions: ["全球（驯化自野山羊）"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "山羊约一万年前在西亚被驯化，是“清道夫式”的食草动物——灌木、荆棘、树皮都吃，能踩着几乎垂直的岩壁找食物。它们的横长方形瞳孔视野接近 320°，随时发现天敌。山羊好奇心强，喜欢探索和攀高。",
  sources: [
    {
        "title": "Goat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/goat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Goat — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Capra_hircus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年山羊常见区间，品种差异大。",
            "瞳孔视野角度为研究近似值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
