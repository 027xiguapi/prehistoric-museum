import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "西伯利亚哈士奇",
  classificationLabel: "雪橇犬",
  visibleFeature: "看它的蓝眼睛和厚实的双层毛——这身装备是为西伯利亚的严寒准备的。",
  narration: {
    sentences: [
          "这是西伯利亚哈士奇，能拉着雪橇跑上百公里的雪橇犬。",
          "它精力过剩、爱“唱歌”，还是著名的“越狱大师”。"
    ],
    pronunciation: [
      {
        text: "西伯利亚哈士奇",
        reading: "xī bó lì yà hā shì qí",
      },
    ],
  },
  facts: {
    period: "现代（楚科奇人驯养数百年以上）",
    discoveryRegions: ["西伯利亚东北部（楚科奇半岛）"],
        size: {
      kind: 'body-length',
      minMeters: 0.85,
      maxMeters: 1.05,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "哈士奇由西伯利亚的楚科奇人培育，以惊人的耐力拉着轻载雪橇长途运输。1925 年白喉血清接力事件中，雪橇犬队穿越暴风雪把救命血清送到诺姆镇，领头犬“多哥”和“巴尔托”成为传奇——纽约中央公园至今立着巴尔托的铜像。哈士奇热爱奔跑和群居，几乎不吠叫但爱嚎叫“聊天”；旺盛的精力如果无处释放，拆家和翻墙都是常规操作。它能耐受零下几十度的严寒，却很不耐热。",
  sources: [
    {
        "title": "Siberian Husky — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/siberian-husky/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Siberian Husky — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Siberian_Husky",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“蓝眼睛”并非全部个体具备，也有棕眼或鸳鸯眼。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
