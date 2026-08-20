import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "腊肠犬",
  classificationLabel: "獾穴猎犬（长身短腿）",
  visibleFeature: "看它又长又低的身体——这身“腊肠”造型是为了钻进獾洞而设计的。",
  narration: {
    sentences: [
          "这是腊肠犬，德语名字的意思是“獾狗”。",
          "它敢钻进地洞里独自面对比它大的獾。"
    ],
    pronunciation: [
      {
        text: "腊肠犬",
        reading: "là cháng quǎn",
      },
    ],
  },
  facts: {
    period: "现代（数百年历史，19 世纪在德国定型）",
    discoveryRegions: ["德国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.55,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "腊肠犬的长身体、大肺活量、铲形前爪和粗尾巴都是“地下工作装备”：钻进獾洞后，猎人可以拽着尾巴把它拉出来。它按体型分标准型和迷你型，按被毛分短毛、长毛和刚毛三种。勇敢到近乎鲁莽的性格来自獾洞里的单挑传统。长长的脊椎是它最大的弱点——跳沙发、爬楼梯都可能损伤椎间盘，家里最好准备宠物坡道。1972 年慕尼黑奥运会的吉祥物“瓦尔迪”就是一只腊肠犬。",
  sources: [
    {
        "title": "Dachshund — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/dachshund/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Dachshund — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dachshund",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；标准型与迷你型差异较大。",
            "椎间盘疾病风险显著高于一般犬种，饲养前应了解。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
