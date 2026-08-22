import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "狮子",
  classificationLabel: "大型猫科动物",
  visibleFeature: "看雄狮脖子上蓬松的鬃毛，像一圈天然的“围巾”。",
  narration: {
    sentences: [
          "这是狮子，草原上唯一群居的大猫。",
          "雄狮脖子上长着蓬松的鬃毛，吼声几公里外都能听到。"
    ],
    pronunciation: [
      {
        text: "狮子",
        reading: "shī zi",
      },
    ],
  },
  facts: {
    period: "现代（豹属约 300 万年前分化至今）",
    discoveryRegions: ["非洲撒哈拉以南","印度吉尔森林"],
        size: {
      kind: 'body-length',
      minMeters: 2.4,
      maxMeters: 3.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "狮子是唯一真正群居的猫科动物，一群（骄傲）由几只雌狮和幼崽组成，雌狮负责大部分捕猎。雄狮的鬃毛既保护脖子也显示身体状态。狮子的吼声能传到 8 公里外，用来宣示领地。野外数量在过去百年大幅下降。",
  sources: [
    {
        "title": "Lion — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/lion",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Lion — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/lion",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖雄狮与雌狮，雄狮更长。",
            "吼声传播距离随环境变化。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
