<script setup lang="ts">
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="slidev-layout headline">
    <div class="flex flex-col justify-center h-full">
      <slot />
    </div>
    <Footer />
  </div>
</template>
