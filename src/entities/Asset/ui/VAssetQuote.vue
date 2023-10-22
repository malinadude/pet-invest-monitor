<script lang="ts" setup>
import { computed } from 'vue'

import type { IAssetQuote } from '../model/types/quote'

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
      transformedProfitSymbol = `<i class="fas fa-caret-up mr-1 ${
        isProfit.value ? 'text-success' : 'text-danger'
      }"></i>`
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
    classes.push(`asset-quote--${isProfit.value ? 'positive' : 'negative'}`)
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
