<script lang="ts" setup>
import TableSectionContainer from './TableSectionContainer.vue'

import type { TTableHead, ITableStyles } from '../model/table.types'

const props = defineProps<{
  head: TTableHead
  styles: ITableStyles
}>()
</script>

<template>
  <TableSectionContainer class="ui-table-head" :styles="props.styles">
    <div v-for="headElement in props.head" :key="headElement.code" class="ui-table-attribute">
      {{ headElement.title }}
    </div>
  </TableSectionContainer>
</template>

<style lang="scss">
.ui-table-head {
  border-bottom: 1px solid #474b5a;
  margin-bottom: 1rem;
  padding: 1rem 0;
}
</style>
