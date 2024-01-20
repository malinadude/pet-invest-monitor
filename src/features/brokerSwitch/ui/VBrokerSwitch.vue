<script setup lang="ts">
import { useCurrencyStore } from '@/entities/Currency'
import { VDropdown, VSymbol } from '@/shared/ui'

import type { ICurrency } from '@/entities/Currency'
import { VBriefcaseAddButton, VBriefcaseListButton } from '@/entities/Briefcase'

const currencyStore = useCurrencyStore()

const setCurrency = (currency: ICurrency, callbackDropdownClose: Function) => {
  currencyStore.setCurrency(currency)
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="broker-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="broker-switch__active-briefcase">
        <div class="broker-switch-broker-icon">
          <img
            :src="briefcaseStore.state.activeBriefcase.broker.icon"
            :alt="briefcaseStore.state.activeBriefcase.broker.name"
          />
        </div>

        <div class="broker-switch-name">
          {{ briefcaseStore.state.activeBriefcase.name }}
        </div>
      </div>
    </template>

    <template #content="dropdownProps">
      <div class="broker-switch__briefcases">
        <div
          v-for="briefcase in briefcaseStore.briefcases"
          :key="briefcase.id"
          class="broker-switch__briefcases-item"
          @click="setBriefcase(briefcase, dropdownProps.dropdownClose)"
        >
          <VSymbol color="grey" :size="25" class="broker-switch-broker-icon">
            <img :src="briefcase.broker.icon" :alt="briefcase.broker.name" />
          </VSymbol>

          <div class="broker-switch-name">
            {{ briefcase.name }}
          </div>
        </div>
      </div>

      <div class="broker-switch__actions">
        <VBriefcaseAddButton @click="dropdownProps.dropdownClose()" />
        <VBriefcaseListButton @click="dropdownProps.dropdownClose()" />
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
