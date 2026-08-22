import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "犀牛甲虫（长戟大兜虫）",
  classificationLabel: "甲虫（金龟子科）",
  visibleFeature: "看雄虫头上那根长长的“犀牛角”，是它摔跤比赛的武器。",
  narration: {
    sentences: [
          "这是犀牛甲虫，世界上最大的甲虫之一。",
          "雄虫头上的长角用来和对手比力气。"
    ],
    pronunciation: [
      {
        text: "犀牛甲虫（长戟大兜虫）",
        reading: "xī niú jiǎ chóng",
      },
    ],
  },
  facts: {
    period: "现代（约 1 亿年前出现至今）",
    discoveryRegions: ["中南美洲热带雨林"],
        size: {
      kind: 'body-length',
      minMeters: 0.1,
      maxMeters: 0.18,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "长戟大兜虫按总体长算是最大的甲虫之一，雄虫的角几乎占身体一半。它们力气惊人，能举起自重数百倍的东西。幼虫在朽木里生活一到两年，成虫主要吃树汁和水果。角的大小差异很大，也受幼虫期营养影响。",
  sources: [
    {
        "title": "Hercules beetle — 内布拉斯加大学（UNL）昆虫系",
        "url": "https://entomology.unl.edu/k12/herculesbeetle.htm",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dynastes hercules — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Dynastes_hercules/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长含角；不含角时雄虫约 5–8 厘米。",
            "“举重数百倍”的倍数因研究而异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
