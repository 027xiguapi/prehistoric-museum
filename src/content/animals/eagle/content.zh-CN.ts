import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "老鹰",
  classificationLabel: "猛禽",
  visibleFeature: "看它宽大的翅膀和弯弯的尖嘴，它是一位厉害的天空猎手。",
  narration: {
    sentences: ["这是老鹰，一种凶猛的大鸟。","它张开宽大的翅膀在高空盘旋，用锐利的眼睛寻找地面上的猎物。"],
    pronunciation: [
      { text: "老鹰", reading: "lǎo yīng" },
    ],
  },
  facts: {
    period: "现代（全新世）",
    discoveryRegions: ["全球各大洲（南极洲除外）"],
    size: {
      kind: 'wingspan',
      minMeters: 1.8,
      maxMeters: 2.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "老鹰是大型猛禽的统称，它们有宽大的翅膀、锐利的爪子和带钩的嘴。老鹰常在高空借助气流盘旋，用极好的视力锁定猎物，再快速俯冲下去。它们大多喜欢开阔的山地、草原和海岸，是食物链顶端的捕食者。",
  sources: [
    {
        "title": "Eagle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/eagle-bird",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Eagles — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/birds/facts/eagles",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["“老鹰”是对多种大型猛禽的通称，本页以常见的雕类为代表，翼展为近似范围。"],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentZhCN
