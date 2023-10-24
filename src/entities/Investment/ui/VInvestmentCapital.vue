<script lang="ts" setup>
import { VContentBlock, VSymbol, VHelp } from '@/shared/ui'
</script>

<template>
  <VContentBlock class="investment-capital">
    <template #title>
      <VSymbol :size="20" color="primary">
        <FontAwesomeIcon :icon="['fas', 'wallet']" />
      </VSymbol>

      <span>Стоимость</span>

      <VHelp :has-trigger-icon-help="true">
        <template #content> test </template>
      </VHelp>
    </template>
  </VContentBlock>
</template>

<style lang="scss"></style>
