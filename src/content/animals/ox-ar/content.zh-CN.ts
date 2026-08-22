import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "黄牛（AR 版）",
  classificationLabel: "家畜（耕作与驮运）",
  visibleFeature: "看它温厚的眼神——几千年来，黄牛一直是东亚农田里最重要的劳力。",
  narration: {
    sentences: [
          "这是黄牛，耕田拉车的老牛是农耕文明的大功臣。",
          "“老黄牛精神”就是形容任劳任怨的品格。"
    ],
    pronunciation: [
      {
        text: "黄牛（AR 版）",
        reading: "huáng niú",
      },
    ],
  },
  facts: {
    period: "现代（家牛约一万年前驯化）",
    discoveryRegions: ["东亚（农耕区）","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 2,
      maxMeters: 2.5,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "黄牛是对东亚普通家牛的传统称呼，祖先是野生的原牛。套上轭的牛（“轭牛/阉牛”即 ox）曾是犁地、运输、磨面的主力动力，中国农业文明的发展离不开它们，因此古代许多朝代禁止宰杀耕牛。牛是反刍动物，一天花八小时咀嚼反刍的食物，吃饱后安静卧着反刍的样子，是田园诗里的经典画面。",
  sources: [
    {
        "title": "Cattle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/cattle-mammal",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ox — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ox",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只黄牛模型，二者来源不同；发布前需决定去留或合并。",
            "体长区间不含尾巴；不同黄牛品种体型差异较大。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
