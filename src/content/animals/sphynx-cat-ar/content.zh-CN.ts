import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "斯芬克斯猫（AR 版）",
  classificationLabel: "家猫品种（无毛）",
  visibleFeature: "摸摸看（想象）：它的皮肤像温热的桃子，覆盖着极细的绒毛。",
  narration: {
    sentences: [
          "这是斯芬克斯猫，天生几乎没有毛的猫。",
          "因为没有毛保暖，它最喜欢钻被窝和晒太阳。"
    ],
    pronunciation: [
      {
        text: "斯芬克斯猫（AR 版）",
        reading: "sī fēn kè sī māo",
      },
    ],
  },
  facts: {
    period: "现代（品种培育始于 20 世纪 60 年代的加拿大）",
    discoveryRegions: ["加拿大（品种培育地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.35,
      maxMeters: 0.55,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "斯芬克斯猫并非埃及原产——1966 年一只加拿大无毛猫的后代与后来发现的几个无毛个体共同奠定了这个品种，命名只是因为无毛让人想起埃及的斯芬克斯雕像。它其实有一层桃子绒般的细毛，皮肤因没有毛覆盖而皱纹明显。无毛带来特别的照料需求：皮肤油脂没有毛吸收，需要定期温水洗澡；体温流失快，食量比普通猫大，还要注意防晒防寒。它性格外向黏人，常被形容为“狗一样的猫”。",
  sources: [
    {
        "title": "Sphynx cat — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sphynx_cat",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Sphynx — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/sphynx/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只斯芬克斯猫模型，二者来源不同；发布前需决定去留或合并。",
            "体长区间不含尾巴。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
