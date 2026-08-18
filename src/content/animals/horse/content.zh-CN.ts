import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "马",
  classificationLabel: "马科家畜",
  visibleFeature: "看它飘动的鬃毛和大大的眼睛，眼睛长在两侧视野特别宽。",
  narration: {
    sentences: [
          "这是马，人类最老的四轮朋友。",
          "它站着也能睡觉，跑起来又快又稳。"
    ],
    pronunciation: [
      {
        text: "马",
        reading: "mǎ",
      },
    ],
  },
  facts: {
    period: "现代（约 5500 年前驯化至今）",
    discoveryRegions: ["全球（驯化自中亚野马）"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.8,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "马的眼睛是陆地哺乳动物中最大的，长在头两侧几乎看到全景；耳朵能 180° 转动听声辨位。马腿里有“锁定机关”（stay apparatus），所以能站着打盹。它们用耳朵和尾巴传递心情。人类约五千五百年前在中亚草原驯化马，从此改变了交通、农耕和战争。",
  sources: [
    {
        "title": "Horse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/horse",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Horse domestication — 《科学》（Science）期刊报道",
        "url": "https://www.science.org/content/article/ancient-dna-shows-horse-herders-botai-were-not-first-domesticate-horses",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高为常见家马区间，矮种马与重型马差异大。",
            "驯化时间与地点仍有新的考古与基因研究更新。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
