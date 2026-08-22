import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "球蟒",
  classificationLabel: "蛇类（蟒科）",
  visibleFeature: "看它一身棕金色的大斑块，遇到危险会把自己卷成一个球。",
  narration: {
    sentences: [
          "这是球蟒，一种个子不大的温柔蟒蛇。",
          "它害怕时会把头藏在身体中间，卷成一个紧紧的球。"
    ],
    pronunciation: [
      {
        text: "球蟒",
        reading: "qiú mǎng",
      },
    ],
  },
  facts: {
    period: "现代（物种延续至今）",
    discoveryRegions: ["西非至中非"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "球蟒的名字来自它的“绝招”：受到惊扰时把身体盘成球，把脆弱的头护在最里面，天敌就无从下口。它是西非草原上的夜行猎手，靠热感应“颊窝”在黑暗里找到老鼠，先咬住再用身体温柔地缠紧。母球蟒会像母鸡一样盘住自己的一窝蛋，直到小蛇孵出为止。",
  sources: [
    {
        "title": "Ball python — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/ball-python",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ball python — 圣地亚哥动物园（San Diego Zoo）",
        "url": "https://animals.sandiegozoo.org/animals/python",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长以雌蛇为上限；雄蛇通常只有一米左右。",
            "“颊窝”热感应器官属于蚺科部分种类，表述以通俗介绍为主。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
