import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "卡斯罗犬（AR 版）",
  classificationLabel: "意大利护卫犬",
  visibleFeature: "看它宽阔的头和结实的身体——名字来自拉丁语“守护犬”。",
  narration: {
    sentences: [
          "这是卡斯罗犬，意大利古老的护卫犬和农场犬。",
          "它的祖先可以追溯到古罗马的战争犬。"
    ],
    pronunciation: [
      {
        text: "卡斯罗犬（AR 版）",
        reading: "kǎ sī luó quǎn",
      },
    ],
  },
  facts: {
    period: "现代（品种传统可溯至古罗马，20 世纪 80 年代复兴）",
    discoveryRegions: ["意大利南部（品种发源地）"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "卡斯罗的名字通常被追溯到拉丁语“cohors”（护卫、庭院卫队）。它曾在意大利南部的农场里看守牲畜、驱赶野猪、护卫家园，第二次世界大战后几乎灭绝，20 世纪 80 年代爱好者重新收集乡间残存的犬只复兴了这个品种。它沉稳、专注、对家人忠诚，但护卫本能强，必须由有经验的主人进行系统的社会化训练。",
  sources: [
    {
        "title": "Cane Corso — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/cane-corso/",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Cane Corso — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cane_Corso",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只意大利敖犬（卡斯罗）模型，二者来源不同；发布前需决定去留或合并。",
            "“直系源自古罗马战犬”是品种传统叙述，缺乏连续谱系证据。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
