<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useEventBus } from '@vueuse/core'

import { VContentBlock, VInput, VButton } from '@/shared/ui'
import {
  DEFAULT_BRIEFCASE,
  getLastBriefcase,
  useBriefcaseStore,
  VModalWrapperBriefcaseManage
} from '@/entities/Briefcase'
import { checkValidationRequired, getTimestamp } from '@/shared/lib/helpers'
import { EMPTY_BROKER_ID } from '@/entities/Broker'

const isOpened = ref(false)

const busModalBriefcaseAdd = useEventBus<string>('modalBriefcaseAdd')

busModalBriefcaseAdd.on(() => (isOpened.value = true))

const modalClose = () => {
  isOpened.value = false
  briefcaseModel.name = ''
}

const briefcaseStore = useBriefcaseStore()

const briefcaseModel = reactive({
  name: ''
})

const validateRequiredBriefcaseModel = computed(() => checkValidationRequired(briefcaseModel))

const briefcaseAdd = async () => {
  const lastBriefcase = getLastBriefcase()

  console.log('lastBriefcase', lastBriefcase)

  briefcaseStore.addBriefcase({
    ...DEFAULT_BRIEFCASE,
    ...briefcaseModel,
    id: lastBriefcase.id + 1,
    createdAt: getTimestamp(),
    broker: EMPTY_BROKER_ID
  })

  modalClose()
}
</script>

<template>
  <VModalWrapperBriefcaseManage
    modal-id="modal-briefcase-add"
    :is-opened="isOpened"
    @modal-close="modalClose"
  >
    <VContentBlock>
      <template #title>Новый портфель</template>

      <template #content>
        <div class="modal-briefcase-manage__content">
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
              @click="briefcaseAdd"
            >
              Далее
            </VButton>
          </div>
        </div>
      </template>
    </VContentBlock>
  </VModalWrapperBriefcaseManage>
</template>
