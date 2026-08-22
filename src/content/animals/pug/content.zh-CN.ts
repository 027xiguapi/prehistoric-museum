import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "哈巴狗",
  classificationLabel: "小型家犬",
  visibleFeature: "看它扁扁的脸和圆圆的大眼睛，还有卷卷的尾巴。",
  narration: {
    sentences: [
          "这是哈巴狗，一种脸扁扁的小型犬。",
          "它卷卷的尾巴像一个小圈，开心的时候会摇个不停。"
    ],
    pronunciation: [
      {
        text: "哈巴狗",
        reading: "hǎ ba gǒu",
      },
    ],
  },
  facts: {
    period: "现代（约 2000 年前育成至今）",
    discoveryRegions: ["全球（起源自中国）"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.55,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "哈巴狗是中国古老犬种，曾是宫廷里的宝贝。它扁脸短鼻（短头颅）的形状让呼吸效率降低，夏天容易中暑，需要特别照顾。哈巴狗性格温和爱撒娇，体重容易超标，需要控制饮食。褶皱里要经常清洁保持干燥。",
  sources: [
    {
        "title": "Pug — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/pug/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年哈巴狗常见区间。",
            "育种史年代为近似估计。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
