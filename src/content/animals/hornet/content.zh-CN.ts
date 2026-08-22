import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "日本大黄蜂",
  classificationLabel: "最大的胡蜂",
  visibleFeature: "看它黄色的头部和强大的颚——这是世界上最大的胡蜂。",
  narration: {
    sentences: [
          "这是日本大黄蜂，最大的胡蜂，毒性很强，要远远观察。",
          "蜜蜂对付它的办法是几十只一拥而上，用体温“煮熟”入侵者。"
    ],
    pronunciation: [
      {
        text: "日本大黄蜂",
        reading: "rì běn dà huáng fēng",
      },
    ],
  },
  facts: {
    period: "现代（胡蜂科延续数千万年）",
    discoveryRegions: ["东亚与东北亚（日本、中国、朝鲜半岛等）"],
        size: {
      kind: 'body-length',
      minMeters: 0.035,
      maxMeters: 0.055,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "日本大黄蜂（スズメバチ）体长可达五厘米，毒针长达六毫米，攻击性集中在守护蜂巢的秋季，务必远离。它是蜜蜂的天敌：几只大黄蜂就能摧毁一个蜜蜂巢。日本本土蜜蜂演化出惊人对策——侦察蜂一出现，数百只蜜蜂把它团团围住振动产热，把球心温度升到近 50 度热死大黄蜂。大黄蜂也捕食害虫，森林里不能没有它，人与蜂保持距禽最重要。",
  sources: [
    {
        "title": "Asian giant hornet — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Asian_giant_hornet",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオスズメバチ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/oosuzumebachi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含针与翅膀；蜂后明显大于工蜂。",
            "蜜蜂热球防御主要在日本蜜蜂中观察到，西方蜜蜂不掌握这招。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
