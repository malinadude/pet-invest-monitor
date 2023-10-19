<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="layout layout--default">
    layout--default

    <TheHeader />

    <main>
      <slot />
    </main>
  </div>
</template>
