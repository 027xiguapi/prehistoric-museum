import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "大蓝闪蝶",
  classificationLabel: "雨林蝴蝶（结构色）",
  visibleFeature: "看它翅膀正面的亮蓝色——那不是颜料，是千万片鳞片折射出来的光。",
  narration: {
    sentences: [
          "这是大蓝闪蝶，中南美雨林里的“会飞的蓝宝石”。",
          "它翅膀背面是朴实的褐色，合起翅膀就隐身了。"
    ],
    pronunciation: [
      {
        text: "大蓝闪蝶",
        reading: "dà lán shǎn dié",
      },
    ],
  },
  facts: {
    period: "现代（蛺蝶科延续数千万年）",
    discoveryRegions: ["中美洲与南美洲的热带雨林"],
        size: {
      kind: 'wingspan',
      minMeters: 0.12,
      maxMeters: 0.15,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "大蓝闪蝶的蓝是结构色：鳞片表面有圣诞树状的纳米结构，只反射蓝色波长的光，所以角度一变颜色就变，用水沾湿还会暂时变暗。这种闪烁的飞行让捕食者难以锁定。成虫口器只能吸食液体，食谱是发酵烂果、树汁甚至动物尸体渗出的液体。幼虫吃豆科植物，身上的细毛会刺激皮肤。雨林部落曾把闪蝶翅膀镶嵌成工艺品。",
  sources: [
    {
        "title": "Morpho — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Morpho",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Blue morpho — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/morpho-butterfly",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "翅展区间按大蓝闪蝶；闪蝶属不同种差异较大。",
            "工艺品贸易如今多来自人工养殖，而非野外捕捉。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
