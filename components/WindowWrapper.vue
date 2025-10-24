<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  background?: string
  height?: 'full' | 'body'
}>(), {
  background: '#ffffff',
})

const style = computed(() => {
  if (props.height === 'body') {
    return 'height: 470px !important; max-height: 470px !important; min-height: 470px !important;'
  }
  if (props.height === 'full') {
    return 'height: 525px !important; max-height: 525px !important; min-height: 525px !important;'
  }
  return ''
})
</script>

<template>
  <div
    class="browser-window"
    :style="style"
  >
    <div class="browser-header">
      <div class="browser-buttons">
        <div class="minimize-btn" />
        <div class="maximize-btn" />
        <div class="close-btn" />
      </div>
    </div>
    <div
      class="browser-content"
      :style="`background-color: ${props.background};`"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Browser window */
.browser-window {
  @apply w-full rounded-md border border-gray-300 shadow-md overflow-hidden max-h-120 h-full relative;
}

/* Browser header */
.browser-header {
  @apply flex items-center justify-end bg-gray-800 text-white p-2 h-[25px];
}

/* Browser control buttons (right aligned) */
.browser-buttons {
  @apply flex space-x-2;
}

.close-btn {
  @apply w-3 h-3 rounded-full bg-red-500;
}

.minimize-btn {
  @apply w-3 h-3 rounded-full bg-yellow-500;
}

.maximize-btn {
  @apply w-3 h-3 rounded-full bg-green-500;
}

/* Browser content with scrollable area */
.browser-content {
  @apply text-gray-700 overflow-x-hidden overflow-y-auto h-full min-h-24 max-h-full;
}
</style>
