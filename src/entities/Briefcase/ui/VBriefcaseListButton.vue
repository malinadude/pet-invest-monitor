<script setup lang="ts">
import { VButton } from '@/shared/ui'
</script>

<template>
  <VButton class="briefcase-switch__my-briefcases">
    <router-link to="/briefcases">
      <FontAwesomeIcon :icon="['fas', 'briefcase']" />
      Мои портфели
    </router-link>
  </VButton>
</template>
