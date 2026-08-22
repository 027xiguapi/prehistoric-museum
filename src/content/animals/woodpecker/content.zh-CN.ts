import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "啄木鸟",
  classificationLabel: "鸟类（啄木鸟科）",
  visibleFeature: "看它像凿子一样直直的嘴，和撑在树干上当“第三条腿”的硬尾巴。",
  narration: {
    sentences: [
          "这是啄木鸟，森林里的“树木医生”。",
          "它每秒能敲树二十下，脑袋自带“安全帽”。"
    ],
    pronunciation: [
      {
        text: "啄木鸟",
        reading: "zhuó mù niǎo",
      },
    ],
  },
  facts: {
    period: "现代（啄木鸟科延续数千万年）",
    discoveryRegions: ["欧洲、亚洲与北美洲的森林"],
        size: {
      kind: 'body-length',
      minMeters: 0.2,
      maxMeters: 0.25,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "啄木鸟敲树时的冲击力相当于火箭发射的好几倍，但它的头骨里藏着“安全帽”：海绵状骨头和一条绕过头骨的长舌头像安全带一样吸走冲击。它的两根脚趾朝前、两根朝后，像钳子一样扣住树皮，硬尾巴撑住身体。它啄出的树洞第二年往往成了猫头鹰和松鼠的新家——啄木鸟是森林里的“首席施工队”。",
  sources: [
    {
        "title": "Woodpecker — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/woodpecker",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Woodpecker — 维基百科（Wikipedia）",
        "url": "https://en.wikipedia.org/wiki/Woodpecker",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本模型近似大斑啄木鸟，种类鉴定以视觉复核为准。",
            "敲击频率与冲击力的数字来自高速摄影研究，不同研究略有差异。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
