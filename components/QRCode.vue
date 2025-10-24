<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'

const props = defineProps<{
  content: string
  size: number
}>()
</script>

<template>
  <qrcode-vue
    render-as="svg"
    :size="props.size"
    :value="props.content"
  />
</template>

<style scoped>
</style>
