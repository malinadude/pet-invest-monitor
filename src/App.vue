<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute, RouterView } from 'vue-router';

  const route = useRoute();
  const layout = computed(() => route.meta.layout || 'empty-layout');
</script>

<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>
