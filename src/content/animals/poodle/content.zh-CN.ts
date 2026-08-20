import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "贵宾犬",
  classificationLabel: "水猎犬（三种体型）",
  visibleFeature: "看它的“狮子装”修剪——那些毛球本来是为了保护关节和心脏不受冷水刺激。",
  narration: {
    sentences: [
          "这是贵宾犬，游泳健将出身的聪明犬。",
          "它在犬类智商排行榜上常年名列第二。"
    ],
    pronunciation: [
      {
        text: "贵宾犬",
        reading: "guì bīn quǎn",
      },
    ],
  },
  facts: {
    period: "现代（数百年历史；法国把它定为国犬）",
    discoveryRegions: ["德国（名称与祖先来源）","法国（品种定型与标准化）"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.9,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "贵宾犬的英文名 Poodle 来自德语“pudeln”（扑水），祖先是欧洲的水猎犬，负责从冷水中衔回鸭子。标志性的修剪其实是工作服：胸部和关节处的毛球保暖，其余部位剃短以便游泳。法国把它发展成马戏团明星和国犬。贵宾犬按体型分标准型、迷你型和玩具型，卷毛几乎不掉落，常被称为“低致敏”犬——但对狗过敏源自皮屑而非毛发本身，没有任何犬种完全不过敏。",
  sources: [
    {
        "title": "Poodle — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/poodle-standard/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Poodle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Poodle",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间对应标准型；迷你型与玩具型明显更小。",
            "“低致敏”是流行说法，医学上不存在完全不过敏的犬种。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
