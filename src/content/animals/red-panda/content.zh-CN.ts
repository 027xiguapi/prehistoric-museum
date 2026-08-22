import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "小熊猫",
  classificationLabel: "小熊猫科动物",
  visibleFeature: "看它红棕色的毛和又粗又长的尾巴，走路时尾巴帮它保持平衡。",
  narration: {
    sentences: [
          "这是小熊猫，住在亚洲高山竹林里的小小攀爬高手。",
          "它有着红棕色的毛和一条带环纹的大尾巴，最爱吃竹子。"
    ],
    pronunciation: [
      {
        text: "小熊猫",
        reading: "xiǎo xióng māo",
      },
    ],
  },
  facts: {
    period: "现代（数百万年前延续至今）",
    discoveryRegions: ["亚洲（喜马拉雅山区）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 0.6,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "小熊猫和大熊猫名字相似，但其实不是一家：它自成一科，和浣熊、鼬是远亲。它大部分时间在树上度过，用弯曲的爪子牢牢抓住树枝，几乎只吃竹子，偶尔也吃鸟蛋和昆虫。红棕色的厚毛帮它在高山上保暖，尾巴睡觉时还能当围巾盖在身上。",
  sources: [
    {
        "title": "Red Panda — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/red-panda",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Red panda — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/red-panda",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头尾全长的大致区间，尾巴几乎和身体一样长。",
            "本页按草稿呈现，模型中附带南瓜等装饰道具，正式发布前会复核场景道具。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
