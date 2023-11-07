<script lang="ts" setup>
import { computed, ref, toRaw } from 'vue'
import { useEventBus } from '@vueuse/core'
import { useCloned } from '@vueuse/core'

import { VContentBlock, VInput, VButton } from '@/shared/ui'
import { useBriefcaseStore, VModalWrapperBriefcaseManage } from '@/entities/Briefcase'
import { checkValidationRequired } from '@/shared/lib/helpers'

import type { Ref } from 'vue'
import type { INotification } from '@/shared/ui'
import type { IBriefcase } from '@/entities/Briefcase/model/briefcase.types'

const briefcaseStore = useBriefcaseStore()

const briefcaseModel: Ref<IBriefcase | null> = ref(null)
const isOpened = ref(false)

const busNotificationAdd = useEventBus<INotification>('notificationAdd')
const busModalBriefcaseEdit = useEventBus<number>('modalBriefcaseEdit')

busModalBriefcaseEdit.on((briefcaseId: number) => {
  isOpened.value = true

  const foundedBriefcase = briefcaseStore.getBriefcase(briefcaseId)
  if (foundedBriefcase) {
    const { cloned } = useCloned(foundedBriefcase)
    briefcaseModel.value = cloned.value
  }
})

const modalClose = () => {
  isOpened.value = false
  briefcaseModel.value = null
}

const validateRequiredBriefcaseModel = computed(() => {
  if (briefcaseModel.value) return checkValidationRequired(briefcaseModel.value)

  return false
})

const briefcaseEdit = async () => {
  if (briefcaseModel.value) {
    briefcaseStore.updateBriefcase(toRaw(briefcaseModel.value))
  } else {
    busNotificationAdd.emit({
      title: 'Неккоректные данные портфеля',
      type: 'danger'
    })
  }

  modalClose()
}
</script>

<template>
  <VModalWrapperBriefcaseManage
    modal-id="modal-briefcase-edit"
    :is-opened="isOpened"
    @modal-close="modalClose"
  >
    <VContentBlock>
      <template #title>Редактирование портфеля</template>

      <template #content>
        <div v-if="briefcaseModel" class="modal-briefcase-manage__content">
          <div class="modal-briefcase-manage__fields">
            <VInput v-model="briefcaseModel.name">
              <template #title>Название портфеля</template>
            </VInput>
          </div>

          <div class="modal-briefcase-manage__actions">
            <VButton class="modal-briefcase-manage__close" @click="modalClose">Отменить</VButton>
            <VButton
              class="modal-briefcase-manage__create"
              :disabled="!validateRequiredBriefcaseModel"
              @click="briefcaseEdit"
            >
              Далее
            </VButton>
          </div>
        </div>
      </template>
    </VContentBlock>
  </VModalWrapperBriefcaseManage>
</template>
