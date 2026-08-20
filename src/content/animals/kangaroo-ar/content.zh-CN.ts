import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "红袋鼠（AR 版）",
  classificationLabel: "最大的有袋动物",
  visibleFeature: "看它强壮的后腿和粗尾巴——尾巴是它跳跃时的“平衡杆”。",
  narration: {
    sentences: [
          "这是红袋鼠，世界上最大的有袋动物。",
          "它跳一步能跨过 8 米，相当于两辆小汽车的长度！"
    ],
    pronunciation: [
      {
        text: "红袋鼠（AR 版）",
        reading: "hóng dài shǔ",
      },
    ],
  },
  facts: {
    period: "现代（袋鼠科延续数千万年）",
    discoveryRegions: ["澳大利亚内陆干旱草原与荒漠"],
        size: {
      kind: 'body-length',
      minMeters: 1.3,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "红袋鼠是最大的有袋动物：雄性能长到 90 千克，跳跃时速可达 60 公里，而且跳得越快反而越省力。刚出生的小袋鼠只有一颗花生米那么大，会自己爬进妈妈的育儿袋里继续发育几个月。袋鼠不能向后移动后腿，所以它们几乎不会倒着走。它们以草和嫩叶为食，内陆干旱时能长时间不喝水，靠食物中的水分维持。",
  sources: [
    {
        "title": "Red kangaroo — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/red-kangaroo",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Red kangaroo — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Red_kangaroo",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头身长度，不含几乎等长的大尾巴。",
            "本批模型以红袋鼠为原型；其他袋鼠属种类体型明显更小。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
