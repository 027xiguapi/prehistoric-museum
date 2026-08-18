import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "耳廓狐",
  classificationLabel: "沙漠小型犬科动物",
  visibleFeature: "看它大大的耳朵！在沙漠里，大耳朵能帮它散热、听到地下的小虫。",
  narration: {
    sentences: [
          "这是耳廓狐，撒哈拉沙漠里最小的狐狸。",
          "它的大耳朵像小雷达，厚厚的毛脚掌踩在热沙上也不怕烫。"
    ],
    pronunciation: [
      {
        text: "耳廓狐",
        reading: "ěr kuò hú",
      },
    ],
  },
  facts: {
    period: "现代",
    discoveryRegions: ["北非（撒哈拉沙漠）"],
        size: {
      kind: 'body-length',
      minMeters: 0.24,
      maxMeters: 0.4,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "耳廓狐比家猫还小，却能在昼夜温差极大的沙漠里过得很好：白天躲在地洞里，夜里出来找虫子、蜥蜴和果子。大耳朵既是“散热器”又是“雷达”；奶白色的毛在月光下的沙地上正好隐蔽。它几乎不用专门喝水，食物里的水分就够用了。",
  sources: [
    {
        "title": "Fennec — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/fennec",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Fennec fox — 国家地理（Nat Geo）",
        "url": "https://www.nationalgeographic.com/animals/mammals/facts/fennec-fox",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长不含尾巴，为头体长区间。",
            "夜行习性等描述为概览，具体行为随种群与环境变化。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
