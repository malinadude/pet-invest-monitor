<script lang="ts" setup generic="TContent">
import { computed } from 'vue'

import TableBodyElementActions from './TableBodyElementActions.vue'

import type { ITableBodyElement, TTableAction } from '../model/table.types'

const props = defineProps<{
  element: ITableBodyElement<TContent>
}>()

const classes = computed(() => {
  const classes = []

  if (props.element.align) {
    classes.push(`ui-table-body-element--${props.element.align}`)
  }

  return classes
})

const emit = defineEmits(['triggerAction'])

const handlerAction = (action: TTableAction) => {
  emit('triggerAction', {
    action,
    elementId: props.element.elementId
  })
}
</script>

<template>
  <div class="ui-table-body-element" :class="classes">
    <template v-if="props.element.code === 'actions'">
      <TableBodyElementActions
        class="ui-table-body-element__content"
        :actions="props.element.content as TTableAction[]"
        @triggerAction="handlerAction"
      />
    </template>
    <template v-else>
      <div class="ui-table-body-element__content" v-html="props.element.content" />
    </template>
  </div>
</template>

<style lang="scss">
.ui-table-body-element {
  display: flex;

  &--left {
    justify-content: flex-start;
  }
  &--right {
    justify-content: flex-end;
  }
  &--center {
    justify-content: center;
  }
}
</style>
