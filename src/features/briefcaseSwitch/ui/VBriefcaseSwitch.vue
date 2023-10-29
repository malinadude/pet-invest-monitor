<script setup lang="ts">
import { useBriefcaseStore } from '@/entities/Briefcase'

import { VDropdown, VSymbol } from '@/shared/ui'
import { VBriefcaseAddButton, VBriefcaseListButton } from '@/entities/Briefcase'

import type { IBriefcase } from '@/entities/Briefcase'

const briefcaseStore = useBriefcaseStore()

const setBriefcase = (briefcase: IBriefcase, callbackDropdownClose: Function) => {
  briefcaseStore.setActiveBriefcase(briefcase.id)
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="briefcase-switch" :hasTriggerArrow="true">
    <template #trigger>
      <div class="briefcase-switch__active-briefcase">
        <div class="briefcase-switch-broker-icon">
          <img
            :src="briefcaseStore.state.activeBriefcase.broker.icon"
            :alt="briefcaseStore.state.activeBriefcase.broker.name"
          />
        </div>

        <div class="briefcase-switch-name">
          {{ briefcaseStore.state.activeBriefcase.name }}
        </div>
      </div>
    </template>

    <template #content="dropdownProps">
      <div class="briefcase-switch__briefcases">
        <div
          v-for="briefcase in briefcaseStore.briefcases"
          :key="briefcase.id"
          class="briefcase-switch__briefcases-item"
          @click="setBriefcase(briefcase, dropdownProps.dropdownClose)"
        >
          <VSymbol color="grey" :size="25" class="briefcase-switch-broker-icon">
            <img :src="briefcase.broker.icon" :alt="briefcase.broker.name" />
          </VSymbol>

          <div class="briefcase-switch-name">
            {{ briefcase.name }}
          </div>
        </div>
      </div>

      <div class="briefcase-switch__actions">
        <VBriefcaseAddButton @click="dropdownProps.dropdownClose()" />
        <VBriefcaseListButton @click="dropdownProps.dropdownClose()" />
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss">
.briefcase-switch {
  $briefcaseSwitch: &;

  &__active-briefcase {
    display: flex;
    align-items: center;
  }

  &__briefcases {
    padding-bottom: 10px;

    &-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px 15px;

      &:hover {
        background-color: var(--bg-tab-hover);

        #{$briefcaseSwitch}-name {
          color: $primary;
        }
      }
    }
  }

  &__actions {
    border-top: 1px solid #474b5a;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 10px;
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

        #{$briefcaseSwitch}-name {
          color: $primary;
        }
      }
    }

    &__content {
      width: 260px;
    }
  }

  &-broker {
    &-icon {
      display: inline-flex;
      margin-right: 5px;
    }
  }
}
</style>
