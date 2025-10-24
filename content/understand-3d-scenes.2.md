---
layout: two-cols
---

<Understand3DScenesHeadline />

::left::

<div class="w-full h-23"></div>

````md magic-move {lines: true}
```vue {*}
<script setup lang="ts">
</script>

<template>
</template>
```

```vue {2,6-8}
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="E1F4FF">
    <!-- 3d scene here -->
  </TresCanvas>
</template>
```
````

<div class="mt-4" v-click="1">

- Clear-color could be the sky.
- Here "full screen", but can be any container in DOM.

</div>

::right::
