import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "家猪",
  classificationLabel: "家畜（聪明的杂食者）",
  visibleFeature: "看它的拱鼻——那是个超级灵敏的“铲子鼻子”，能闻出埋在地下的食物。",
  narration: {
    sentences: [
          "这是家猪，聪明程度在农场动物里数一数二。",
          "它打滚不是不爱干净，而是在给自己涂防晒霜。"
    ],
    pronunciation: [
      {
        text: "家猪",
        reading: "jiā zhū",
      },
    ],
  },
  facts: {
    period: "现代（约九千年前在多地分别驯化）",
    discoveryRegions: ["欧亚多地驯化","今遍布全世界"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.8,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "家猪由野猪驯化而来，在东亚和中东被独立驯化。它是农场里最聪明的动物之一：能学会走迷宫、照镜子找食物，甚至用操纵杆玩简单的电子游戏。猪没有汗腺，靠泥浆降温防晒，拱泥也是觅食天性。它的鼻子灵敏度堪比缉毒犬，欧洲人至今仍用猪寻找地下的松露。杂食的猪几乎什么都吃，这也是它能遍布全球的原因。",
  sources: [
    {
        "title": "Pig — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/pig-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Domestic pig — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Domestic_pig",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；不同品种体型差异极大。",
            "驯化中心的具体数量（两个还是多个）学界仍在讨论。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
