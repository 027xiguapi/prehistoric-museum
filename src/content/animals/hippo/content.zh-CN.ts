import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "河马",
  classificationLabel: "大型半水生哺乳动物",
  visibleFeature: "看它的大嘴巴——河马张嘴时能张开将近 180 度。",
  narration: {
    sentences: [
          "这是河马，白天泡在水里、晚上上岸吃草的大块头。",
          "别看它胖，它跑起来比人快得多。"
    ],
    pronunciation: [
      {
        text: "河马",
        reading: "hé mǎ",
      },
    ],
  },
  facts: {
    period: "现代（河马科延续数千万年）",
    discoveryRegions: ["非洲撒哈拉以南的河流与湖泊"],
        size: {
      kind: 'body-length',
      minMeters: 3.3,
      maxMeters: 5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "河马是仅次于大象和白犀的第三大陆生动物，体重可达 1.5–3 吨。它们白天成群泡在河流湖泊里防晒，眼睛、耳朵和鼻孔都长在头顶，身体沉入水中时只露出这三样。傍晚河马上岸吃草，一晚能走几公里、吃掉约 40 千克草。河马汗液呈粉红色，像天然防晒霜。它们的领地意识极强，是非洲最危险的动物之一。",
  sources: [
    {
        "title": "Hippopotamus — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/hippopotamus-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Hippopotamus — 世界自然基金会（WWF）",
        "url": "https://www.worldwildlife.org/species/hippopotamus",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴；体重 1.5–3 吨因性别和个体差异很大。",
            "河马几乎只吃草，但偶有啃食尸体的记录，学界视为罕见异常行为。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
