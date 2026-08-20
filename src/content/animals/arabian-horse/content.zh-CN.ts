import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "阿拉伯马",
  classificationLabel: "家马（古老品种）",
  visibleFeature: "看它高高翘起的尾巴和精巧的头，跑起来像在跳舞。",
  narration: {
    sentences: [
          "这是阿拉伯马，世界上最古老的马品种之一。",
          "它体型轻盈，耐力惊人，古时候能穿越大沙漠传递消息。"
    ],
    pronunciation: [
      {
        text: "阿拉伯马",
        reading: "ā lā bó mǎ",
      },
    ],
  },
  facts: {
    period: "现代（家养历史数千年）",
    discoveryRegions: ["阿拉伯半岛","世界各地"],
        size: {
      kind: 'shoulder-height',
      minMeters: 1.4,
      maxMeters: 1.6,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "阿拉伯马在沙漠中与贝都因人共同生活了几千年，常被牵进帐篷躲避风沙，所以性格亲近人类、聪明又勇敢。它的高尾姿和凹鼻梁是全世界都认得出的标志，几乎所有现代赛马和骑乘马的血统书里都能找到它。宽大的鼻孔和肺让它特别擅长长距离奔跑，是耐力赛里的常胜将军。",
  sources: [
    {
        "title": "Arabian horse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Arabian-horse",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Arabian horse — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Arabian_horse",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高为成年马区间；个别赛马个体更高。",
            "品种历史叙述基于贝都因口传传统，细节年代难以精确考证。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
