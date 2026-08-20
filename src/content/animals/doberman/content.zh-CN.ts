import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "杜宾犬",
  classificationLabel: "护卫犬",
  visibleFeature: "看它修长结实的身体和警觉的站姿——这是为护卫工作而设计的犬种。",
  narration: {
    sentences: [
          "这是杜宾犬，以它的培育者路易斯·杜伯曼命名。",
          "它又快又壮，是世界上最优秀的护卫犬之一。"
    ],
    pronunciation: [
      {
        text: "杜宾犬",
        reading: "dù bīn quǎn",
      },
    ],
  },
  facts: {
    period: "现代（约 1890 年由路易斯·杜伯曼在德国培育）",
    discoveryRegions: ["德国图林根州（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.95,
      maxMeters: 1.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "19 世纪末，德国阿波尔达镇的税务官路易斯·杜伯曼需要一只能在收税路上保护他的狗，便用当地的牧牛犬、猎犬等犬种混育出杜宾犬。它集速度、力量和警觉于一身，二战中曾作为美国海军陆战队的军犬服役。现代繁育更强调稳定温和的气质：杜宾犬对家人极其依恋，被称为“粘人护卫”。传统的立耳和断尾是人为整形，如今在许多国家已被禁止。",
  sources: [
    {
        "title": "Doberman Pinscher — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/doberman-pinscher/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dobermann — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dobermann",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；模型若呈立耳断尾造型，属传统整形外观。",
            "确切的基础犬种配方没有留下完整记录。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
