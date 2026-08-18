import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "黄牛",
  classificationLabel: "牛科家畜",
  visibleFeature: "看它弯弯的大角和壮实的身体，脖子上还有一圈结实的肌肉。",
  narration: {
    sentences: [
          "这是黄牛，人类耕种田地最老的好帮手。",
          "它头上有一对弯弯的角，力气大到能拉动犁。"
    ],
    pronunciation: [
      {
        text: "黄牛",
        reading: "huáng niú",
      },
    ],
  },
  facts: {
    period: "现代（约 8000–10000 年前驯化至今）",
    discoveryRegions: ["全球（驯化自野生原牛）"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.2,
      maxMeters: 1.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "黄牛的祖先是已经灭绝的巨大原牛，最后一头原牛在 1627 年死去。牛是反刍动物，四个胃室里的微生物帮它把草变成营养。专门阉割、训练用来拉犁拉车的公牛才叫“役牛（ox）”。牛能认出自己的名字，研究还发现它们记得彼此、会为同伴的困境紧张。",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Aurochs — 英国自然历史博物馆（NHM）",
        "url": "https://www.nhm.ac.uk/discover/news/2015/november/how-the-aurochs-was-lost.html",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高为常见役用/肉用黄牛区间，品种差异大。",
            "行为研究样本有限，作概括性介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
