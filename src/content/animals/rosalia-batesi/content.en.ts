import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Rosalia Batesi Longicorn Beetle",
  classificationLabel: "Longhorn beetle (blue velvet)",
  visibleFeature: "Look at the blue-grey body and extremely long antennae — longhorn antennae often outgrow the body.",
  narration: {
    sentences: [
          "This is Rosalia batesi, a longhorn beetle dressed in blue velvet.",
          "Its extra-long antennae are aerials for sniffing out the right tree."
    ],
    pronunciation: [
      {
        text: "Rosalia Batesi Longicorn Beetle",
        reading: "roh-ZAY-lee-a BAYTS-ee-eye",
      },
    ],
  },
  facts: {
    period: "Present day (longhorn family over 100 million years old)",
    discoveryRegions: ["mountain forests of Japan"],
        size: {
      kind: 'body-length',
      minMeters: 0.02,
      maxMeters: 0.035,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "Rosalia batesi is among the most beautiful beetles of Japan’s beech forests: a blue-grey velvet body scattered with black spots, and antennae banded black and blue. Named after the British entomologist Henry Walter Bates, the adults appear in summer on beech and other broadleaf trees, and the female lays eggs in bark crevices of weakened trees; the wood-boring larvae take two or three years to emerge. With mountain forests shrinking, it is classed Near Threatened in Japan.",
  sources: [
    {
        "title": "Rosalia batesi — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Rosalia_batesi",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "ルリボシカミキリ — 日本昆虫数据库",
        "url": "https://www.mushinavi.com/navi-insect/data-insect/ruriboshikamikiri.htm",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size excludes the antennae, which can exceed twice the body length.",
            "The Chinese name is a calque of the Japanese kanji name rather than a formal name."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
