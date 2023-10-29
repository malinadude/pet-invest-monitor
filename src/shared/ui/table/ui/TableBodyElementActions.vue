<script lang="ts" setup>
import { VDropdown, VButton } from '@/shared/ui'

import type { TTableAction } from '../model/table.types'

const props = defineProps<{
  actions: TTableAction[]
}>()

const emit = defineEmits(['triggerAction'])

const triggerAction = (action: TTableAction, functionDropdownClose: Function) => {
  emit('triggerAction', action)

  functionDropdownClose()
}
</script>

<template>
  <VDropdown>
    <template #trigger>
      <VButton>
        <FontAwesomeIcon :icon="['fas', 'bars']" />
      </VButton>
    </template>

    <template #content="dropdownProps">
      <div
        class="table-body-element-action"
        v-for="(action, actionIndex) in props.actions"
        :key="actionIndex"
        @click="triggerAction(action, dropdownProps.dropdownClose)"
      >
        <template v-if="action === 'edit'">
          <FontAwesomeIcon class="table-body-element-action__icon" :icon="['fas', 'pen']" />

          <div class="table-body-element-action__title">Изменить</div>
        </template>
        <template v-else-if="action === 'delete'">
          <FontAwesomeIcon class="table-body-element-action__icon" :icon="['fas', 'trash']" />

          <div class="table-body-element-action__title">Удалить</div>
        </template>
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss">
.table-body-element-action {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 15px;

  &:hover {
    background-color: var(--bg-tab-hover);
  }

  &__icon {
    margin-right: 10px;
  }
}
</style>
