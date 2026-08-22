import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "绵羊",
  classificationLabel: "牛科家畜",
  visibleFeature: "看它卷卷的厚羊毛，像穿了一件云朵外套。",
  narration: {
    sentences: [
          "这是绵羊，人类最早驯养的动物之一。",
          "它的羊毛一年年生长，春天剪下来能纺成暖暖的毛线。"
    ],
    pronunciation: [
      {
        text: "绵羊",
        reading: "mián yáng",
      },
    ],
  },
  facts: {
    period: "现代（约 8000–11000 年前驯化至今）",
    discoveryRegions: ["全球（驯化自亚洲野羊）"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "绵羊的祖先生活在亚洲的山地，大约一万年前被人类驯化。它们是反刍动物，有四个胃室把草慢慢消化；瞳孔是横长的长方形，视野特别宽，方便随时发现危险。绵羊认得同伴的脸，群体里彼此照应。",
  sources: [
    {
        "title": "Sheep — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/sheep",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Ovis aries — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Ovis_aries/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年绵羊常见区间，品种间差异较大。",
            "羊毛用途描述为通用介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
