import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "西欧刺猬",
  classificationLabel: "食虫小兽（猬科）",
  visibleFeature: "数数它背上成千上万根小刺，遇到危险就变成一个“刺球”。",
  narration: {
    sentences: [
          "这是西欧刺猬，背着约五千根刺的夜行小兽。",
          "它走路呼呼作响，最爱在花园里找蜗牛和甲虫当夜宵。"
    ],
    pronunciation: [
      {
        text: "西欧刺猬",
        reading: "xī ōu cì wei",
      },
    ],
  },
  facts: {
    period: "现代（刺猬类延续数千万年）",
    discoveryRegions: ["欧洲","亚洲西部"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "西欧刺猬背上的刺是改造过的毛发，中空又带弹性；遇到危险时它先绷紧皮下肌肉，把身体缩成刺球，让狐狸无从下口。它是花园里的天然除虫队，一夜能吃掉几十克甲虫、蚯蚓和蜗牛，偶尔也啃浆果。秋末它吃得胖胖的，用树叶和枯草搭窝冬眠，春天醒来第一件事就是赶紧补一顿大餐。",
  sources: [
    {
        "title": "Hedgehog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hedgehog",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "European hedgehog — 英国野生动物信托（The Wildlife Trusts）",
        "url": "https://www.wildlifetrusts.org/wildlife-explorer/mammals/european-hedgehog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "刺的数量为成年个体的典型值，个体间有差异。",
            "虽以昆虫为主食，也吃鸟蛋和浆果，故按杂食介绍。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
