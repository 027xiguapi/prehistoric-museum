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
}
