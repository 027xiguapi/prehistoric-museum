import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "阿尔卑斯山羊",
  classificationLabel: "家养山羊（阿尔卑斯品种）",
  visibleFeature: "看看它向后弯曲的角和竖起的耳朵，那是登山高手的装备。",
  narration: {
    sentences: [
          "这是阿尔卑斯山羊，来自欧洲高山地区的家养山羊品种。",
          "它的蹄子像登山鞋一样，能在陡峭的岩壁上稳稳站立。"
    ],
    pronunciation: [
      {
        text: "阿尔卑斯山羊",
        reading: "ā ěr bēi sī shān yáng",
      },
    ],
  },
  facts: {
    period: "现代（家养历史数百年）",
    discoveryRegions: ["欧洲阿尔卑斯山区","世界各地牧场"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.4,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "阿尔卑斯山羊是瑞士和法国阿尔卑斯山区培育出的著名奶山羊，能适应寒冷的高山气候，产奶量很大，所以被带到了世界各地的牧场。山羊的蹄子外硬内软，分成两瓣还能侧向张开，就像自带两双抓岩鞋。它们几乎什么都吃——草、嫩枝、树皮，连陡坡上的灌木也啃得干干净净。",
  sources: [
    {
        "title": "Goat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/goat-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Alpine goat — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Alpine_goat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年羊的头尾长度；体重和体型随牧场选育差别较大。",
            "“阿尔卑斯山羊”既指家养奶羊品种，也常被用来称呼野生的阿尔卑斯野山羊（羱羊），本页以家养品种为准。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
