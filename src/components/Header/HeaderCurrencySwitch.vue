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
  <UiDropdown class="header-currency-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="header-currency-switch__current-currency">
        {{ currenciesStore.state.currentCurrency.code }}
      </div>
    </template>

    <template #content="props">
      <div class="header-currency-switch__currencies">
        <div
          v-for="currency in currenciesStore.getCurrencies()"
          :key="currency.code"
          class="header-currency-switch__currencies-item"
          @click="setCurrency(currency, props.dropdownClose)"
        >
          <img
            :src="currency.icon"
            alt=""
            class="header-currency-switch__currencies-country-flag"
          />

          <div class="header-currency-switch__currencies-code">{{ currency.code }}</div>

          <div class="header-currency-switch__currencies-title">{{ currency.title }}</div>
        </div>
      </div>
    </template>
  </UiDropdown>
</template>

<style lang="scss">
.header-currency-switch {
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
