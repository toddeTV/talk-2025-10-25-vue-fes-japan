---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {4-6,15}
<script setup lang="ts">
import { GLTFModel } from '@tresjs/cientos'
// [...]
function modelClicked(e) {
  clickedKey.value = `"${e.object.name}" clicked`
}
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <Suspense>
      <GLTFModel path="train.gltf"
        cast-shadow receive-shadow
        @click="clicked" />
    </Suspense>
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::
