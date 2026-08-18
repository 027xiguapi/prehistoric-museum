import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "小猫",
  classificationLabel: "家猫幼崽",
  visibleFeature: "数数它背上的条纹，再看它圆圆的大眼睛。",
  narration: {
    sentences: [
          "这是一只小猫，家猫的宝宝，从小就想当厉害的猎手。",
          "它的眼睛又大又亮，耳朵会转向声音的方向。"
    ],
    pronunciation: [
      {
        text: "小猫",
        reading: "xiǎo māo",
      },
    ],
  },
  facts: {
    period: "现代（约 1 万年前驯化至今）",
    discoveryRegions: ["全球（源自非洲野猫）"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.5,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "家猫的祖先是非洲野猫，大约一万年前开始在人类村落附近生活，帮忙守护粮仓。小猫出生时眼睛还没睁开，几周后就开始追逐打闹——这些游戏其实是在练习捕猎。猫的胡须非常敏感，能帮它在黑暗里判断缝隙能不能钻过去。",
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
            "体长不含尾巴，为家猫幼崽到成猫的近似区间。",
            "品种与个体差异很大，本页以普通虎斑幼猫为例。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
