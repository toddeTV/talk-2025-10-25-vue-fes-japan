<script setup lang="ts">
import SvgElementFilter from '../SvgElementFilter.vue'
import mySvgContent from '/assets/excalidraw-drawings/gltf-object-hierarchy-graph/gltf-object-hierarchy-graph_light.svg?raw'
</script>

<template>
  <SvgElementFilter
    display-indices="all"
    svg-class="w-full"
    :svg-content="mySvgContent"
  />
</template>
