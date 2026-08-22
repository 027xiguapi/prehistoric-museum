import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "暹罗猫",
  classificationLabel: "家猫品种（重点色）",
  visibleFeature: "看它的脸、耳朵和尾巴颜色比身体深——这些深色“重点”是天生的温度地图。",
  narration: {
    sentences: [
          "这是暹罗猫，来自泰国的古老猫种。",
          "它爱“说话”，叫声又响又特别。"
    ],
    pronunciation: [
      {
        text: "暹罗猫",
        reading: "xiān luó māo",
      },
    ],
  },
  facts: {
    period: "现代（泰国古代手稿已有记载，19 世纪传入西方）",
    discoveryRegions: ["泰国（古称暹罗，品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "暹罗猫的名字来自泰国的古称“暹罗”，14–18 世纪的泰国《猫之诗》手稿里就有重点色猫的插图。1878 年美国驻曼谷领事把一只暹罗猫送给海斯总统的家人，使它成为最早进入西方的东方猫种之一。重点色的成因是温度敏感型酪氨酸酶突变：身体较冷的部位（脸、耳朵、四肢、尾巴）合成更多黑色素，所以幼猫出生时几乎是白色的，深色随成长慢慢显现。暹罗猫极度亲人、好奇心强，响亮的“低音炮”叫声常被比作婴儿啼哭。",
  sources: [
    {
        "title": "Siamese cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Siamese-cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Siamese cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Siamese_cat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含细长的尾巴。",
            "现代“楔头”暹罗与传统“苹果头”体型差异较大，模型更接近传统型。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
