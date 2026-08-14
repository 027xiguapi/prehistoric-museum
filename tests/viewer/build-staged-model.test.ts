import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Group } from 'three'

// Stub the GLTF loader so buildStagedModel never touches a real mesh; we only
// verify the orchestration (fetch, cache, centring, return shape).
vi.mock('three/examples/jsm/loaders/GLTFLoader.js', () => ({
  GLTFLoader: class {
    setMeshoptDecoder() {
      return this
    }
    parseAsync() {
      return Promise.resolve({ scene: new Group(), animations: [] })
    }
  },
}))

import { buildStagedModel } from '../../src/viewer/build-staged-model'
import { ModelCache } from '../../src/viewer/model-cache'
import type { ViewerModelDescriptor } from '../../src/viewer/viewer-model-descriptor'

const descriptor: ViewerModelDescriptor = {
  id: 'test-dino',
  label: 'Test Dino',
  modelUrl: 'https://example.com/test.glb',
  presentation: {
    initialYawDegrees: 0,
    safeAreaPadding: { landscape: 0.1, portrait: 0.1 },
    // opacity 0 skips contact-shadow creation (no canvas 2D context in jsdom).
    shadow: { opacity: 0, scale: 1 },
  },
}

const fetchMock = vi.fn(() =>
  Promise.resolve({
    ok: true,
    headers: { get: () => '42' },
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(42)),
  }),
)

describe('buildStagedModel', () => {
  beforeEach(() => {
    fetchMock.mockClear()
    global.fetch = fetchMock as unknown as typeof fetch
  })

  it('builds a staged model from a fetched GLB', async () => {
    const staged = await buildStagedModel(descriptor, {})
    expect(staged.animalId).toBe('test-dino')
    expect(staged.descriptor).toBe(descriptor)
    expect(staged.group).toBeInstanceOf(Group)
    expect(staged.modelRoot).toBeInstanceOf(Group)
    expect(staged.mixer).toBeNull()
    expect(staged.action).toBeNull()
    expect(staged.disposed).toBe(false)
    expect(staged.loadSource).toBe('network')
  })

  it('serves from the shared memory cache on the second build of the same URL', async () => {
    const cache = new ModelCache()
    const first = await buildStagedModel(descriptor, { modelCache: cache })
    expect(first.loadSource).toBe('network')
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const second = await buildStagedModel(descriptor, { modelCache: cache })
    expect(second.loadSource).toBe('memory-cache')
    // Cache hit: still only the first network call.
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  it('reports model-load failure through the onFailure callback', async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        headers: { get: () => null },
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      }),
    ) as unknown as typeof fetch
    const failures: { kind: string }[] = []
    await expect(
      buildStagedModel(descriptor, {
        onFailure: (failure) => failures.push(failure),
      }),
    ).rejects.toThrow()
    expect(failures).toHaveLength(1)
    expect(failures[0]?.kind).toBe('model-load')
  })
})
