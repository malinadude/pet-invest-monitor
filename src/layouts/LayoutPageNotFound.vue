<script setup lang="ts">
  import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="layout layout--empty">
    <TheHeader />

    <main>
      <slot />
    </main>
  </div>
</template>
