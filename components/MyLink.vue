<script setup lang="ts">
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <a
    :href="props.to"
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot />
  </a>
</template>

<style scoped>
</style>
