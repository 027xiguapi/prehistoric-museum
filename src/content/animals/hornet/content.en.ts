import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Asian Giant Hornet",
  classificationLabel: "Largest hornet",
  visibleFeature: "Look at the yellow head and powerful jaws — this is the world’s largest hornet.",
  narration: {
    sentences: [
          "This is the Asian giant hornet — the largest hornet, with a potent sting; observe from afar.",
          "Honeybees fight back by mobbing it in a hot bee-ball that cooks the invader."
    ],
    pronunciation: [
      {
        text: "Asian Giant Hornet",
        reading: "AY-zhan JY-ant HOR-net",
      },
    ],
  },
  facts: {
    period: "Present day (hornet family tens of millions of years old)",
    discoveryRegions: ["East and North-East Asia (Japan, China, Korea)"],
        size: {
      kind: 'body-length',
      minMeters: 0.035,
      maxMeters: 0.055,
    },
    diet: "omnivore",
  },
  parentClassificationNote: "The Asian giant hornet reaches five centimetres with a six-millimetre sting; its aggression peaks around nests in autumn, so distance is essential. It preys on honeybees — a handful of hornets can destroy a hive. Japanese honeybees have evolved a remarkable defence: hundreds of workers engulf the scout in a tight ball and vibrate, cooking the hornet at nearly 50 degrees. Hornets also eat pest insects and belong in the forest; the rule for people is simply to keep a respectful distance.",
  sources: [
    {
        "title": "Asian giant hornet — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Asian_giant_hornet",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "オオスズメバチ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/oosuzumebachi.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes wings and sting; queens are clearly larger than workers.",
            "The bee-ball defence is documented chiefly in Japanese honeybees; western honeybees cannot do it."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
