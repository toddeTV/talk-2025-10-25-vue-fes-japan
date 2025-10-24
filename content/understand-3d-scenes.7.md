---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {8,12}
<script setup lang="ts">
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <TresMesh :position="[0, 1, 0]" cast-shadow>
      <TresBoxGeometry :args="[2, 2, 2]" />
      <TresMeshNormalMaterial />
    </TresMesh>
    <TresMesh :position="[0, 0, 0]" receive-shadow>
      <TresPlaneGeometry :args="[10, 10, 1]" />
      <TresMeshToonMaterial color="#fefefe" />
    </TresMesh>
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::
