---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {2-5,12-14}
<script setup lang="ts">
import {
  EffectComposerPmndrs,
  PixelationPmndrs
} from '@tresjs/post-processing'
// [...]
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- [...] -->
    <EffectComposerPmndrs>
      <PixelationPmndrs />
    </EffectComposerPmndrs>
    <!-- [...] -->
  </TresCanvas>
</template>
```
````

::right::
