import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "澳大利亚牧羊犬",
  classificationLabel: "牧羊犬（其实来自美国）",
  visibleFeature: "看它的陨石色斑纹——名字里有“澳大利亚”，它却是在美国培育的。",
  narration: {
    sentences: [
          "这是澳大利亚牧羊犬，牛仔牧场上最忙碌的狗。",
          "它会用眼神和快速的移动把羊群赶到一起。"
    ],
    pronunciation: [
      {
        text: "澳大利亚牧羊犬",
        reading: "ào dà lì yà mù yáng quǎn",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪在美国西部定型）",
    discoveryRegions: ["美国西部（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.8,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "澳大利亚牧羊犬的名字是个误会：19 世纪从澳大利亚来到美国的巴斯克牧羊人带着他们的牧羊犬，美国人便把这些狗叫作“澳大利亚牧羊犬”，而真正定型这个品种的是美国西部的牧场。它聪明、精力无穷，以“会管理牲畜”著称，还常在牛仔竞技表演和飞盘比赛中亮相。常见陨石色（merle）斑纹可能伴随眼部遗传问题，负责任的繁育需要做基因检测。它需要大量运动和脑力工作，不适合久坐的家庭。",
  sources: [
    {
        "title": "Australian Shepherd — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/australian-shepherd/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Australian Shepherd — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Australian_Shepherd",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；部分个体天生短尾。",
            "“产自澳大利亚”是历史上的误传，品种定型发生在美国。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
