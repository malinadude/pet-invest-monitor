<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

import { useCommonStore } from '@/shared/model/store'

import { TheHeader } from '@/widgets/header'

const route = useRoute()
const layout = computed(() => route.meta.layout)

const commonStore = useCommonStore()

const layoutClasses = computed(() => {
  const currentTheme = commonStore.state.isDarkTheme ? `theme-dark` : 'theme-light'

  return [currentTheme]
})
</script>

<template>
  <Component :is="layout" :class="layoutClasses">
    <template #header>
      <TheHeader />
    </template>

    <RouterView />
  </Component>
</template>

<style lang="scss">
.layout {
  &.theme {
    &-dark {
      --bg-main-color: #{$grey-1};
      --bg-section-block: #{$grey-2};
      --text-dark-section-block: #{$grey-4};
      --text-light-section-block: #{$grey-7};
    }
    &-light {
      --bg-main-color: #{$white};
      --bg-section-block: #{$white};
      --text-section-block: #{$white};
      --text-light-section-block: #{$white};
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

*,
:after,
:before {
  box-sizing: border-box;
}

body,
html {
  font-family: $font-family-sans-serif;
  color: $grey-7;
}

.container {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  height: 100%;

  & > * {
    height: 100%;
  }
}

.layout {
  padding-top: $headerHeight;
}

.main {
  padding: 25px;
  background-color: var(--bg-main-color);
  min-height: calc(100vh - #{$headerHeight});
}
</style>
