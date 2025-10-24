<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  height?: string
  url?: string
}>(), {
  height: '100%',
  url: '',
})

const zligDemoUrl = computed<string | undefined>(() => {
  const url = (import.meta as any).env.VITE_ZLIG_DEMO_URL as string | undefined
  if (!url) {
    return undefined
  }
  return url
})
</script>

<template>
  <iframe
    v-if="zligDemoUrl"
    :height="height"
    :src="`${zligDemoUrl}${props.url}`"
    width="100%"
  />
  <div v-else>
    Environment variable `VITE_ZLIG_DEMO_URL` is not set. Please set it to use this feature.
  </div>
</template>

<style scoped>
</style>
