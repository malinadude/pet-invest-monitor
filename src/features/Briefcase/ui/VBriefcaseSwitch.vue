<script setup lang="ts">
import { useBriefcaseStore } from '@/entities/Briefcase'

import type { IBriefcase } from '@/entities/Briefcase'

import { VDropdown } from '@/shared/components/ui'

const briefcaseStore = useBriefcaseStore()

const addBriefcase = (briefcase: IBriefcase, callbackDropdownClose: Function) => {
  briefcaseStore.setCurrency(briefcase)
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="briefcase-switch" :hasTriggerArrow="true">
    <template #trigger> </template>

    <template #content="props"> </template>
  </VDropdown>
</template>

<style lang="scss"></style>
