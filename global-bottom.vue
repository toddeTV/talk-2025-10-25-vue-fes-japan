<script setup lang="ts">
</script>

<template>
  <!-- QR code at the top right -->
  <div
    class="p-3 flex flex-col gap-1 absolute top-3 right-3 bg-white rounded-md border -z-90 justify-center items-center"
  >
    <QRCode content="https://c1p.eu/facv" :size="105" />
    <div class="w-full text-xs whitespace-nowrap flex flex-row gap-1 justify-center">
      <!-- <mdi-web class="baseColor" /> -->
      <MyLink to="https://c1p.eu/facv">
        https://c1p.eu/facv
      </MyLink>
    </div>
  </div>

  <!-- Emoji Background -->
  <EmojiBackground />
</template>
