import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "蜈蚣",
  classificationLabel: "多足类节肢动物",
  visibleFeature: "数数它身体两侧的腿——每一节都有一对，跑起来像波浪。",
  narration: {
    sentences: [
          "这是蜈蚣，一种有很多很多条腿的小猎人。",
          "它每一节身体都长着一对腿，走路时腿像波浪一样依次摆动。"
    ],
    pronunciation: [
      {
        text: "蜈蚣",
        reading: "wú gōng",
      },
    ],
  },
  facts: {
    period: "现代（约 4 亿年前出现至今）",
    discoveryRegions: ["全球温暖地区"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "蜈蚣是夜行的小型捕食者，用有毒的“毒颚”制服昆虫和蜘蛛。它名字里虽有“百足”，但大多数蜈蚣只有几十条腿；每一节身体恰好一对腿，这是辨认蜈蚣和马陆的关键——马陆每节有两对。蜈蚣喜欢潮湿的落叶层和石块下，是森林里重要的“清道夫”。",
  sources: [
    {
        "title": "Centipede — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/centipede",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Centipedes — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/centipedes/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间覆盖常见科属；热带巨型蜈蚣可更长。",
            "“每一节一对腿”适用于绝大多数蜈蚣，少数类群有例外。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
