import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "松狮犬",
  classificationLabel: "中国古老犬种",
  visibleFeature: "看它的舌头——蓝黑色的舌头是松狮犬独一无二的标志。",
  narration: {
    sentences: [
          "这是松狮犬，来自中国的古老犬种。",
          "它走路像踩着高跷，是因为后腿膝盖几乎不弯曲。"
    ],
    pronunciation: [
      {
        text: "松狮犬",
        reading: "sōng shī quǎn",
      },
    ],
  },
  facts: {
    period: "现代（中国两千多年前已有类似记载）",
    discoveryRegions: ["中国北方（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.7,
      maxMeters: 0.85,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "松狮犬是中国最古老的犬种之一，汉代的陶俑中就有它的形象。它曾承担狩猎、拉橇和看护的工作。蓝黑色的舌头来自高浓度的黑色素沉积，幼犬出生时舌头是粉色的，几周后才变深。后腿几乎直立的“踩高跷”步态来自角度很小的膝关节。它性格独立、像猫一样爱干净、对家人忠诚但对陌生人冷淡，双层厚被毛需要定期梳理，夏天怕热。",
  sources: [
    {
        "title": "Chow Chow — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/chow-chow/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chow Chow — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chow_Chow",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“两千多年历史”来自陶俑等间接证据，确切的品种谱系无法追溯那么久远。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
