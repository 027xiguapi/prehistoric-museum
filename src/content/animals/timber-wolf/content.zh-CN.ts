import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "森林狼",
  classificationLabel: "灰狼（北美森林种群）",
  visibleFeature: "看它竖起的耳朵和蓬松的大尾巴——它就是家狗的野生近亲。",
  narration: {
    sentences: [
          "这是森林狼，生活在北美森林里的灰狼。",
          "狼群其实是一个家庭：狼爸爸、狼妈妈和不同年龄的孩子。"
    ],
    pronunciation: [
      {
        text: "森林狼",
        reading: "sēn lín láng",
      },
    ],
  },
  facts: {
    period: "现代（灰狼延续数十万年）",
    discoveryRegions: ["北美洲北部森林"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "森林狼是灰狼的北美森林种群。狼群是温暖的大家庭，由一对狼父母和它们的孩子组成，捕猎时分工合作，围追鹿和驼鹿。它们用嗥叫互相联络、集合队伍，一声嗥叫在森林里能传好几公里。所有的家狗——从吉娃娃到大丹犬——都是灰狼驯化而来的后代。1995 年狼群重返黄石公园后，河边的柳树重新长起来，整个山谷的生态都活跃了起来。",
  sources: [
    {
        "title": "Wolf — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/wolf",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Gray wolf — 美国国家公园管理局（NPS）",
        "url": "https://www.nps.gov/subjects/wolves/index.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "“森林狼”通常指北美的灰狼种群，并非独立物种，体型随地区变化。",
            "黄石公园的“狼群效应”在学界仍有讨论，河道变化还受其他因素影响。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
