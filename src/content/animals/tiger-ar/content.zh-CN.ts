import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "老虎（AR 版）",
  classificationLabel: "大型猫科动物（虎）",
  visibleFeature: "看看它身上的条纹——连皮肤上都有，而且每一只的图案都不一样。",
  narration: {
    sentences: [
          "这是老虎，世界上最大的猫科动物。",
          "它和大多数猫不一样，特别爱游泳，天热时整天泡在河里。"
    ],
    pronunciation: [
      {
        text: "老虎（AR 版）",
        reading: "lǎo hǔ",
      },
    ],
  },
  facts: {
    period: "现代（虎属延续约 200 万年）",
    discoveryRegions: ["亚洲的森林与草地"],
        size: {
      kind: 'body-length',
      minMeters: 2.5,
      maxMeters: 3.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "老虎是独来独往的丛林之王：它身上的条纹不只是毛上的花纹，皮肤上也有，就像人的指纹一样独一无二。别看它块头大，走路几乎不出声——利爪平时收在肉垫里。它还是猫科里的游泳健将，能横渡宽阔的河流。每只老虎都有自己的领地，用抓树痕和气味做“界碑”，吼叫声能传到两公里外。",
  sources: [
    {
        "title": "Tiger — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/tiger",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Tiger — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/tiger",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本条目与既有“老虎”草稿为同一物种的不同模型，来自不同的下载来源，正式收录前将二选一或合并处理。",
            "体长含尾，亚种之间差异很大：苏门答腊虎最小，东北虎最大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
