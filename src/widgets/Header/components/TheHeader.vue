<script lang="ts" setup>
import type { ILink } from '@/shared/model/types'

import { VThemeSwitch } from '@/features/Theme'
import { VCurrencySwitch } from '@/features/Currency'

const links: ILink[] = [
  {
    title: 'Дашборд',
    to: '/'
  }
]
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <div class="header__links">
          <router-link
            class="header__links-item"
            v-for="link in links"
            :key="link.to"
            :to="link.to"
          >
            {{ link.title }}
          </router-link>
        </div>

        <div class="header__actions">
          <VThemeSwitch />
          <VCurrencySwitch />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: $headerHeight;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  padding: 0 25px;
  box-shadow: 0 0 40px 0 rgba(82, 63, 105, 0.1);
  background-color: var(--bg-main-color);
  border-bottom: 1px solid $grey-9;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__links {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 15px;
    }

    &-item {
      font-size: 1rem;
      font-weight: 500;
      border-radius: 4px;
      padding: 0.65rem 1.1rem;

      &.router-link-active,
      &:hover {
        background-color: #4d505f;
        color: #fff;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
