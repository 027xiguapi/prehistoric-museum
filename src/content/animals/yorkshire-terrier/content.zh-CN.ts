import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "约克夏梗",
  classificationLabel: "玩具梗犬（钢蓝色丝毛）",
  visibleFeature: "看它拖到地上的丝滑长毛——这身“钢蓝大衣”的祖先却是工厂里的捕鼠工。",
  narration: {
    sentences: [
          "这是约克夏梗，工人阶级出身的迷你犬。",
          "它个子小，胆子却比很多大狗都大。"
    ],
    pronunciation: [
      {
        text: "约克夏梗",
        reading: "yuē kè xià gěng",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪中后期在英国约克郡定型）",
    discoveryRegions: ["英国约克郡（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "约克夏梗诞生于工业革命时期的约克郡：苏格兰织工带来小梗犬，在纺织厂和矿坑里捕捉老鼠，后来被维多利亚时代的上流社会发现，摇身一变成为客厅宠儿。它的被毛像人的头发一样不断生长、质地如丝，钢蓝色与棕褐色是标准配色。它胆大、爱叫、依恋主人，是著名的“口袋伴侣”；迷你体型带来的低血糖和牙齿拥挤问题需要留意。",
  sources: [
    {
        "title": "Yorkshire Terrier — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/yorkshire-terrier/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Yorkshire Terrier — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Yorkshire_Terrier",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴与饰毛。",
            "幼犬出生时为黑色，钢蓝色随成长逐渐显现。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
