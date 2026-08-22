import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "针鼹",
  classificationLabel: "会下蛋的哺乳动物",
  visibleFeature: "看它满身的尖刺和长长的嘴巴——它是会下蛋的哺乳动物。",
  narration: {
    sentences: [
          "这是针鼹，全世界仅有的两种会下蛋的哺乳动物之一。",
          "它用长长的舌头舔食蚂蚁和白蚁。"
    ],
    pronunciation: [
      {
        text: "针鼹",
        reading: "zhēn yǎn",
      },
    ],
  },
  facts: {
    period: "现代（单孔目延续上亿年）",
    discoveryRegions: ["澳大利亚","新几内亚"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "针鼹和鸭嘴兽同属单孔目——地球上最原始的哺乳动物，会像爬行动物一样下蛋，又像哺乳动物一样分泌乳汁哺育幼崽。遇到危险时，针鼹会蜷成刺球，或者用强壮的爪子飞快刨土，几分钟内就钻进地里只露出刺尖。它没有牙齿，靠口腔里的角质垫磨碎蚂蚁和白蚁，舌头能伸出 18 厘米。",
  sources: [
    {
        "title": "Echidna — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/echidna-monotreme",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Short-beaked echidna — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Short-beaked_echidna",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为常见短吻针鼹的范围；新几内亚的长吻针鼹体型更大且极度濒危。",
            "“食虫”按食性分类归入肉食性。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
