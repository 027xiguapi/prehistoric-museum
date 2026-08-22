import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "腕龙",
  classificationLabel: "蜥脚类恐龙（前腿更长）",
  visibleFeature: "看它的前腿比后腿长——这让它的肩膀高高耸起，像一台活的吊车。",
  narration: {
    sentences: [
          "这是腕龙，能吃到十几米高树叶的长脖子恐龙。",
          "它的名字意思是“手臂蜥蜴”，因为它的前腿特别长。"
    ],
    pronunciation: [
      {
        text: "腕龙",
        reading: "wàn lóng",
      },
    ],
  },
  facts: {
    period: "晚侏罗世（约 1.54 亿–1.5 亿年前）",
    discoveryRegions: ["北美洲（美国科罗拉多州等地）"],
        size: {
      kind: 'body-length',
      minMeters: 18,
      maxMeters: 22,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "腕龙是侏罗纪北美洲最高的植食恐龙之一：大多数蜥脚类前腿比后腿短，腕龙却相反，使它的背部向上倾斜，头部能探到约 9–13 米高。它的鼻孔开口在头顶的隆起上，早期复原因此把它画成潜水生活的样子，现代研究早已否定了这种看法。成年腕龙体重估计 30–40 吨，每天要吃几百千克树叶。《侏罗纪公园》里第一只震撼出场的恐龙就是腕龙。",
  sources: [
    {
        "title": "Brachiosaurus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/brachiosaurus",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Brachiosaurus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Brachiosaurus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "腕龙化石稀少，体重与体长估计范围较宽。",
            "东非的“布氏腕龙”现已独立为长颈鹿巨龙属，本条目指北美腕龙。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
