import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "金毛寻回犬",
  classificationLabel: "家犬（寻回猎犬品种）",
  visibleFeature: "摸摸想象中它金色的双层被毛，外层防水，内层像羽绒服。",
  narration: {
    sentences: [
          "这是金毛寻回犬，嘴巴温柔到能衔住生鸡蛋的工作犬。",
          "它长着防水的金色被毛，天生就是游泳和捡回猎物的高手。"
    ],
    pronunciation: [
      {
        text: "金毛寻回犬",
        reading: "jīn máo xún huí quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种历史一百五十余年）",
    discoveryRegions: ["苏格兰（品种起源）","世界各地家庭"],
        size: {
      kind: 'body-length',
      minMeters: 0.9,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "金毛寻回犬在苏格兰培育，任务是跳进冰冷的湖里，把猎人打下的水鸟轻柔地衔回来——“软嘴”是选育的关键，不能在鸟身上留下牙印。双层被毛外层防水、内层保暖，脚趾间还有小蹼，天生爱游泳。如今它是最受欢迎的导盲犬、搜救犬和治疗犬之一，耐心和好脾气让它几乎成了“温柔”的代名词。",
  sources: [
    {
        "title": "Golden retriever — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/golden-retriever",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Golden Retriever — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/golden-retriever/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头尾长度；品种标准以肩高和体重为准。",
            "“软嘴衔蛋”是流行的训练演示，用于说明咬合控制。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
