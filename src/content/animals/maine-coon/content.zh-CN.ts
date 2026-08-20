import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "缅因猫",
  classificationLabel: "家猫品种（巨型长毛猫）",
  visibleFeature: "看它耳朵尖上的“猞猁毛”和蓬松的大尾巴——它是最大的家猫品种之一。",
  narration: {
    sentences: [
          "这是缅因猫，体型巨大却性格温柔的“温柔巨人”。",
          "它的大爪子像雪鞋，是雪地行走的 native 装备。"
    ],
    pronunciation: [
      {
        text: "缅因猫",
        reading: "miǎn yīn māo",
      },
    ],
  },
  facts: {
    period: "现代（品种形成于 19 世纪的美国）",
    discoveryRegions: ["美国缅因州（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.5,
      maxMeters: 1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "缅因猫是美国最古老的自然品种之一，也是缅因州的“州猫”。它骨架粗大、被毛防水、耳朵和脚趾间都有御寒的毛簇，雄性体重可达 8–12 千克。缅因猫性格温和、叫声轻柔，爱跟着人走来走去，许多个体还保留着祖先在农船上捕鼠的敏捷身手。吉尼斯“最长家猫”纪录多次由缅因猫保持——鼻子到尾巴尖超过 1.2 米。",
  sources: [
    {
        "title": "Maine Coon — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Maine_Coon",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Maine Coon — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/maine-coon-cat/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间上限含极长个体（鼻到尾尖可超 1.2 米）；下限为较短雌性。",
            "“源自浣熊杂交”的民间传说在生物学上不成立。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
