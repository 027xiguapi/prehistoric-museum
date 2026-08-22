import type { AnimalContentZhCN } from '@/src/content/types'

export const zhCN = {
  name: "伶盗龙",
  classificationLabel: "驰龙类恐龙（羽毛与镰刀爪）",
  visibleFeature: "看它后腿上翘起的镰刀爪——真实的伶盗龙只有火鸡那么大，还长着羽毛。",
  narration: {
    sentences: [
          "这是伶盗龙，电影里被放大成“迅猛龙”的原型。",
          "真实的它浑身长羽，大小和一只火鸡差不多。"
    ],
    pronunciation: [
      {
        text: "伶盗龙",
        reading: "líng dào lóng",
      },
    ],
  },
  facts: {
    period: "晚白垩世（约 7500 万–7100 万年前）",
    discoveryRegions: ["蒙古","中国内蒙古"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 2,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "伶盗龙是沙漠中的小型猎手：骨骼轻盈、后腿修长，每只脚的第二趾长着约 6.5 厘米的镰刀爪，用来按住或刺击猎物。2007 年科学家在它的前臂骨上发现了羽茎瘤——羽毛附着的“纽扣”，证明它真的有羽毛（羽毛最初用于保暖和展示，而非飞行）。著名的“搏斗中的恐龙”化石定格了一只伶盗龙与原角龙搏斗的瞬间。《侏罗纪公园》里那些高大的“迅猛龙”其实参考的是恐爪龙，而且去掉了羽毛。",
  sources: [
    {
        "title": "Velociraptor — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/Velociraptor",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Velociraptor — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Velociraptor",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间大部分来自细长的尾巴；体重仅约 15–20 千克。",
            "本模型延续电影式无毛/低羽复原，与科学证据不符，发布前需在文案中明确说明。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
