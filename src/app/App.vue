<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'

import { useCommonStore } from '@/shared/model/store'
import { TheHeader } from '@/widgets/header'
import { VNotifications } from '@/shared/ui'

const route = useRoute()
const layout = computed(() => route.meta.layout)

const commonStore = useCommonStore()

const themeClass = computed(() => {
  return commonStore.state.isDarkTheme ? `theme-dark` : 'theme-light'
})
</script>

<template>
  <div id="app-wrapper" :class="themeClass">
    <Component :is="layout">
      <template #header>
        <TheHeader />
      </template>

      <RouterView />
    </Component>

    <VNotifications />
  </div>
</template>

<style lang="scss">
#app-wrapper {
  &.theme-dark {
    --bg-main-color: #{$grey-1};
    --bg-section-block: #{$grey-2};
    --text-dark-section-block: #{$grey-4};
    --text-light-section-block: #{$grey-7};
    --bg-tab-hover: #3f3f4a;
  }
  &.theme-light {
    --bg-main-color: #{$white};
    --bg-section-block: #{$white};
    --text-section-block: #{$white};
    --text-light-section-block: #{$white};
    --bg-tab-hover: #{$white};
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

body {
  position: relative;
  overflow: hidden;
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

*:not(img):not(input):empty {
  margin: 0;
  padding: 0;
}
</style>
