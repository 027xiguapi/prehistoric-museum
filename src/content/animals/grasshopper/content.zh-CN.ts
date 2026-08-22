import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "蚱蜢",
  classificationLabel: "直翅目昆虫（跳跃能手）",
  visibleFeature: "看它发达的后腿——一蹬能跳出体长二十倍的距离。",
  narration: {
    sentences: [
          "这是蚱蜢，草丛里的跳远冠军。",
          "它的耳朵长在肚子上，不在头上。"
    ],
    pronunciation: [
      {
        text: "蚱蜢",
        reading: "zhà měng",
      },
    ],
  },
  facts: {
    period: "现代（蝗总科延续上亿年）",
    discoveryRegions: ["全世界的草地"],
        size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.08,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "蚱蜢的后腿像弹簧：腿节里的弹性蛋白储能后瞬间释放，把它弹射出去，配合翅膀可以飞出很远。它的听器长在第一腹节两侧，雄虫用后腿摩擦翅膀发声求偶。蚱蜢吃草和禾本科植物，是草原食物链的重要一环——鸟类、蜘蛛、螳螂都以它为食。它与蝗虫是近亲，某些种类密度大增时会聚集成群迁飞成灾。",
  sources: [
    {
        "title": "Grasshopper — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/grasshopper-insect",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Grasshopper — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Grasshopper",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间按常见种类；不同种差异较大。",
            "模型按通称“蚱蜢”处理，未必对应单一物种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
