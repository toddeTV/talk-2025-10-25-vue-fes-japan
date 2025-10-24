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
  const zligDemoUrl = import.meta.env.VITE_ZLIG_DEMO_URL
  if (!zligDemoUrl) {
    return undefined
  }
  return zligDemoUrl
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
    zlig demo base url is not set. Please set it in .env file.
  </div>
</template>

<style scoped>
</style>
