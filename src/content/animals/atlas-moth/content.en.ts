import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Atlas Moth",
  classificationLabel: "One of the largest moths",
  visibleFeature: "Look at the “snake head” patterns on the wingtips — camouflage to scare off birds.",
  narration: {
    sentences: [
          "This is the Atlas moth, with wings far wider than your hand.",
          "The adult’s mouth is sealed shut — it never eats and lives only to reproduce."
    ],
    pronunciation: [
      {
        text: "Atlas Moth",
        reading: "AT-las moth",
      },
    ],
  },
  facts: {
    period: "Present day (silk-moth family tens of millions of years old)",
    discoveryRegions: ["South and South-East Asia","southern China"],
        size: {
      kind: 'wingspan',
      minMeters: 0.24,
      maxMeters: 0.3,
    },
    diet: "herbivore",
  },
  parentClassificationNote: "The Atlas moth is among the largest moths on Earth, with a wingspan approaching 30 centimetres. The transparent “windows” and snake-head wingtips confuse predators while it rests. Caterpillars feed on tallow tree, camphor, cinnamon and similar leaves, and their tough cocoons are gathered in India for durable “fagara” silk. The adult moth’s mouthparts are non-functional: it lives about one to two weeks on fat stored as a caterpillar, spending everything on mating and egg-laying.",
  sources: [
    {
        "title": "Atlas moth — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Attacus_atlas",
        "accessedOn": "2026-08-20"
    },
    {
        "title": "Attacus atlas — 台湾生命大百科",
        "url": "https://taieol.tw/pages/13380",
        "accessedOn": "2026-08-20"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The wingspan range reflects large individuals; typical adults are smaller.",
            "“World’s largest” depends on the measure — wing area and wingspan favour different giant moths."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-20',
  },
} satisfies AnimalContentEn
