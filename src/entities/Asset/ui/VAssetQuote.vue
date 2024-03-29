<script lang="ts" setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import type { IAssetQuote } from '../model/quote.types'

const props = defineProps<{
  quote: IAssetQuote
}>()

const isProfit = computed((): boolean | null => {
  if (typeof props.quote.isProfit === 'undefined') {
    return null
  }

  return props.quote.isProfit
})

const profitSymbol = computed((): string | HTMLElement => {
  let transformedProfitSymbol = ''

  if (isProfit.value !== null) {
    if (props.quote.type === 'percent') {
      transformedProfitSymbol = `
        <FontAwesomeIcon :icon="['fas', ${isProfit.value ? 'caret-up' : 'caret-down'}]" />
      `
    }

    if (props.quote.type === 'sum') {
      transformedProfitSymbol = isProfit.value ? '+' : '-'
    }
  }

  return transformedProfitSymbol
})

const classes = computed(() => {
  const classes = []

  if (isProfit.value !== null) {
    const profitClass = isProfit.value ? 'success' : 'danger'
    classes.push(`asset-quote--${profitClass}`)
  }

  return classes
})
</script>

<template>
  <div class="asset-quote" :class="classes">
    {{ profitSymbol }}

    {{ props.quote.value }}

    {{ props.quote.symbol }}
  </div>
</template>

<style lang="scss">
.asset-quote {
  &--success {
    color: $success;
  }
  &--danger {
    color: $danger;
  }
}
</style>
