<script setup lang="ts">
import { useCurrenciesStore } from '@/store/currencies/currencies.store'

import type { ICurrency } from '@/store/currencies/types'

import UiDropdown from '@/components/Ui/UiDropdown.vue'

const currenciesStore = useCurrenciesStore()

const setCurrency = (currency: ICurrency, callbackDropdownClose: Function) => {
  currenciesStore.setCurrency(currency)
  callbackDropdownClose()
}
</script>

<template>
  <UiDropdown class="header-theme-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="header-theme-switch__current-currency">
        {{ currenciesStore.state.currentCurrency.code }}
      </div>
    </template>

    <template #content="props">
      <div class="header-theme-switch__currencies">
        <div
          v-for="currency in currenciesStore.getCurrencies()"
          :key="currency.code"
          class="header-theme-switch__currencies-item"
          @click="setCurrency(currency, props.dropdownClose)"
        >
          <img :src="currency.icon" alt="" class="header-theme-switch__currencies-country-flag" />

          <div class="header-theme-switch__currencies-code">{{ currency.code }}</div>

          <div class="header-theme-switch__currencies-title">{{ currency.title }}</div>
        </div>
      </div>
    </template>
  </UiDropdown>
</template>

<style lang="scss">
.header-theme-switch {
  &__current-currency {
    text-transform: uppercase;
  }

  &__currencies-item {
    cursor: pointer;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__currencies-country-flag {
    height: 25px;
    margin-right: 5px;
  }

  &__currencies-code {
    text-transform: uppercase;
    padding: 2px;
    background-color: red;
    border-radius: 7px;
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
  }
}
</style>
