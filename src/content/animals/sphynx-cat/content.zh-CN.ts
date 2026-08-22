import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "斯芬克斯猫",
  classificationLabel: "无毛家猫",
  visibleFeature: "看它皱皱的无毛皮肤，摸起来像温暖的桃子。",
  narration: {
    sentences: [
          "这是斯芬克斯猫，一种几乎没有毛的猫。",
          "它的皮肤皱皱的，摸起来又暖又软。"
    ],
    pronunciation: [
      {
        text: "斯芬克斯猫",
        reading: "sī fēn kè sī māo",
      },
    ],
  },
  facts: {
    period: "现代（1966 年育成至今）",
    discoveryRegions: ["全球（起源自加拿大）"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "斯芬克斯猫源于 1966 年加拿大一窝天然基因突变的小猫。它们并非完全无毛，皮肤上覆盖着细软的绒毛。因为没有被毛保温，它们怕冷也怕晒，冬天要穿衣服、夏天要防晒；皮肤还会出油，需要定期擦洗。性格黏人爱热闹。",
  sources: [
    {
        "title": "Sphynx — 国际猫协会（TICA）",
        "url": "https://tica.org/breeds/browse-all-breeds?view=article&id=875:sphynx-breed&catid=8",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Cat — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cat",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为成年斯芬克斯猫常见区间。",
            "护理建议为概括性介绍，个体情况请遵兽医意见。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
