import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "吉娃娃",
  classificationLabel: "最小的犬种",
  visibleFeature: "看它大大的耳朵和眼睛——它是世界上最小的犬种，体重常常不到两千克。",
  narration: {
    sentences: [
          "这是吉娃娃，口袋大小的墨西哥犬。",
          "个子虽小，它却觉得自己是一只大狗。"
    ],
    pronunciation: [
      {
        text: "吉娃娃",
        reading: "jí wá wa",
      },
    ],
  },
  facts: {
    period: "现代（血统可追溯到古代中美洲伴侣犬）",
    discoveryRegions: ["墨西哥（奇瓦瓦州，品种得名地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.3,
      maxMeters: 0.45,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "吉娃娃因墨西哥奇瓦瓦州得名，祖先常被认为是古代托尔特克人饲养的“泰奇奇”伴侣犬。它脑袋呈苹果形，头顶常有终生不闭合的囟门（像婴儿的软头顶），需要避免磕碰。性格黏人、警觉、爱叫，对主人忠诚度极高，对陌生人多疑。因为太小，它容易低血糖、怕冷，冬天常需要穿衣服。",
  sources: [
    {
        "title": "Chihuahua — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/chihuahua/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Chihuahua (dog breed) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chihuahua_(dog_breed)",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含尾巴。",
            "“直系源自泰奇奇犬”是主流叙述，缺乏完整的谱系证据链。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
