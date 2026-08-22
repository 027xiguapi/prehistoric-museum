import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "卡斯罗犬",
  classificationLabel: "意大利獒犬",
  visibleFeature: "看它宽大的嘴巴和结实的胸膛，它是很强壮的工作犬。",
  narration: {
    sentences: [
          "这是卡斯罗犬，来自意大利的大个子守卫犬。",
          "它有结实的身体和聪明的眼神，很久以前还陪罗马人一起工作。"
    ],
    pronunciation: [
      {
        text: "卡斯罗犬",
        reading: "kǎ sī luó quǎn",
      },
    ],
  },
  facts: {
    period: "现代（约 2000 年前起源至今）",
    discoveryRegions: ["意大利"],
        size: {
      kind: 'shoulder-height',
      minMeters: 0.58,
      maxMeters: 0.7,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "卡斯罗犬是意大利的古老獒犬，名字来自拉丁语“看护者”。它曾是农场里赶牛、护卫的好帮手，力气大又忠诚。像所有大狗一样，它需要足够的运动和负责任的训练；对小主人温柔、对陌生人警惕是它的天性。",
  sources: [
    {
        "title": "Cane Corso — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cane-corso/",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Dog — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/dog",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "肩高为成年犬的大致区间，个体差异较大。",
            "品种历史说法多样，本页采用通行的简述。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentZhCN
