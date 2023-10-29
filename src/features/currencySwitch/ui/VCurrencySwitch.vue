<script setup lang="ts">
import { useCurrencyStore } from '@/entities/Currency'
import { VDropdown, VSymbol } from '@/shared/ui'

import type { ICurrency } from '@/entities/Currency'

const currencyStore = useCurrencyStore()

const setCurrency = (currency: ICurrency, callbackDropdownClose: Function) => {
  currencyStore.setCurrency(currency)
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="currency-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="currency-switch__active-currency">
        <div class="currency-switch__active-currency-code">
          {{ currencyStore.state.activeCurrency.code }}
        </div>
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

          <VSymbol color="grey" :size="25" class="currency-switch-code">
            {{ currency.code }}
          </VSymbol>

          <div class="currency-switch-name">{{ currency.name }}</div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss">
.currency-switch {
  $currencySwitch: &;

  &__active-currency {
    text-transform: uppercase;
  }

  &__currencies {
    &-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      font-size: 1rem;
      padding: 5px 15px;

      &:hover {
        background-color: var(--bg-tab-hover);

        #{$currencySwitch}-name {
          color: $primary;
        }
      }

      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .ui-dropdown {
    &__trigger {
      padding: 0.5rem;
      border-radius: 0.42rem;
      font-weight: 600;
      font-size: 0.925rem;

      &:hover {
        background-color: var(--bg-tab-hover);

        #{$currencySwitch}__active-currency-code {
          color: $primary;
        }
      }
    }

    &__content {
      width: 220px;
    }
  }

  &__currencies-country-flag {
    height: 25px;
    margin-right: 5px;
    border-radius: 5px;
  }

  &-code {
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 5px;
    font-size: 0.8rem;
    padding: 0.25rem;
  }
}
</style>
