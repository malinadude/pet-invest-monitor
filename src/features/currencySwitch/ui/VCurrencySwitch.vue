<script setup lang="ts">
import { useCurrencyStore } from '@/entities/Currency'

import type { ICurrency } from '@/entities/Currency'

import { VDropdown } from '@/shared/ui'

const currencyStore = useCurrencyStore()

const setCurrency = (currency: ICurrency, callbackDropdownClose: Function) => {
  currencyStore.setCurrency(currency)
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="currency-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="currency-switch__current-currency">
        {{ currencyStore.state.currentCurrency.code }}
      </div>
    </template>

    <template #content="props">
      <div class="currency-switch__currencies">
        <div
          v-for="currency in currencyStore.getCurrencies()"
          :key="currency.code"
          class="currency-switch__currencies-item"
          @click="setCurrency(currency, props.dropdownClose)"
        >
          <img :src="currency.icon" alt="" class="currency-switch__currencies-country-flag" />

          <div class="currency-switch__currencies-code">{{ currency.code }}</div>

          <div class="currency-switch__currencies-title">{{ currency.title }}</div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss">
.currency-switch {
  &__currencies {
    width: 220px;

    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 1rem;

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__current-currency {
    text-transform: uppercase;
  }

  &__currencies-country-flag {
    height: 25px;
    margin-right: 5px;
    border-radius: 5px;
  }

  &__currencies-code {
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 5px;
    font-size: 0.8rem;
    color: #dee2e6;
    background-color: #4d505f;
    border-radius: 0.42rem;
    padding: 0.25rem;
  }
}
</style>
