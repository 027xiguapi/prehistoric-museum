import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "博美犬",
  classificationLabel: "小型家犬（狐狸犬家族）",
  visibleFeature: "它像一团会跳的棉花糖，脸却像一只小狐狸。",
  narration: {
    sentences: [
          "这是博美犬，个头最小却气场十足的“小狐狸”。",
          "它有两层毛，天冷时蓬起来就像穿了一件羽毛斗篷。"
    ],
    pronunciation: [
      {
        text: "博美犬",
        reading: "bó měi quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种培育数百年）",
    discoveryRegions: ["欧洲波美拉尼亚地区","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "博美犬的名字来自波罗的海边的波美拉尼亚地区，祖先是拉雪橇的大个头狐狸犬。英国维多利亚女王养过一只特别小的博美，从此全欧洲都开始追捧“口袋尺寸”，一百年间它从二十多公斤的雪橇犬伙伴变成了两三公斤的掌上明珠。别看它小，嗓门和胆量都是超大号，是最尽职的“门铃犬”。",
  sources: [
    {
        "title": "Pomeranian — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Pomeranian",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Pomeranian dog — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Pomeranian_dog",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "蓬松的被毛让体型显大，体长按实际骨骼计。",
            "体重通常约 1.5–3.5 公斤；早期品种更大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
