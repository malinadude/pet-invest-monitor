<script lang="ts" setup generic="TContent">
import TableSectionContainer from './TableSectionContainer.vue'
import TableBodyElement from './TableBodyElement.vue'

import type { ITableStyles, TTableBody, ITableActionData } from '../model/table.types'

const props = defineProps<{
  body: TTableBody<TContent>
  styles: ITableStyles
}>()

const generateBodyElementKey = (bodyStrokeIndex: number, bodyElementIndex: number) => {
  return `${bodyStrokeIndex}-${bodyElementIndex}`
}

const emit = defineEmits(['triggerAction'])

const handlerAction = (actionData: ITableActionData) => {
  emit('triggerAction', actionData)
}
</script>

<template>
  <TableSectionContainer
    v-for="(bodyStroke, bodyStrokeIndex) in props.body"
    :key="bodyStrokeIndex"
    class="ui-table-body-stroke"
    :styles="props.styles"
  >
    <TableBodyElement
      v-for="(bodyElement, bodyElementIndex) in bodyStroke"
      :key="generateBodyElementKey(bodyStrokeIndex, bodyElementIndex)"
      :element="bodyElement"
      @triggerAction="handlerAction"
    />
  </TableSectionContainer>
</template>

<style lang="scss">
.ui-table-body-stroke {
  padding: 0.5rem 0;
}
</style>
