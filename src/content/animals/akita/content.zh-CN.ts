import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "秋田犬",
  classificationLabel: "日本大型犬",
  visibleFeature: "看它卷在背上的蓬松尾巴和像熊一样的脑袋——这是日本古老的雪国犬。",
  narration: {
    sentences: [
          "这是秋田犬，日本最著名的大型犬。",
          "忠犬八公就是一只秋田犬，它的铜像立在东京涩谷车站前。"
    ],
    pronunciation: [
      {
        text: "秋田犬",
        reading: "qiū tián quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种有数百年历史，1931 年被列为日本天然纪念物）",
    discoveryRegions: ["日本秋田县（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.9,
      maxMeters: 1.1,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "秋田犬发源于日本北部多雪的秋田县，最初协助猎人追踪熊和野猪，也担任护卫。它体格魁梧、双层被毛御寒，性格沉稳忠诚，对陌生犬有戒心。忠犬八公在主人去世后九年里每天到涩谷车站等候，成为忠诚的象征；海伦·凯勒访日时获赠的“卡米卡兹号”则把秋田犬带到了美国。秋田犬需要经验丰富的主人、早期社会化和每日运动。",
  sources: [
    {
        "title": "Akita — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/akita/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Akita (dog breed) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Akita_(dog_breed)",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含卷尾；日系秋田与美式秋田体型标准不同。",
            "对陌生人的容忍度个体差异较大，与早期社会化密切相关。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
