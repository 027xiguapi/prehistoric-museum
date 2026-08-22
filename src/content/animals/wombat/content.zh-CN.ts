import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "袋熊",
  classificationLabel: "穴居有袋动物",
  visibleFeature: "看它矮壮的身体和有力的爪子——袋熊是挖洞高手，还拉方形的便便。",
  narration: {
    sentences: [
          "这是袋熊，考拉的近亲，住在自己挖的地洞里。",
          "它是世界上唯一会拉出方形便便的动物。"
    ],
    pronunciation: [
      {
        text: "袋熊",
        reading: "dài xióng",
      },
    ],
  },
  facts: {
    period: "现代（袋熊科延续数千万年）",
    discoveryRegions: ["澳大利亚东南部","塔斯马尼亚"],
        size: {
      kind: 'body-length',
      minMeters: 0.7,
      maxMeters: 1.2,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "袋熊是圆滚滚的穴居有袋动物，一晚能吃三到八小时的草和树根。它的育儿袋开口朝后，这样挖洞时泥土不会掉进袋里埋住宝宝。方形便便是怎么来的？科学家发现袋熊肠道的弹性不均匀，消化物在肠道后段被塑成了方块——这能帮它把便便叠在石头上标记领地而不滚走。袋熊的地道网络最长可达 30 米，山火时其他动物也曾躲进袋熊洞避难。",
  sources: [
    {
        "title": "Wombat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/wombat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Wombat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Wombat",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为三种袋熊的综合范围；袋熊没有外露的尾巴。",
            "“山火中主动救助其他动物”的说法流传很广，但科学记录只确认其他动物使用过袋熊洞。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
