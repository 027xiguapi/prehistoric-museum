import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "北极狐",
  classificationLabel: "犬科动物（北极狐）",
  visibleFeature: "看它小小的圆耳朵——耳朵小是为了在冰天雪地里少散失热量。",
  narration: {
    sentences: [
          "这是北极狐，冬天一身雪白、夏天换成灰褐色的“换装大师”。",
          "它蓬松的大尾巴睡觉时正好当被子盖。"
    ],
    pronunciation: [
      {
        text: "北极狐",
        reading: "běi jí hú",
      },
    ],
  },
  facts: {
    period: "现代（北极狐延续数十万年）",
    discoveryRegions: ["北极圈周边的冻原"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 1.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "北极狐的冬装和夏装是两件完全不同的“外套”：冬天的白毛既保暖又是雪地里的迷彩，夏天的灰褐色则融入冻原的岩石和苔藓。它的毛皮保暖本领在哺乳动物里数一数二，能扛住零下五十度的严寒；尾巴又大又厚，睡觉时正好当被子。它还是“捾漏专家”，常跟着北极熊吃剩饭，也会跳起来砸进雪里抓旅鼠。",
  sources: [
    {
        "title": "Arctic fox — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Arctic-fox",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Arctic fox — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/arctic-fox",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长含尾；旅鼠多的年份一窝可生十几只幼崽，旅鼠少时几乎不繁殖。",
            "部分种群的北极狐冬季会迁徙数百公里，行为差异很大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
