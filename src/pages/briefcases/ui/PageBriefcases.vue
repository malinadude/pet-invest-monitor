<script setup lang="ts">
import { VBriefcasesManage } from '@/features/briefcasesManage'
import { VModalBriefcaseAdd } from '@/features/modalBriefcaseAdd'
import { VModalBriefcaseEdit } from '@/features/modalBriefcaseEdit'
import { ModalConfirmation } from '@/shared/ui'
</script>

<template>
  <div class="page-briefcases">
    <VBriefcasesManage />

    <VModalBriefcaseAdd />
    <VModalBriefcaseEdit />
    <ModalConfirmation />
  </div>
</template>
