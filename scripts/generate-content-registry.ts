import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'

import { repositoryRoot } from './content-data'
import {
  renderAnimalModulesModule,
  renderModelPreviewModulesModule,
} from './content-registry'

await Promise.all([
  writeFile(
    join(repositoryRoot, 'src/content/animal-modules.generated.ts'),
    await renderAnimalModulesModule(),
    'utf8',
  ),
  writeFile(
    join(repositoryRoot, 'src/viewer/model-preview-modules.generated.ts'),
    await renderModelPreviewModulesModule(),
    'utf8',
  ),
])

console.log('Generated content module registries.')
