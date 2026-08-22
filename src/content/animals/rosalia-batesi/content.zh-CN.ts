import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "琉璃星天牛",
  classificationLabel: "天牛（蓝色丝绒）",
  visibleFeature: "看它蓝灰色的身体和极长的触角——天牛的触角常常比身体还长。",
  narration: {
    sentences: [
          "这是琉璃星天牛，披着蓝色丝绒的天牛。",
          "它的超长触角是探测树木气味的“天线”。"
    ],
    pronunciation: [
      {
        text: "琉璃星天牛",
        reading: "liú lí xīng tiān niú",
      },
    ],
  },
  facts: {
    period: "现代（天牛科延续上亿年）",
    discoveryRegions: ["日本的山地森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.02,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "琉璃星天牛（ルリボシカミキリ）是日本山毛榉林中最美丽的甲虫之一：蓝灰色丝绒般的身体上散布着黑斑，触角一节黑一节蓝。它以英国昆虫学家贝茨命名，夏季成虫出现在山毛榉等阔叶树上，雌虫把卵产在衰弱木的树皮缝里，幼虫蛀食木质部两三年才羽化。因为山地森林的减少，它在日本被列为近危物种。",
  sources: [
    {
        "title": "Rosalia batesi — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Rosalia_batesi",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ルリボシカミキリ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ruriboshikamikiri.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含触角；触角可达体长两倍以上。",
            "中文名为日文汉字名的直译，非正式中文学名。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
