---
layout: basic
---

# glTF type generation - generated Example

<div class="flex flex-row gap-4 w-screen">
<div class="overflow-hidden !w-140">

````md magic-move {lines: true}
```ts {*}
// Island.gltf.d.ts
import type { Group, Mesh } from 'three'

declare const path: unique symbol

export const IslandScene: {
  [path]: [0]
  island: {
    [path]: [0, 0]
    beach: {
      [path]: [0, 0, 0]
      rock001: {
        [path]: [0, 0, 0, 0]
      }
    }
  }
}

export function getNode(spec: typeof IslandScene): Promise<Group>
export function getNode(spec: typeof IslandScene.island): Promise<Group>
export function getNode(spec: typeof IslandScene.island.beach): Promise<Group>
export function getNode(spec: typeof IslandScene.island.beach.rock001):
  Promise<Mesh>

export {}
```
````

</div>
<div class="overflow-hidden !w-95">

````md magic-move {lines: true}
```ts {*}
// Island.gltf.js
import gltfLoader from '[default or custom]'
import gltfPath from './Island.gltf'
const path = Symbol()

export const IslandScene = {
  [path]: [0],
  island: {
    [path]: [0, 0],
    beach: {
      [path]: [0, 0, 0],
      rock001: {
        [path]: [0, 0, 0, 0],
      },
    },
  },
}
export async function getNode(spec) {
  let node =
    { children: (await loadModel()).scenes }
  for (const idx of spec[path]) {
    node = node.children[idx]
  }
  return node
}
async function loadModel() {
  return await gltfLoader.loadAsync(gltfPath)
}
```
````

</div>
</div>

<!--
We generate two files per model.
-->
