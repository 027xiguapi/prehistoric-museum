import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "熊蜂",
  classificationLabel: "蜜蜂科（熊蜂属）",
  visibleFeature: "听听它嗡嗡的“发动机声”——它靠振动把花粉从花朵里摇出来。",
  narration: {
    sentences: [
          "这是熊蜂，圆滚滚、毛茸茸的“飞行小暖炉”。",
          "它能把身体预热到四十度，凉爽的清晨它是花丛里第一个开工的。"
    ],
    pronunciation: [
      {
        text: "熊蜂",
        reading: "xióng fēng",
      },
    ],
  },
  facts: {
    period: "现代（熊蜂属延续约三千万年）",
    discoveryRegions: ["北半球温带与山地"],
        size: {
      kind: 'body-length',
      minMeters: 0.015,
      maxMeters: 0.04,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "熊蜂浑身覆盖着厚绒毛，起飞前先靠颤抖把飞行肌加热到四十度左右，所以凉飕飕的清晨它是花丛里最早的客人。它会“嗡嗡授粉”：抓住花朵快速振动，把番茄、草莓这类植物藏在管子里的花粉摇出来——温室里农民专门请熊蜂干这份活。和蜜蜂的常年大王国不同，熊蜂的家族一年一换，只有蜂后能钻进土里过冬，来年春天重新开张。",
  sources: [
    {
        "title": "Bumblebee — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/bumblebee",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bumblebee — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Bumblebee",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间涵盖蜂后与工蜂；全球约 250 种熊蜂，本条目按属介绍。",
            "“熊蜂不该飞得起来”是流传的误解，它的飞行完全符合空气动力学。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
