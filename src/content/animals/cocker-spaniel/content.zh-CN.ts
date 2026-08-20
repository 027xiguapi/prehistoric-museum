import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "可卡犬",
  classificationLabel: "猎鹬犬",
  visibleFeature: "看它绸缎一样的长耳朵——“可卡”这个名字来自它最擅长猎的丘鹬。",
  narration: {
    sentences: [
          "这是可卡犬，曾经专门在灌木丛里惊起丘鹬的猎犬。",
          "它摇尾巴的速度在犬界数一数二。"
    ],
    pronunciation: [
      {
        text: "可卡犬",
        reading: "kě kǎ quǎn",
      },
    ],
  },
  facts: {
    period: "现代（19 世纪在英国从西班牙猎犬中分化定型）",
    discoveryRegions: ["英国（品种定型地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.6,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "西班牙猎犬家族按猎物分工：体型较小、专门惊起丘鹬（woodcock）的一支就成了“Cocker”。它钻进茂密灌木把鸟轰出来，再在射手命中后把猎物衔回。长耳朵与绸缎被毛是标志，但长耳朵也容易藏污纳垢、引发耳炎，需要经常清洁。可卡犬性格甜美、爱玩爱叫，是优秀的家庭犬；美国可卡与英国可卡现已分为两个品种。",
  sources: [
    {
        "title": "Cocker Spaniel — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cocker-spaniel/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "English Cocker Spaniel — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/English_Cocker_Spaniel",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；英卡与美卡体型有差异。",
            "长毛型耳朵与眼睑的护理需求因个体而异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
