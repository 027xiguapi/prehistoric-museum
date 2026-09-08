import type { AnimalArticleSource } from '@/src/content/blog/articles/types'
import { stegosaurus } from '@/src/content/blog/articles/stegosaurus'
import { pteranodon } from '@/src/content/blog/articles/pteranodon'
import { pachycephalosaurus } from '@/src/content/blog/articles/pachycephalosaurus'
import { ichthyosaur } from '@/src/content/blog/articles/ichthyosaur'
import { tyrannosaurusRex } from '@/src/content/blog/articles/tyrannosaurus-rex'
import { rhamphorhynchus } from '@/src/content/blog/articles/rhamphorhynchus'
import { triceratops } from '@/src/content/blog/articles/triceratops'
import { apatosaurus } from '@/src/content/blog/articles/apatosaurus'
import { plesiosaurus } from '@/src/content/blog/articles/plesiosaurus'
import { gigantoraptor } from '@/src/content/blog/articles/gigantoraptor'
import { tupandactylus } from '@/src/content/blog/articles/tupandactylus'
import { mammoth } from '@/src/content/blog/articles/mammoth'
import { megalodon } from '@/src/content/blog/articles/megalodon'
import { maiasaura } from '@/src/content/blog/articles/maiasaura'
import { sauropelta } from '@/src/content/blog/articles/sauropelta'
import { meganeura } from '@/src/content/blog/articles/meganeura'
import { dilophosaurus } from '@/src/content/blog/articles/dilophosaurus'
import { mosasaurus } from '@/src/content/blog/articles/mosasaurus'
import { ankylosaurus } from '@/src/content/blog/articles/ankylosaurus'
import { brachiosaurus } from '@/src/content/blog/articles/brachiosaurus'
import { parasaurolophus } from '@/src/content/blog/articles/parasaurolophus'
import { spinosaurus } from '@/src/content/blog/articles/spinosaurus'
import { velociraptor } from '@/src/content/blog/articles/velociraptor'
import { saberToothedTiger } from '@/src/content/blog/articles/saber-toothed-tiger'
import { dragonfly } from '@/src/content/blog/articles/dragonfly'
import { swallowtailButterfly } from '@/src/content/blog/articles/swallowtail-butterfly'
import { morphoButterfly } from '@/src/content/blog/articles/morpho-butterfly'
import { atlasMoth } from '@/src/content/blog/articles/atlas-moth'
import { firefly } from '@/src/content/blog/articles/firefly'
import { hornet } from '@/src/content/blog/articles/hornet'
import { atlasBeetle } from '@/src/content/blog/articles/atlas-beetle'
import { giantStagBeetle } from '@/src/content/blog/articles/giant-stag-beetle'
import { herculesBeetle } from '@/src/content/blog/articles/hercules-beetle'
import { jewelBeetle } from '@/src/content/blog/articles/jewel-beetle'
import { rhinocerosBeetle } from '@/src/content/blog/articles/rhinoceros-beetle'
import { rosaliaBatesi } from '@/src/content/blog/articles/rosalia-batesi'
import { shiningBallScarab } from '@/src/content/blog/articles/shining-ball-scarab'
import { stagBeetle } from '@/src/content/blog/articles/stag-beetle'
import { brownCicada } from '@/src/content/blog/articles/brown-cicada'
import { eveningCicada } from '@/src/content/blog/articles/evening-cicada'
import { periodicalCicada } from '@/src/content/blog/articles/periodical-cicada'
import { robustCicada } from '@/src/content/blog/articles/robust-cicada'
import { walkersCicada } from '@/src/content/blog/articles/walkers-cicada'
import { bumblebee } from '@/src/content/blog/articles/bumblebee'
import { centipede } from '@/src/content/blog/articles/centipede'
import { grasshopper } from '@/src/content/blog/articles/grasshopper'
import { ladybug } from '@/src/content/blog/articles/ladybug'
import { mantis } from '@/src/content/blog/articles/mantis'
import { scorpion } from '@/src/content/blog/articles/scorpion'

/**
 * Article sources keyed by animal id. Each entry holds both content locales as
 * raw markdown (with YAML front-matter). The loader below turns these strings
 * into parsed, rendered records at module scope — no filesystem access, so the
 * bundle works under Turbopack and the static export.
 */
export const articleSources: Readonly<
  Record<string, AnimalArticleSource>
> = {
  stegosaurus,
  pteranodon,
  pachycephalosaurus,
  ichthyosaur,
  'tyrannosaurus-rex': tyrannosaurusRex,
  rhamphorhynchus,
  triceratops,
  apatosaurus,
  plesiosaurus,
  gigantoraptor,
  tupandactylus,
  mammoth,
  megalodon,
  maiasaura,
  sauropelta,
  meganeura,
  dilophosaurus,
  mosasaurus,
  ankylosaurus,
  brachiosaurus,
  parasaurolophus,
  spinosaurus,
  velociraptor,
  'saber-toothed-tiger': saberToothedTiger,
  dragonfly,
  'swallowtail-butterfly': swallowtailButterfly,
  'morpho-butterfly': morphoButterfly,
  'atlas-moth': atlasMoth,
  firefly,
  hornet,
  'atlas-beetle': atlasBeetle,
  'giant-stag-beetle': giantStagBeetle,
  'hercules-beetle': herculesBeetle,
  'jewel-beetle': jewelBeetle,
  'rhinoceros-beetle': rhinocerosBeetle,
  'rosalia-batesi': rosaliaBatesi,
  'shining-ball-scarab': shiningBallScarab,
  'stag-beetle': stagBeetle,
  'brown-cicada': brownCicada,
  'evening-cicada': eveningCicada,
  'periodical-cicada': periodicalCicada,
  'robust-cicada': robustCicada,
  'walkers-cicada': walkersCicada,
  bumblebee,
  centipede,
  grasshopper,
  ladybug,
  mantis,
  scorpion,
}
