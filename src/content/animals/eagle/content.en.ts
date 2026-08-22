import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Eagle",
  classificationLabel: "Bird of prey",
  visibleFeature: "Look at its broad wings and hooked beak — it is a powerful hunter of the sky.",
  narration: {
    sentences: ["This is an eagle, a fierce large bird.","It soars on broad wings high in the sky and uses its sharp eyes to spot prey below."],
    pronunciation: [
      { text: "Eagle", reading: "EE-gul" },
    ],
  },
  facts: {
    period: "Present day (Holocene)",
    discoveryRegions: ["All continents except Antarctica"],
    size: {
      kind: 'wingspan',
      minMeters: 1.8,
      maxMeters: 2.3,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "“Eagle” is a general name for large birds of prey. They have broad wings, sharp talons, and a hooked beak. Eagles soar on rising air high in the sky, spot prey with extremely sharp eyesight, and dive down quickly. Most prefer open mountains, grasslands, and coasts, and they sit near the top of the food chain.",
  sources: [
    {
        "title": "Eagle — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/eagle-bird",
        "accessedOn": "2026-08-21"
    },
    {
        "title": "Eagles — National Geographic",
        "url": "https://www.nationalgeographic.com/animals/birds/facts/eagles",
        "accessedOn": "2026-08-21"
    }
],
  editorial: {
    uncertaintyNotes: ["“Eagle” covers many large birds of prey; this page shows a typical eagle, and the wingspan is approximate."],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-21',
  },
} satisfies AnimalContentEn
