<script lang="ts" setup>
import { useCommonStore } from '@/store/common/common.store'

import UiIosSwitch from '@/components/Ui/UiIosSwitch.vue'

const commonStore = useCommonStore()
</script>

<template>
  <UiIosSwitch
    class="header-theme-switch"
    :isChecked="commonStore.state.isDarkTheme"
    @update:isChecked="commonStore.switchTheme"
  />
</template>

<style lang="scss"></style>
