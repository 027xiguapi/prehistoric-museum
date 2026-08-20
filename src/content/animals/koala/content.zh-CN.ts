import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "考拉",
  classificationLabel: "树栖有袋动物",
  visibleFeature: "看它毛茸茸的大耳朵和圆鼻子——考拉一天要睡 18 到 22 个小时。",
  narration: {
    sentences: [
          "这是考拉，住在桉树上的澳大利亚有袋动物。",
          "它几乎只吃桉树叶，这种叶子对别的动物来说可是有毒的。"
    ],
    pronunciation: [
      {
        text: "考拉",
        reading: "kǎo lā",
      },
    ],
  },
  facts: {
    period: "现代（考拉科延续数千万年）",
    discoveryRegions: ["澳大利亚东部与东南部的桉树林"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.85,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "考拉不是熊——它是有袋动物，和袋鼠一样把宝宝装在育儿袋里。桉树叶热量低、有毒素，考拉的肝脏能解毒，长长的盲肠负责发酵纤维，但代价是必须长时间睡觉节能。每只考拉只肯吃几十种桉树里的几种叶子。因为栖息地丧失和山火，考拉在 2022 年被澳大利亚政府列为濒危物种。",
  sources: [
    {
        "title": "Koala — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/koala",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Koala — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/koala",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含极短的尾巴；南部个体明显大于北部个体。",
            "“濒危”为澳大利亚部分辖区的法定状态，全球红色名录目前列为易危。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
