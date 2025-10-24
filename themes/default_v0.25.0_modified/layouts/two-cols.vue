<!--
This overrides the `two-cols` layout from the default theme.
This is very similar to `two-cols-header`, but with a custom footer and also the cols are top oriented.

Example usage:

```md
---
layout: two-cols
---

# This is the headline

::left::

## Left

This shows on the left

::right::

## Right

This shows on the right
```
-->

<script setup lang="ts">
import { useSlots } from 'vue'
import Footer from '../components/Footer.vue'

const props = withDefaults(defineProps<{
  innerClass?: string
}>(), {
  innerClass: '',
})

const slots = useSlots()

const hasSlot = (slot_name: string) => !!slots[slot_name]
</script>

<template>
  <div class="slidev-layout two-columns">
    <div v-if="hasSlot('default')" class="text-left">
      <slot />
    </div>
    <div class="grid grid-cols-2 gap-8">
      <div class="col-left" :class="props.innerClass">
        <slot name="left" />
      </div>
      <div class="col-right" :class="props.innerClass">
        <slot name="right" />
      </div>
    </div>
    <Footer />
  </div>
</template>
