import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "法国斗牛犬",
  classificationLabel: "家犬（伴侣犬品种）",
  visibleFeature: "看看它像蝙蝠一样立着的大耳朵，还有扁扁的“小猪鼻子”。",
  narration: {
    sentences: [
          "这是法国斗牛犬，长着蝙蝠耳朵的小个子伙伴犬。",
          "它鼻子短短的，天热时会呼哧呼哧喘气给自己降温。"
    ],
    pronunciation: [
      {
        text: "法国斗牛犬",
        reading: "fǎ guó dòu niú quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种历史约两百年）",
    discoveryRegions: ["法国（品种起源）","世界各地家庭"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "法国斗牛犬的祖先是英国 laceworker 带到法国的小型斗牛犬，在巴黎街头和咖啡店里变成了万人迷的伴侣犬。它的短鼻子（倒扁脸）让它既怕热又不擅长游泳，夏天要靠空调和凉水过日子；打呼噜是它的“保留节目”，因为软腭较长。大而直立的蝙蝠耳是品种标志，性格温柔爱撒娇，是城市家庭的热门选择。",
  sources: [
    {
        "title": "French bulldog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/French-bulldog",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "French Bulldog — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/french-bulldog/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头尾长度；品种标准以体重为主要分级。",
            "健康问题（呼吸、难产）为品种普遍现象，个别血系有差异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
