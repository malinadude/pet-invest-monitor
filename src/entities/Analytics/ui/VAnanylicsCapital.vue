<script lang="ts" setup>
import { VContentBlock, VSymbol, VHelp } from '@/shared/components/ui'
</script>

<template>
  <VContentBlock class="analytics-capital">
    <template #title>
      <VHelp :has-trigger-icon-help="true">
        <template #trigger>
          <VSymbol :size="20" color="primary">
            <FontAwesomeIcon :icon="['fas', 'wallet']" />
          </VSymbol>

          <span>Стоимость</span>
        </template>
      </VHelp>
    </template>
  </VContentBlock>
</template>
