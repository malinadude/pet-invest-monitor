<script setup lang="ts">
import VHeader from '@/components/Header/VHeader.vue'
</script>

<template>
  <div class="layout layout--default">
    <VHeader />

    <main class="main">
      <div class="container">
        <div class="main-wrapper">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
