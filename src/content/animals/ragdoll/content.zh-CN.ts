import type { AnimalContentZhCN } from '../../types'

export const zhCN = {
  name: "布偶猫",
  classificationLabel: "家猫品种（温顺大型猫）",
  visibleFeature: "看它蓝色的眼睛和软软的身子——被抱起来时会像布娃娃一样放松。",
  narration: {
    sentences: [
          "这是布偶猫，被抱起来会全身放松的“布娃娃”猫。",
          "它性格温顺，喜欢跟在主人身后。"
    ],
    pronunciation: [
      {
        text: "布偶猫",
        reading: "bù ǒu māo",
      },
    ],
  },
  facts: {
    period: "现代（品种培育于 20 世纪 60 年代的美国）",
    discoveryRegions: ["美国加利福尼亚州（品种培育地）"],
        size: {
      kind: 'body-length',
      minMeters: 0.45,
      maxMeters: 0.75,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "布偶猫由育种者安·贝克在 20 世纪 60 年代的加州培育，因被抱起时像布娃娃一样瘫软而得名。它是半长毛的大型猫，雄性可达 6–9 千克，重点色的脸、耳朵和尾巴配上蓝眼睛。布偶猫成熟很慢，要到 3–4 岁才完全长大。它们对人依恋度高、忍耐力强，但也因此不适合户外放养——温顺的性格使它们在户外容易受伤。",
  sources: [
    {
        "title": "Ragdoll — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ragdoll",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Ragdoll — 国际爱猫联合会（CFA）",
        "url": "https://cfa.org/breed/ragdoll/",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "体长区间不含蓬松的尾巴；雄性明显大于雌性。",
            "“被抱即瘫软”的程度因个体而异，并非每只猫都完全放松。"
      ],
    editedBy: 'Codex-assisted Chinese draft',
    reviewedBy: '待项目所有者审校',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentZhCN
