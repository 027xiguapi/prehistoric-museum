import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "陆龟",
  classificationLabel: "陆栖龟类",
  visibleFeature: "看它高高隆起的背甲，像一座会走路的小山丘。",
  narration: {
    sentences: [
          "这是陆龟，背着“房子”慢慢走路的爬行动物。",
          "它的壳和骨头长在一起，一辈子都背着走。"
    ],
    pronunciation: [
      {
        text: "陆龟",
        reading: "lù guī",
      },
    ],
  },
  facts: {
    period: "现代（龟类约 2 亿年前出现至今）",
    discoveryRegions: ["加拉帕戈斯群岛","印度洋岛屿","非洲大陆"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "巨型陆龟只生活在海岛和非洲的干旱地带，背甲高高的圆顶有助于在凉爽季节保存热量。它们能活过一百岁，一顿饭消化要好几天。龟壳并非“盔甲外套”，而是与肋骨和脊椎长在一起的骨骼。加拉帕戈斯的陆龟帮助达尔文思考出了进化论。",
  sources: [
    {
        "title": "Galápagos tortoise — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Galapagos-tortoise",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Tortoise — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/tortoise",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页以巨型陆龟为代表；常见宠物陆龟要小得多。",
            "寿命与消化速度为近似描述，随物种与环境变化。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
