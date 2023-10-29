<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

import { VButton } from '@/shared/ui'

const busOpenModalBriefcaseAdd = useEventBus<string>('modalBriefcaseAdd')

const openModalBriefcaseAdd = () => {
  busOpenModalBriefcaseAdd.emit()
}
</script>

<template>
  <VButton class="briefcase-add-button" @click="openModalBriefcaseAdd">
    <FontAwesomeIcon :icon="['fas', 'plus']" />
    Добавить портфель
  </VButton>
</template>
