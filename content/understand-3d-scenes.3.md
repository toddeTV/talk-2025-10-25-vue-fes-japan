---
layout: two-cols
preload: false
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {7-8}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>
```
````

<div class="mt-4">

Thankfully, ThreeJS and TresJS create the world for us when setting up a canvas.

</div>

::right::
