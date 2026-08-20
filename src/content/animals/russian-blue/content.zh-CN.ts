import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "俄罗斯蓝猫",
  classificationLabel: "家猫品种（银蓝短毛）",
  visibleFeature: "看它蓝灰色的短毛在光线下泛着银色光泽——毛尖像撒了一层银粉。",
  narration: {
    sentences: [
          "这是俄罗斯蓝猫，披着银蓝色“双层大衣”的猫。",
          "它安静又聪明，嘴角上翘像在微笑。"
    ],
    pronunciation: [
      {
        text: "俄罗斯蓝猫",
        reading: "é luó sī lán māo",
      },
    ],
  },
  facts: {
    period: "现代（品种记载始于 19 世纪末）",
    discoveryRegions: ["俄罗斯（传说发源地）","英国与斯堪的纳维亚（品种培育地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "俄罗斯蓝猫的起源笼罩在传说中：据说 19 世纪水手把它从俄国阿尔汉格尔斯克港带到英国，1875 年起出现在伦敦猫展上。它的被毛是罕见的“双层被毛”，外层护毛尖端银化，摸起来像天鹅绒。绿色的杏仁眼加上嘴角自然上翘，构成著名的“蒙娜丽莎微笑”。它性格安静敏感，对家人忠诚，对陌生人矜持，通常能与孩子和其他宠物相处融洽。",
  sources: [
    {
        "title": "Russian Blue — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Russian_Blue",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Russian Blue — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/russian-blue/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "俄罗斯起源来自传说和早期记载，缺乏直接证据链。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
