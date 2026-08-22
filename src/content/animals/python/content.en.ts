import type { AnimalContentEn } from '@/src/content/types'

export const en = {
  name: "Python",
  classificationLabel: "Python snake",
  visibleFeature: "Look at its patterned scales — its lower jaw swings open like a drawer.",
  narration: {
    sentences: [
          "This is the python, the big snake that hugs its prey.",
          "Its jaws swing open amazingly wide to swallow meals bigger than its head."
    ],
    pronunciation: [
      {
        text: "Python",
        reading: "PY-thon",
      },
    ],
  },
  facts: {
    period: "Present day (python family around 50 million years old)",
    discoveryRegions: ["Africa","Asia","Australia"],
        size: {
      kind: 'body-length',
      minMeters: 1.5,
      maxMeters: 6,
    },
    diet: "carnivore",
  },
  parentClassificationNote: "Pythons are non-venomous constrictors that hug prey until it suffocates. The two halves of the lower jaw are joined only by stretchy ligaments and move independently, so they can swallow very wide meals and then fast for months. Heat-sensing pits along the lips work like night-vision for hunting. Some mothers coil around their eggs and shiver to keep them warm.",
  sources: [
    {
        "title": "Python — 大英百科全书（Britannica）",
        "url": "https://www.britannica.com/animal/python-snake",
        "accessedOn": "2026-08-18"
    },
    {
        "title": "Burmese python — 美国国家地理（National Geographic）",
        "url": "https://www.nationalgeographic.com/animals/reptiles/facts/burmese-python",
        "accessedOn": "2026-08-18"
    }
],
  editorial: {
    uncertaintyNotes: [
            "The size range spans most python species; reticulated pythons exceed 6 m.",
            "Egg-brooding behaviour varies by species."
      ],
    editedBy: 'Codex-assisted English draft',
    reviewedBy: 'Pending project-owner review',
    reviewedOn: '2026-08-18',
  },
} satisfies AnimalContentEn
