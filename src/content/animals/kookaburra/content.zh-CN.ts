import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "笑翠鸟",
  classificationLabel: "翠鸟科鸟类",
  visibleFeature: "听！它的叫声像人的大笑声，一唱一和响成一片。",
  narration: {
    sentences: [
          "这是笑翠鸟，澳大利亚森林里的“大笑鸟”。",
          "它叫起来像人在哈哈大笑，其实是在宣布领地。"
    ],
    pronunciation: [
      {
        text: "笑翠鸟",
        reading: "xiào cuì niǎo",
      },
    ],
  },
  facts: {
    period: "现代（翠鸟科约 3000 万年前分化至今）",
    discoveryRegions: ["澳大利亚与新几内亚"],
        size: {
      kind: 'body-length',
      minMeters: 0.39,
      maxMeters: 0.47,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "笑翠鸟是体型最大的翠鸟，但很少吃鱼——它们蹲在枝头猛扑蛇、蜥蜴和大型昆虫，甚至会捕蛇。清晨和黄昏，一群笑翠鸟齐声“大笑”（合唱宣示领地），是澳洲丛林的闹钟。它们在树洞里筑巢，家族成员会一起帮忙养幼鸟。",
  sources: [
    {
        "title": "Laughing kookaburra — 澳大利亚博物馆（Australian Museum）",
        "url": "https://australian.museum/learn/animals/birds/laughing-kookaburra/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Kookaburra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kookaburra",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本页以笑翠鸟（laughing kookaburra）为代表。",
            "食性为概括性介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
