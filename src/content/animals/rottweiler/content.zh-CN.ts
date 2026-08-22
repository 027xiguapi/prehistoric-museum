import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "罗威纳犬",
  classificationLabel: "家犬（工作犬品种）",
  visibleFeature: "看看它黑亮的“西装外套”和胸口的棕色“围兜”。",
  narration: {
    sentences: [
          "这是罗威纳犬，历史最悠久的工作犬之一。",
          "古罗马时代它的祖先赶着牛群行军，后来又拉着屠夫的肉车上街。"
    ],
    pronunciation: [
      {
        text: "罗威纳犬",
        reading: "luó wēi nà quǎn",
      },
    ],
  },
  facts: {
    period: "现代（血统传统可溯至古罗马，品种定型逾百年）",
    discoveryRegions: ["德国罗特韦尔（品种定型）","世界各地"],
        size: {
      kind: 'body-length',
      minMeters: 1,
      maxMeters: 1.3,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "罗威纳犬的名字来自德国小镇罗特韦尔：中世纪的屠夫带着它赶牛进城、看守钱箱，它因此被叫作“屠夫犬”。它力量大、性格沉稳，对家人格外温柔，训练得当后是出色的警犬、搜救犬和治疗犬。养一只罗威纳需要充足的运动和耐心的教导，它会用一辈子的忠诚回报你。",
  sources: [
    {
        "title": "Rottweiler — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Rottweiler",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Rottweiler — 美国养犬俱乐部（AKC）",
        "url": "https://www.akc.org/dog-breeds/rottweiler/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长为头尾长度；公犬明显大于母犬。",
            "“罗马赶牛犬”血统是品种传统叙述，早期细节难以直接考证。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
