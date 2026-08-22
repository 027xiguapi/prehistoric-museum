import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "乌桕大蚕蛾",
  classificationLabel: "最大的蛾类之一",
  visibleFeature: "看它翅膀尖上的“蛇头”花纹——那是吓唬鸟类的保护色。",
  narration: {
    sentences: [
          "这是乌桕大蚕蛾，翅膀展开比你的手掌还大得多。",
          "它的成虫口器退化，一生不吃不喝，只为了繁殖。"
    ],
    pronunciation: [
      {
        text: "乌桕大蚕蛾",
        reading: "wū jiù dà cán é",
      },
    ],
  },
  facts: {
    period: "现代（蚕蛾科延续数千万年）",
    discoveryRegions: ["南亚与东南亚","中国南方"],
        size: {
      kind: 'wingspan',
      minMeters: 0.24,
      maxMeters: 0.3,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "乌桕大蚕蛾是世界上翅展最大的蛾类之一，最大个体翅展接近 30 厘米。翅膀尖端的透明“小窗”和蛇头状斑纹能在停歇时迷惑捕食者。幼虫取食乌桕、樟树、肉桂等叶片，茧丝坚韧，在印度被收集制成耐用的“野蚕丝”。成虫口器完全退化，靠幼虫期储存的脂肪度过约一到两周的成虫寿命，全部能量都用于交配和产卵。",
  sources: [
    {
        "title": "Atlas moth — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Attacus_atlas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Attacus atlas — 台湾生命大百科",
        "url": "https://taieol.tw/pages/13380",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "翅展区间为大个体范围；常见个体略小。",
            "“世界最大”与赫克力士长戟大蚕蛾等在面积和翅展上各有领先，说法不一。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
