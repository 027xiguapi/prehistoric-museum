import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "章鱼",
  classificationLabel: "头足纲软体动物",
  visibleFeature: "数数它的腕足有几条？章鱼有八条，每条内侧都有吸盘。",
  narration: {
    sentences: [
          "这是章鱼，海洋里的“八爪魔法师”。",
          "它会变色、会喷墨汁，还是无脊椎动物里的解题高手。"
    ],
    pronunciation: [
      {
        text: "章鱼",
        reading: "zhāng yú",
      },
    ],
  },
  facts: {
    period: "现代（约 3 亿年前至今）",
    discoveryRegions: ["世界各海洋"],
        size: {
      kind: 'group-range',
      minMeters: 0.12,
      maxMeters: 3,
      note: "章鱼种类很多，小型种腕展只有十几厘米，最大的太平洋巨型章鱼腕展可达 3 米以上。",
    },
    diet: "carnivore",
  },
  parentClassificationNote: "章鱼有三颗心脏和蓝色的血液，八条腕足上各有上百个吸盘，能各自“尝”味道。它的皮肤布满色素细胞，几秒钟就能改变颜色和花纹。遇到危险时喷出墨汁迷惑对手，还能钻进比自己身体小得多的缝隙——因为章鱼全身没有硬骨头。",
  sources: [
    {
        "title": "Octopus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/octopus",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Octopus — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/invertebrates/facts/octopus",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页介绍章鱼类群，模型具体种类待复核。",
            "体型以腕展描述类群区间，不作单一精确值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
