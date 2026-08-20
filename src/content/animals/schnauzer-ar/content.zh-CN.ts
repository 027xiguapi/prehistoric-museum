import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "雪纳瑞犬（AR 版）",
  classificationLabel: "德国梗犬（大胡子）",
  visibleFeature: "看它浓密的眉毛和大胡子——名字 Schnauzer 在德语里就是“大胡子”。",
  narration: {
    sentences: [
          "这是雪纳瑞犬，长着大胡子的德国农场犬。",
          "它曾经在农场上抓老鼠、看门、赶牲畜。"
    ],
    pronunciation: [
      {
        text: "雪纳瑞犬（AR 版）",
        reading: "xuě nà ruì quǎn",
      },
    ],
  },
  facts: {
    period: "现代（中世纪德国农场犬，19 世纪末定型）",
    discoveryRegions: ["德国（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "雪纳瑞是德国南部的古老农场犬，胡须能在抓老鼠时保护口鼻。它分迷你型、标准型和巨型三种体型，模型接近标准型。刚毛被毛需要定期手工拔毛或修剪来保持质感。性格警觉、爱叫、忠诚，是出色的看家犬；腊肠嘴造型使它总像在思考人生。",
  sources: [
    {
        "title": "Standard Schnauzer — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/standard-schnauzer/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Standard Schnauzer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standard_Schnauzer",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只雪纳瑞模型，二者来源不同；发布前需决定去留或合并。",
            "体长区间对应标准型，且不含尾巴。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
