import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "公牛",
  classificationLabel: "牛科家畜",
  visibleFeature: "看它头上弯弯的浅色角和结实的肩膀。",
  narration: {
    sentences: [
          "这是一头公牛，牛群里的大家伙。",
          "它有弯弯的角和发达的肌肉，主要吃草，一天要花很多时间进食。"
    ],
    pronunciation: [
      {
        text: "公牛",
        reading: "gōng niú",
      },
    ],
  },
  facts: {
    period: "现代（约 8000–10000 年前驯化至今）",
    discoveryRegions: ["全球（驯化自原牛）"],
        size: {
      kind: 'body-length',
      minMeters: 2.2,
      maxMeters: 2.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "家牛的祖先是已经灭绝的原牛——一种肩高接近两米的巨大野牛。人类大约一万年前开始在近东驯化它们，从此牛为人类提供牛奶、牛肉并帮助耕田。牛是反刍动物：会把吞下的草再送回嘴里慢慢咀嚼，一天可以“倒嚼”好几个小时。",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Bos taurus — 动物多样性网（ADW）",
        "url": "https://animaldiversity.org/accounts/Bos_taurus/",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为常见成年公牛头尾区间，品种间差异很大。",
            "斗牛活动的相关习俗不在本页讨论范围。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
