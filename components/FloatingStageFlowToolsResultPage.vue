<script setup lang="ts">
import { onSlideEnter, onSlideLeave } from '@slidev/client'
import { ref } from 'vue'
import { useStageFlowTools } from '../composables/useStageFlowTools'

const props = defineProps<{
  questionId?: string
}>()

const { apiUrl, iframeUrl: stageFlowToolsDemoUrl } = useStageFlowTools()

const isMaximized = ref(false)

function toggleSize() {
  isMaximized.value = !isMaximized.value
}

const iframeSrc = `${stageFlowToolsDemoUrl.value}/results?core&padding=50&scale=0.75`

onSlideEnter(() => {
  if (props.questionId) {
    fetch(`${apiUrl}/api/questions/publish`, {
      body: JSON.stringify({ questionId: props.questionId }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  }
})

onSlideLeave(() => {
  fetch(`${apiUrl}/api/questions/unpublish-active`, {
    method: 'POST',
  })
})
</script>

<template>
  <div
    class="floating-iframe-container"
    :class="{ maximized: isMaximized }"
  >
    <div class="window-wrapper">
      <div class="header">
        <div class="title">
          <span>Live Poll</span>
          <span class="live-indicator" />
        </div>
        <button
          class="toggle-button"
          @click="toggleSize"
        >
          <mdi-arrow-collapse v-if="isMaximized" />
          <mdi-arrow-expand v-else />
        </button>
      </div>
      <div class="iframe-wrapper">
        <iframe
          class="preview-iframe"
          :class="{ 'scaled-down': !isMaximized }"
          frameborder="0"
          :src="iframeSrc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-iframe-container {
  @apply fixed bottom-4 right-4 z-50;
  @apply transition-all duration-500 ease-in-out;
}

.floating-iframe-container.maximized {
  @apply top-4 bottom-4 left-4 right-4;
}

.window-wrapper {
  @apply w-full h-full flex flex-col border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-xl bg-white dark:bg-gray-800;
}

.header {
  @apply flex justify-between items-center p-1 pl-3 bg-gray-200 dark:bg-gray-700 rounded-t-lg;
}

.maximized .header {
  @apply py-2;
}

.title {
  @apply flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200;
}

.live-indicator {
  @apply w-2 h-2 bg-red-500 rounded-full animate-pulse;
}

.maximized .title {
  @apply text-base;
}

.floating-iframe-container:not(.maximized) .title {
  @apply text-sm;
}

.toggle-button {
  @apply flex items-center justify-center bg-gray-300 dark:bg-gray-600 rounded-full;
}

.maximized .toggle-button {
  @apply w-7 h-7 text-base;
}

.floating-iframe-container:not(.maximized) .toggle-button {
  @apply w-5 h-5 text-xs;
}

.iframe-wrapper {
  @apply flex-grow rounded-b-lg overflow-hidden;
}

.preview-iframe {
  @apply w-full h-full rounded-b-lg;
}

.preview-iframe.scaled-down {
  @apply w-[400%] h-[400%];
  transform: scale(0.25);
  transform-origin: top left;
}

.floating-iframe-container:not(.maximized) .window-wrapper {
  width: 320px;
  height: 180px;
}
</style>
