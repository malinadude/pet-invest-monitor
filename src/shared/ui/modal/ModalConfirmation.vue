<script setup lang="ts">
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'

import VModal from './VModal.vue'
import { VButton, VContentBlock } from '@/shared/ui'

import type { Ref } from 'vue'
import type { IModalConfirmationData } from './model/modalConfirmation.types'

const modalClasses = ['modal-confirmation']
const isOpened = ref(false)
const confirmationData: Ref<IModalConfirmationData | null> = ref(null)

const busModalConfirmation = useEventBus<IModalConfirmationData>('modalConfirmation')

busModalConfirmation.on((modalConfirmationData: IModalConfirmationData) => {
  console.log('modalConfirmationData', modalConfirmationData)
  isOpened.value = true

  confirmationData.value = modalConfirmationData
})

const modalClose = () => {
  isOpened.value = false

  confirmationData.value = null
}

const confirmationSuccess = () => {
  if (confirmationData.value) {
    confirmationData.value.callback.function(...(confirmationData.value.callback.args || []))
  }

  modalClose()
}
</script>

<template>
  <VModal
    modal-id="modal-confirmation"
    :modal-classes="modalClasses"
    :is-opened="isOpened"
    @modal-close="modalClose"
  >
    <template #body>
      <VContentBlock>
        <template #title>Подтвердите действие</template>

        <template #content>
          <div class="modal-confirmation__content">
            <div class="modal-confirmation__actions">
              <VButton class="modal-confirmation__close" @click="modalClose">Отменить</VButton>
              <VButton
                :disabled="!confirmationData"
                class="modal-confirmation__create"
                @click="confirmationSuccess"
              >
                Подтвердить
              </VButton>
            </div>
          </div>
        </template>
      </VContentBlock>
    </template>
  </VModal>
</template>

<style lang="scss">
.modal-confirmation {
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > * {
      flex: 1;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .ui-content-block__title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }
}
</style>
