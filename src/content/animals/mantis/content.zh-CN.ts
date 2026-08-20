import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "中华大刀螳",
  classificationLabel: "捕食性昆虫（镰刀前足）",
  visibleFeature: "看它举起的“大刀”——那对前足上的刺能牢牢锁住猎物。",
  narration: {
    sentences: [
          "这是中华大刀螳，举着大刀等待猎物的伏击高手。",
          "它是唯一能把头转过肩膀向后看的昆虫。"
    ],
    pronunciation: [
      {
        text: "中华大刀螳",
        reading: "zhōng huá dà dāo táng",
      },
    ],
  },
  facts: {
    period: "现代（螳螂目延续上亿年）",
    discoveryRegions: ["东亚","作为入侵种引入北美"],
        size: {
      kind: 'body-length',
      minMeters: 0.07,
      maxMeters: 0.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "中华大刀螳是体型最大的螳螂之一，三角形的头能灵活转动，复眼盯着移动的猎物。它的捕捉足折起来像在“祈祷”，展开时锯齿相扣，猎物几乎无法逃脱，从苍蝇、蚱蜢到小蜥蜴都在菜单上。雌螳螂有时会在交配后吃掉雄螳螂——但这是在圈养紧张环境下更常见的行为，野外并不普遍。它产的卵块（螵蛸）能安全过冬，春天一次孵化上百只小螳螂。",
  sources: [
    {
        "title": "Chinese mantis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chinese_mantis",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオカマキリ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ookamakiri.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含细长的腹部末端与翅膀尖。",
            "“性食同类”被流行文化夸大，野外发生率有限。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
