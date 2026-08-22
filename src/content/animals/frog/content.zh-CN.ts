import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "青蛙",
  classificationLabel: "两栖动物",
  visibleFeature: "看它鼓鼓的眼睛和长长的后腿，脚趾间有蹼。",
  narration: {
    sentences: [
          "这是青蛙，水陆两栖的跳跃能手。",
          "它小时候是蝌蚪，用鳃呼吸，长大后用肺和皮肤呼吸。"
    ],
    pronunciation: [
      {
        text: "青蛙",
        reading: "qīng wā",
      },
    ],
  },
  facts: {
    period: "现代（蛙类约 2 亿年前出现至今）",
    discoveryRegions: ["全球（除极地与部分海岛）"],
        size: {
      kind: 'body-length',
      minMeters: 0.03,
      maxMeters: 0.13,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "青蛙的皮肤又薄又湿，能直接“呼吸”，也因此对污染特别敏感——青蛙多的地方，环境往往更健康。它们的眼睛帮助吞咽：眨眼时眼球下压把食物推进喉咙。雄蛙靠鸣囊放声歌唱吸引配偶。蝌蚪变青蛙的“变身”是自然界最神奇的发育过程之一。",
  sources: [
    {
        "title": "Frog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/frog",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Frogs — 美国自然历史博物馆（AMNH）",
        "url": "https://www.amnh.org/explore/ology/biodiversity/frogs",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间以常见蛙类为主；巨蛙可达 30 厘米。",
            "环境指示作用的说法为概括性科普。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
