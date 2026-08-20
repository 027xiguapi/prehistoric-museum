import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "笑翠鸟（AR 版）",
  classificationLabel: "大型翠鸟（“笑声”闻名）",
  visibleFeature: "看它又大又长的喙——笑翠鸟会叼着猎物往树枝上摔打。",
  narration: {
    sentences: [
          "这是笑翠鸟，叫声像人大笑的翠鸟。",
          "它不捕鱼，专吃蜥蜴、蛇和昆虫。"
    ],
    pronunciation: [
      {
        text: "笑翠鸟（AR 版）",
        reading: "xiào cuì niǎo",
      },
    ],
  },
  facts: {
    period: "现代（翠鸟科延续数千万年）",
    discoveryRegions: ["澳大利亚东部与西南部"],
        size: {
      kind: 'body-length',
      minMeters: 0.28,
      maxMeters: 0.42,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "笑翠鸟是世界上最大的翠鸟科成员，却几乎不靠近水边：它站在枝头俯视地面，发现蜥蜴、蛇、老鼠或大昆虫后俯冲下去，把猎物摔打在树枝上再整条吞下。全家会在黎明和黄昏齐声“大笑”，用来宣示领地，这串笑声也是电影里“丛林背景音”的常客——哪怕电影演的根本不是澳大利亚。笑翠鸟是一夫一妻制，哥哥姐姐会帮父母喂养弟弟妹妹。",
  sources: [
    {
        "title": "Kookaburra — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/kookaburra",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Laughing kookaburra — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Laughing_kookaburra",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "本馆“1048 批次”中另有一只笑翠鸟模型，二者来源不同；发布前需决定去留或合并。",
            "体长区间含较长的尾部。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
