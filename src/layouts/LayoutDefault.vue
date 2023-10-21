<script setup lang="ts">
import VHeader from '@/components/Header/VHeader.vue'
</script>

<template>
  <div class="layout layout--default">
    layout--default

    <VHeader />

    <main>
      <slot />
    </main>
  </div>
</template>
