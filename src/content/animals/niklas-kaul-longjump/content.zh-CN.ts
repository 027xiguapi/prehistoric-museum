import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "尼克拉斯·考尔（跳远）",
  classificationLabel: "十项全能运动员（跳远）",
  visibleFeature: "看他腾空跃起的姿势——跳远运动员要在空中“走”好几步才落入沙坑。",
  narration: {
    sentences: [
          "这是德国十项全能运动员尼克拉斯·考尔在跳远。",
          "十项全能要连续比十个项目，被称为“田径之王”。"
    ],
    pronunciation: [
      {
        text: "尼克拉斯·考尔（跳远）",
        reading: "ní kè lā sī · kǎo ěr",
      },
    ],
  },
  facts: {
    period: "现代（约 2020 年发布的动作捕捉模型）",
    discoveryRegions: ["德国"],
        size: {
      kind: 'body-length',
      minMeters: 1.8,
      maxMeters: 1.9,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "尼克拉斯·考尔在 2019 年多哈世锦赛上夺得十项全能冠军，成为该项目历史上最年轻的世锦赛冠军。十项全能包括 100 米、跳远、铅球、跳高、400 米、110 米栏、铁饼、撑竿跳高、标枪和 1500 米，两天比完，对速度、力量和耐力都是极限考验。跳远是其中的第二天第一项之外的第二个项目，要求助跑后单脚起跳、双脚落入沙坑。",
  sources: [
    {
        "title": "Niklas Kaul — Olympics.com",
        "url": "https://www.olympics.com/en/athletes/niklas-kaul",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Niklas Kaul — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Niklas_Kaul",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "这是真人运动员的动作捕捉模型，不是动物条目；是否正式发布需品牌与肖像权审核。",
            "身高为公开资料的约数；动作捕捉的具体采集时间未公开。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
