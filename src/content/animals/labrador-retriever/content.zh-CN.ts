import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "拉布拉多寻回犬",
  classificationLabel: "家犬（寻回犬品种）",
  visibleFeature: "看它的尾巴——又粗又圆，像一支毛茸茸的船舵。",
  narration: {
    sentences: [
          "这是拉布拉多寻回犬，全世界最受欢迎的狗狗之一。",
          "它脚趾间有蹼，天生就是游泳好手，最爱帮忙捡东西。"
    ],
    pronunciation: [
      {
        text: "拉布拉多寻回犬",
        reading: "lā bù lā duō xún huí quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种培育约 200 年）",
    discoveryRegions: ["加拿大纽芬兰","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "拉布拉多的祖先是纽芬兰渔民的“圣约翰水犬”，帮忙把逃掉的鱼和渔网拖回船上，所以它天生爱水。它的嘴“软”得出奇——训练过的拉布拉多能叼着一枚生鸡蛋走完整条走廊而不咬破。今天它是最常见的导盲犬、搜救犬和治疗犬，黑、黄、巧克力三个颜色都出自同一品种。",
  sources: [
    {
        "title": "Labrador Retriever — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Labrador-retriever",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Labrador Retriever — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Labrador_Retriever",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头尾长度；公犬普遍比母犬大一圈。",
            "本批模型含两个不同的拉布拉多模型（另一见“二号”条目），正式收录前将择一保留或合并。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
