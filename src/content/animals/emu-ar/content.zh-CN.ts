import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "鸸鹋（AR 版）",
  classificationLabel: "大型不会飞的鸟",
  visibleFeature: "看它长长的脖子和三条脚趾的大脚——鸸鹋跑起来时速可达 50 公里。",
  narration: {
    sentences: [
          "这是鸸鹋，澳大利亚最大的鸟，个子仅次于鸵鸟。",
          "它虽然不会飞，却是个长跑健将。"
    ],
    pronunciation: [
      {
        text: "鸸鹋（AR 版）",
        reading: "ér miáo",
      },
    ],
  },
  facts: {
    period: "现代（鸸鹋属延续数百万年）",
    discoveryRegions: ["澳大利亚大部分地区"],
        size: {
      kind: 'body-length',
      minMeters: 1.4,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "鸸鹋是世界第二高的鸟，站立高度可达 1.9 米。它的羽毛蓬松得像枯草，小翅膀退化成只有手指大小。鸸鹋爸爸负责孵蛋和带娃：它会在巢上守约八周，期间几乎不吃不喝。鸸鹋是机会主义杂食者，吃种子、果实、花朵、昆虫和小蜥蜴，还常吞石头帮助磨碎食物。它与袋鼠一起出现在澳大利亚国徽上——据说因为它们都“只能向前、不会后退”。",
  sources: [
    {
        "title": "Emu — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emu",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Emu — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Emu",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为嘴尖到尾端长度；站立高度可达 1.9 米。",
            "国徽上“不会后退”的说法是流传的解释，并非官方记载的选定理由。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
