<script lang="ts" setup>
import { useCommonStore } from '@/store/common/common'

import UiIosSwitch from '@/components/Ui/UiIosSwitch.vue'

const commonStore = useCommonStore()
</script>

<template>
  <UiIosSwitch class="header-theme-switcher" :isChecked="commonStore.isDarkTheme" />
</template>

<style lang="scss"></style>
