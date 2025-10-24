<script setup lang="ts">
import { useStageFlowTools } from '../composables/useStageFlowTools'

const { url: stageFlowToolsDemoUrl } = useStageFlowTools()
</script>

<template>
  <WindowWrapper
    background="#E1F4FF"
    height="full"
  >
    <iframe
      v-if="stageFlowToolsDemoUrl"
      height="500px"
      src="https://stage-flow-tools.todde.tv/admin"
      width="100%"
    />
    <div v-else>
      Environment variable `VITE_STAGE_FLOW_TOOLS_DEMO_URL` is not set. Please set it to use this feature.
    </div>
  </WindowWrapper>
</template>
