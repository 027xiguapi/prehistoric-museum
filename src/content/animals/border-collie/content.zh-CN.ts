import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "边境牧羊犬",
  classificationLabel: "牧羊犬（“最聪明”的犬种）",
  visibleFeature: "看它俯身注视的姿势——这叫“眼神控制”，是牧羊犬赶羊的秘密武器。",
  narration: {
    sentences: [
          "这是边境牧羊犬，被公认为最聪明的犬种。",
          "一只叫“追逐者”的边境牧羊犬记住了一千多个玩具的名字。"
    ],
    pronunciation: [
      {
        text: "边境牧羊犬",
        reading: "biān jìng mù yáng quǎn",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪定型于英格兰与苏格兰边境）",
    discoveryRegions: ["英国（英格兰与苏格兰边境地区）"],
        size: {
      kind: 'body-length',
      minMeters: 0.75,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "边境牧羊犬得名于英格兰与苏格兰的边境山区，那里的牧羊人世代选育“会工作的狗”。现代边牧的血统大多可追溯到 1893 年一只名叫 Old Hemp 的传奇种犬。它用压低身体、紧盯羊群的“眼神”控制羊的走向，学习能力惊人：心理学家斯坦利·科伦把它列为工作服从智力第一的品种，边牧“追逐者”能识别 1022 个玩具的名称。旺盛的精力意味着它把“追移动的东西”当成天职——追孩子的自行车、扫地机器人都在列，需要大量运动和任务。",
  sources: [
    {
        "title": "Border Collie — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/border-collie/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Border Collie — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Border_Collie",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“最聪明”指的是工作服从智力排名，犬类智力有多种衡量方式。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
