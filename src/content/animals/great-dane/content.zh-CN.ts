import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "大丹犬",
  classificationLabel: "巨型犬（“温柔的巨人”）",
  visibleFeature: "看它的个头——前腿直立站起来的大丹犬比很多人都高。",
  narration: {
    sentences: [
          "这是大丹犬，世界上最高的犬种。",
          "它性格温和，不知道自己有多大，总想当一只“膝盖上的小狗”。"
    ],
    pronunciation: [
      {
        text: "大丹犬",
        reading: "dà dān quǎn",
      },
    ],
  },
  facts: {
    period: "现代（数百年历史，19 世纪在德国定型）",
    discoveryRegions: ["德国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "大丹犬名字里有“丹麦”，其实是德国培育的猎野猪犬，后来转型为宫廷护卫和伴侣犬。肩高纪录保持者“宙斯”站立时肩高 1.118 米。高个子代价不小：大丹犬平均寿命只有 7–10 年，并高发胃扭转（进食后剧烈运动是诱因），需要少食多餐。它对孩子和其他动物宽容友善，史酷比的原型就是大丹犬。",
  sources: [
    {
        "title": "Great Dane — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/great-dane/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Great Dane — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Great_Dane",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；肩高常超过 80 厘米。",
            "胃扭转是该品种的头号急症风险，饲养前应了解。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
