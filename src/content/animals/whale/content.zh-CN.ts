import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "鲸鱼",
  classificationLabel: "海洋哺乳动物",
  visibleFeature: "看它巨大的身体和宽宽的尾巴，它是地球上体型最大的动物之一。",
  narration: {
    sentences: ["这是鲸鱼，生活在海洋里的巨型哺乳动物。","它上下摆动尾巴向前游，还要浮出水面呼吸空气。"],
    pronunciation: [
      { text: "鲸鱼", reading: "jīng yú" },
    ],
  },
  facts: {
    period: "现代（全新世）",
    discoveryRegions: ["全球各大洋"],
    size: {
      kind: 'body-length',
      minMeters: 12,
      maxMeters: 18,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "鲸鱼不是鱼，而是生活在海里的哺乳动物。它们用肺呼吸，所以每隔一段时间就要浮出水面换气。鲸鱼用尾巴上下摆动来游泳，身上还有一层厚厚的脂肪来保暖。世界上最大的动物——蓝鲸，就属于鲸鱼大家庭，体长能超过三十米。",
  sources: [
    {
        "title": "Whale — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/whale",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Whales — NOAA",
        "url": "https://www.fisheries.noaa.gov/whales",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["“鲸鱼”是对鲸目动物的通称，本页以常见的大型鲸类为代表介绍，尺寸为家庭阅读的近似范围。"],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentZhCN
