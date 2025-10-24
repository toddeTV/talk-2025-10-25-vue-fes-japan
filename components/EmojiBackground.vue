<script setup lang="ts">
import { useStageFlowTools } from '../composables/useStageFlowTools'

const { url: stageFlowToolsDemoUrl } = useStageFlowTools()
</script>

<template>
  <div
    v-if="stageFlowToolsDemoUrl"
    class="w-screen h-full -z-100 absolute top-0 left-0"
  >
    <iframe
      height="100%"
      :src="stageFlowToolsDemoUrl"
      width="100%"
    />
  </div>
</template>
