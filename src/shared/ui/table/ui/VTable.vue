<script setup lang="ts" generic="TContent">
import TableHead from './TableHead.vue'
import TableBody from './TableBody.vue'

import type { ITableActionData, ITableData } from '../model/table.types'

const props = defineProps<{
  tableData: ITableData<TContent>
}>()

const emit = defineEmits(['triggerAction'])

const handlerAction = (actionData: ITableActionData) => {
  emit('triggerAction', actionData)
}
</script>

<template>
  <div class="ui-table">
    <div class="ui-table__actions">
      <slot name="actions" />
    </div>

    <ol class="ui-table__table">
      <TableHead :head="props.tableData.head" :styles="props.tableData.styles" />
      <TableBody
        :body="props.tableData.body"
        :styles="props.tableData.styles"
        @triggerAction="handlerAction"
      />
    </ol>
  </div>
</template>

<style lang="scss">
.ui-table {
  &__actions {
    margin-bottom: 1rem;
  }

  &-head {
    padding: 1rem 0;
    border-bottom: 2px solid #474b5a;
    margin-bottom: 1rem;
  }

  &-body {
    padding: 1rem 0;
  }
}
</style>
