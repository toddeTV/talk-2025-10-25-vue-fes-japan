<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  step: number
}>()

const steps = [
  undefined, // 0
  'Renderer', // 1
  'Canvas', // 2
  'World', // 3
  'Camera', // 4
  'Lights', // 5
  'Meshes', // 6
  'Shadows', // 7
  'Models', // 8
  'Interaction', // 9
  'Postprocessing', // 10
  'Animations', // 11
]

const currentStep = computed(() => {
  return [
    steps[props.step - 2],
    steps[props.step - 1],
    steps[props.step],
  ]
})
</script>

<template>
  <div
    class="text-sm baseColor opacity-40"
    :class="{ '!opacity-0': currentStep[0] === undefined }"
  >
    {{ props.step - 2 }} {{ currentStep[0] }}
  </div>
  <div
    class="text-xl baseColor opacity-60"
    :class="{ '!opacity-0': currentStep[1] === undefined }"
  >
    {{ props.step - 1 }} {{ currentStep[1] }}
  </div>
  <div class="text-3xl baseColor">
    {{ props.step - 0 }} {{ currentStep[2] }}
  </div>
</template>

<style scoped>
</style>
