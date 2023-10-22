<script lang="ts" setup>
import { useCommonStore } from '@/shared/model/store'

import { VIosSwitch } from '@/shared/components/ui'

const commonStore = useCommonStore()
</script>

<template>
  <VIosSwitch
    class="theme-switch"
    :isChecked="commonStore.state.isDarkTheme"
    @update:isChecked="commonStore.switchTheme"
  />
</template>

<style lang="scss"></style>
