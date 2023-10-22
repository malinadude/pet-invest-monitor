<script setup lang="ts">
import { useBriefcasesStore } from '@/store/briefcases/briefcases.store'

import type { IBriefcase } from '@/store/briefcases/types'

import UiDropdown from '@/components/Ui/UiDropdown.vue'

const briefcasesStore = useBriefcasesStore()

const addBriefcase = (briefcase: IBriefcase, callbackDropdownClose: Function) => {
  briefcasesStore.setCurrency(briefcase)
  callbackDropdownClose()
}
</script>

<template>
  <UiDropdown class="header-briefcase-switch" :hasTriggerArrow="true">
    <template #trigger> </template>

    <template #content="props"> </template>
  </UiDropdown>
</template>

<style lang="scss"></style>
