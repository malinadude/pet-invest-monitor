<script setup lang="ts">
import { useCurrencyStore } from '@/store/currency/currency'

import UiDropdown from '@/components/Ui/UiDropdown.vue'

const currencyStore = useCurrencyStore()
</script>

<template>
  <UiDropdown class="header-theme-switcher" :hasTriggerArrow="true">
    <template #trigger>
      <div class="header-theme-switcher__current-currency">
        {{ currencyStore.currentCurrency.code }}
      </div>
    </template>

    <template #content>
      <div class="header-theme-switcher__currencies">
        <div
          v-for="currency in currencyStore.getCurrencies()"
          :key="currency.code"
          class="header-theme-switcher__currencies-item"
          @click="currencyStore.setCurrency(currency)"
        >
          <img :src="currency.icon" alt="" class="header-theme-switcher__currencies-country-flag" />

          <div class="header-theme-switcher__currencies-code">{{ currency.code }}</div>

          <div class="header-theme-switcher__currencies-title">{{ currency.title }}</div>
        </div>
      </div>
    </template>
  </UiDropdown>
</template>

<style lang="scss">
.header-theme-switcher {
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
