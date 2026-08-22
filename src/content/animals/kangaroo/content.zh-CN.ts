import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "袋鼠",
  classificationLabel: "有袋类动物",
  visibleFeature: "看它强壮的大尾巴和后腿，跳起来又高又远。",
  narration: {
    sentences: [
          "这是袋鼠，澳大利亚的跳跃高手。",
          "袋鼠妈妈肚子上的口袋里，装着小袋鼠宝宝。"
    ],
    pronunciation: [
      {
        text: "袋鼠",
        reading: "dài shǔ",
      },
    ],
  },
  facts: {
    period: "现代（袋鼠类约 1000 万年前分化至今）",
    discoveryRegions: ["澳大利亚与新几内亚"],
        size: {
      kind: 'body-length',
      minMeters: 1.3,
      maxMeters: 2.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "红大袋鼠是现存最大的有袋动物。跳跃是最省力的奔跑方式——跳得越快越省劲，尾巴像第三条腿支撑身体。袋鼠宝宝（joey）只有软糖那么大就出生，爬进育儿袋里继续长几个月。袋鼠群叫“mob”，由最大的雄袋鼠带头。",
  sources: [
    {
        "title": "Kangaroo — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/mammals/red-kangaroo/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Kangaroo — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kangaroo",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖东部灰袋鼠与红大袋鼠。",
            "跳跃能效研究基于 treadmill 实验，作概括介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
