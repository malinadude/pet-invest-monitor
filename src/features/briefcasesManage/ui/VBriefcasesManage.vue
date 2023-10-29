<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useEventBus } from '@vueuse/core'

import { VTable, VContentBlock } from '@/shared/ui'
import { useBriefcaseStore, VBriefcaseAddButton } from '@/entities/Briefcase'
import mapBriefcaseTableBody from '../lib/mappers/briefcaseTableBody.map'

import type {
  ITableData,
  TTableAction,
  ITableActionData,
  INotification,
  IModalConfirmationData
} from '@/shared/ui'

const briefcaseStore = useBriefcaseStore()

const briefcases = computed(() => {
  return mapBriefcaseTableBody(briefcaseStore.briefcases)
})

const tableData: ITableData<string | TTableAction[]> = reactive({
  head: [
    {
      title: 'Название'
    },
    {
      title: 'Создан'
    },
    {
      title: '',
      extraType: 'actions'
    }
  ],
  body: briefcases,
  styles: {
    'grid-template-columns': '10fr 10fr 1fr'
  }
})

const busNotificationAdd = useEventBus<INotification>('notificationAdd')
const busBriefcaseEdit = useEventBus<number>('modalBriefcaseEdit')
const busModalConfirmation = useEventBus<IModalConfirmationData>('modalConfirmation')

const handlerAction = (actionData: ITableActionData) => {
  if (actionData.action === 'delete') {
    if (briefcaseStore.state.activeBriefcase.id === actionData.elementId) {
      busNotificationAdd.emit({
        title: 'Невозможно удалить активный портфель',
        type: 'danger'
      })
    } else {
      busModalConfirmation.emit({
        callback: {
          function: briefcaseStore.deleteBriefcase,
          args: [actionData.elementId]
        }
      })
    }
  }

  if (actionData.action === 'edit') {
    busBriefcaseEdit.emit(actionData.elementId)
  }
}
</script>

<template>
  <VContentBlock class="briefcases-manage">
    <template #outside-title>Управление портфелями</template>

    <template #content>
      <VTable :tableData="tableData" @triggerAction="handlerAction">
        <template #actions>
          <VBriefcaseAddButton />
        </template>
      </VTable>
    </template>
  </VContentBlock>
</template>
