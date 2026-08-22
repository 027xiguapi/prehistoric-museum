import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "蝴蝶",
  classificationLabel: "昆虫",
  visibleFeature: "看它两对彩色的大翅膀，上面布满了细细的鳞片花纹。",
  narration: {
    sentences: ["这是蝴蝶，一种会飞的昆虫。","它的翅膀上布满彩色鳞片，扇动起来就能在花丛间飞舞。"],
    pronunciation: [
      { text: "蝴蝶", reading: "hú dié" },
    ],
  },
  facts: {
    period: "现代（全新世）",
    discoveryRegions: ["全球各大洲（南极洲除外）"],
    size: {
      kind: 'wingspan',
      minMeters: 0.05,
      maxMeters: 0.12,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "蝴蝶是常见的昆虫，它们有两对大大的翅膀，上面布满细小的鳞片，形成美丽的颜色和花纹。蝴蝶的一生要经历卵、幼虫、蛹和成虫四个阶段，这是非常神奇的变化。它们用长长的口器吸食花蜜，是帮助花朵授粉的小帮手。",
  sources: [
    {
        "title": "Butterfly — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/butterfly-insect",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Butterflies — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/butterflies",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["蝴蝶种类繁多、大小和颜色差异很大，本页以常见的花蝴蝶为代表。"],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentZhCN
