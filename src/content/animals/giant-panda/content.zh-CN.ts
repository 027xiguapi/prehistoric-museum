import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "大熊猫",
  classificationLabel: "熊科动物（竹子专家）",
  visibleFeature: "找找它手腕上多出来的“第六根手指”，那是专门抓竹子的伪拇指。",
  narration: {
    sentences: [
          "这是大熊猫，一天要吃几十公斤竹子的黑白熊。",
          "它的黑眼圈像一副墨镜，手腕上还有抓竹子的“伪拇指”。"
    ],
    pronunciation: [
      {
        text: "大熊猫",
        reading: "dà xióng māo",
      },
    ],
  },
  facts: {
    period: "现代（大熊猫属延续数百万年）",
    discoveryRegions: ["中国四川、陕西、甘肃山区"],
        size: {
      kind: 'body-length',
      minMeters: 1.2,
      maxMeters: 1.9,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "大熊猫的祖先是吃肉的熊，如今却把菜单换成了竹子：腕骨特化出的“伪拇指”能像大拇指一样握住竹竿，强壮的颌肌把坚硬的竹秆咬断。因为竹子营养少，它每天要花十几个小时进食，剩下的时间基本都在睡觉。黑白的毛色在雪地和阴影里都是保护色，新生宝宝却小得像一根粉笔，只有妈妈的九百分之一重。",
  sources: [
    {
        "title": "Giant panda — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/giant-panda",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Giant panda — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/giant-panda",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年雌雄合计；野生与圈养个体体型差异明显。",
            "虽属食肉目，因几乎只吃竹子，按食草动物介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
