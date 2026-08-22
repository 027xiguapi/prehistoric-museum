import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "鮟鱇鱼",
  classificationLabel: "深海鱼类（鮟鱇目）",
  visibleFeature: "找一找它头顶那根“钓鱼竿”，末端的小灯会一闪一闪。",
  narration: {
    sentences: [
          "这是鮟鱇鱼，住在黑漆漆的深海里的小小猎手。",
          "它头顶伸出一根钓鱼竿，竿尖的小灯会发光，把好奇的小鱼引过来。"
    ],
    pronunciation: [
      {
        text: "鮟鱇鱼",
        reading: "ān kāng yú",
      },
    ],
  },
  facts: {
    period: "现代（深海鱼类，延续数千万年）",
    discoveryRegions: ["世界各大洋深海"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "鮟鱇鱼头顶的“小灯笼”里住着会发光的细菌，光线其实是细菌制造的，这在漆黑的深海里就像一盏诱捕灯。它的大嘴里长着向内倒的长牙，猎物一旦被咬住就再也退不出去。深海寻找伴侣很难，有些种类的雄鱼会咬住雌鱼共同生活，成为海洋里最奇特的“一家人”。",
  sources: [
    {
        "title": "Anglerfish — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/anglerfish",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Anglerfish — 美国国家海洋和大气管理局（NOAA）",
        "url": "https://oceanexplorer.noaa.gov/facts/anglerfish.html",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "鮟鱇鱼是一个大家族，不同种类体型差别极大；本页给出常见深海种类的区间。",
            "发光细菌共生、雄鱼附着等行为仅见于部分种类，作为家族趣闻介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
