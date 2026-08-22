import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "蟒蛇",
  classificationLabel: "蟒科蛇类",
  visibleFeature: "看它一身花纹的鳞片，下颌能像打开抽屉一样张开。",
  narration: {
    sentences: [
          "这是蟒蛇，会“抱”住猎物的大蛇。",
          "它的下巴能张开得特别大，吞下比头还粗的食物。"
    ],
    pronunciation: [
      {
        text: "蟒蛇",
        reading: "mǎng shé",
      },
    ],
  },
  facts: {
    period: "现代（蟒科约 5000 万年前出现至今）",
    discoveryRegions: ["非洲","亚洲","澳大利亚"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "蟒蛇没有毒，靠缠绕抱紧猎物使其窒息。它们的两片下颌骨只用韧带相连，可以各自移动，所以能吞下很粗的动物，几个月吃一顿也没问题。蟒蛇靠唇窝感知猎物的体温，捕猎像戴着“夜视镜”。有的母蟒会盘蛋孵卵并颤抖产热。",
  sources: [
    {
        "title": "Python — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/python-snake",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Burmese python — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/reptiles/facts/burmese-python",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖多数蟒种；网纹蟒可超 6 米。",
            "卵育行为因种类而异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
