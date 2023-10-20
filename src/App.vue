<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, RouterView } from 'vue-router';

  const route = useRoute();
  const layout = computed(() => route.meta.layout);
</script>

<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>

<style lang="scss">
  @forward '@/assets/styles/main';
  @use '@/assets/styles/main' as *;

  .layout[data-site-theme='dark'] {
    --bg-main-color: $grey-1;
    --bg-section-block: $grey-2;
    --text-dark-section-block: $grey-4;
    --text-light-section-block: $grey-7;
  }

  .layout[data-site-theme='light'] {
    --bg-main-color: $white;
    --bg-section-block: $white;
    --text-section-block: $white;
    --text-light-section-block: $white;
  }

  body,
  html {
    font-family: $font-family-sans-serif;
  }

  .container {
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;
  }
</style>