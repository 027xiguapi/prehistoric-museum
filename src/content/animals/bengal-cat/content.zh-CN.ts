import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "孟加拉猫",
  classificationLabel: "家猫品种（豹纹被毛）",
  visibleFeature: "看它身上像小豹子一样的玫瑰花斑——这个品种带有野生猫的血统。",
  narration: {
    sentences: [
          "这是孟加拉猫，长着豹纹的家猫。",
          "它精力旺盛，很多个体还喜欢玩水。"
    ],
    pronunciation: [
      {
        text: "孟加拉猫",
        reading: "mèng jiā lā māo",
      },
    ],
  },
  facts: {
    period: "现代（品种培育始于 20 世纪 60–80 年代）",
    discoveryRegions: ["美国（品种培育地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.65,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "孟加拉猫由家猫与亚洲豹猫杂交培育而来，1983 年获得品种协会正式承认。它的被毛短而浓密，带有玫瑰花斑或大理石纹，部分个体的毛尖还带有独特的“金沙”光泽。杂交最初几代（F1–F3）野性较强，通常从第四代起才作为宠物猫出售。孟加拉猫聪明好动，喜欢攀爬和玩水，需要大量运动和互动，不太适合没时间陪伴的家庭。",
  sources: [
    {
        "title": "Bengal cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bengal_cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Bengal — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/bengal/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；雄性通常比雌性大。",
            "部分司法辖区对豹猫杂交代数有饲养限制，饲养前需查询当地法规。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
