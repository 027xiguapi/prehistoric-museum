import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "猎豹",
  classificationLabel: "大型猫科动物（极速猎手）",
  visibleFeature: "看看它眼睛下面两条黑色的“泪痕”，那是猎豹专属的防晒墨线。",
  narration: {
    sentences: [
          "这是猎豹，陆地上跑得最快的动物。",
          "它从眼睛到嘴巴有两条黑线，像运动员涂的防晒墨线，帮它盯紧猎物。"
    ],
    pronunciation: [
      {
        text: "猎豹",
        reading: "liè bào",
      },
    ],
  },
  facts: {
    period: "现代（猎豹属延续数百万年）",
    discoveryRegions: ["非洲","伊朗（少量）"],
        size: {
      kind: 'body-length',
      minMeters: 1.1,
      maxMeters: 1.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "猎豹是纯粹的短跑机器：不能收回的爪子像跑鞋钉，长长的尾巴当舵用，灵活的脊柱让每一步都跨出七米远，三秒钟就能加速到时速一百公里。但它是“冲刺型选手”，全力跑几百米就得停下喘气，抓到的猎物还常被狮子和鬣狗抢走。小猎豹背上有一圈银色的鬃毛，跟着妈妈练习捕猎要一年多才能出师。",
  sources: [
    {
        "title": "Cheetah — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cheetah-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Cheetah — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/cheetah",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头身长度，不算尾巴；连尾总长约 2 米。",
            "奔跑速度的数字来自人工测速，野外实际狩猎常低于峰值。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
