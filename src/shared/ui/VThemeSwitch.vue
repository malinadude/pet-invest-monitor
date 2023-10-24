<script lang="ts" setup>
import { useCommonStore } from '@/shared/model/store'

import { VIosSwitch } from '@/shared/ui'

const commonStore = useCommonStore()
</script>

<template>
  <VIosSwitch
    class="theme-switch"
    :is-checked="commonStore.state.isDarkTheme"
    @update:is-checked="commonStore.switchTheme"
  />
</template>

<style lang="scss"></style>
