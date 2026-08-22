import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "波斯猫",
  classificationLabel: "长毛家猫品种",
  visibleFeature: "看它扁扁的小脸和又长又软的白毛。",
  narration: {
    sentences: [
          "这是波斯猫，猫中有名的“长毛贵族”。",
          "它的毛又长又软，需要每天梳理，性格也安安静静。"
    ],
    pronunciation: [
      {
        text: "波斯猫",
        reading: "bō sī māo",
      },
    ],
  },
  facts: {
    period: "现代（约 400 年前有记录至今）",
    discoveryRegions: ["伊朗（波斯）起源，全球饲养"],
        size: {
      kind: 'body-length',
      minMeters: 0.4,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "波斯猫是最古老的人工培育猫种之一，长毛祖先经由丝路来到欧洲。它标志性的扁脸是近代育种的结果；大而圆的眼睛、长长的被毛和温顺的脾气让它几百年来一直受欢迎。因为毛又长又密，它需要主人每天帮忙梳理。",
  sources: [
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Domestic cat — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长不含尾巴，为该品种常见区间。",
            "毛色多样，本页以模型中的白色长毛个体为例。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
