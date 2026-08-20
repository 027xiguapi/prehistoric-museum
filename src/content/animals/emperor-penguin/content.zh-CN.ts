import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "帝企鹅",
  classificationLabel: "企鹅（南极最大种）",
  visibleFeature: "看看它耳朵旁边那一抹橙黄色，那是帝企鹅专有的“皇冠”。",
  narration: {
    sentences: [
          "这是帝企鹅，企鹅家族里个子最高的成员。",
          "在南极冰天雪地里，企鹅爸爸把蛋放在脚背上，用肚子盖住保暖。"
    ],
    pronunciation: [
      {
        text: "帝企鹅",
        reading: "dì qǐ é",
      },
    ],
  },
  facts: {
    period: "现代（企鹅家族延续数千万年）",
    discoveryRegions: ["南极洲"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "帝企鹅在南极的严冬里繁殖：雌企鹅产下蛋后交给雄企鹅，自己去海里觅食；雄企鹅不吃不喝站立两个月，把蛋放在脚上用育雏皮囊盖住，靠囤积的脂肪挺过零下几十度的暴风雪。雏鸟孵出后挤成巨大的“托儿所”取暖，父母轮流从海边带回鱼和磷虾。它还是潜水冠军，能潜到五百多米深处捕鱼。",
  sources: [
    {
        "title": "Emperor penguin — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/emperor-penguin",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Emperor penguin — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/emperor-penguin",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长实为站立身高，是最高的企鹅种类。",
            "潜水深度记录来自科研追踪，不同个体与年份差异较大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
