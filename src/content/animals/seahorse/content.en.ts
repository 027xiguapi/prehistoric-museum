import type { AnimalContentEn } from '../../types'

export const en = {
  name: "Seahorse",
  classificationLabel: "Fish",
  visibleFeature: "Look at its upright little body and curled tail — it is actually a slow-swimming fish.",
  narration: {
    sentences: ["This is a seahorse, a small fish that lives in the sea.","It swims upright and grips seagrass with its curled tail so the current does not wash it away."],
    pronunciation: [
      { text: "Seahorse", reading: "SEE-hors" },
    ],
  },
  facts: {
    period: "Present day (Holocene)",
    discoveryRegions: ["Shallow temperate and tropical seas worldwide"],
    size: {
      kind: 'body-length',
      minMeters: 0.05,
      maxMeters: 0.15,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Despite the “horse” in its name, a seahorse is really a small fish. It swims slowly in an upright position and wraps its curled tail around seagrass to rest. The most unusual thing about seahorses is that the father carries and hatches the babies. They prefer shallow seas full of seagrass.",
  sources: [
    {
        "title": "Seahorse — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/sea-horse",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Seahorses — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/fish/facts/seahorses",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["Seahorses come in many sizes; this page shows a common small species, and the range is approximate."],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentEn
