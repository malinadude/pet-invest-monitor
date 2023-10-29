<script setup lang="ts">
import { VModal } from '@/shared/ui'

const props = withDefaults(
  defineProps<{
    isOpened: boolean
    modalId: string
  }>(),
  {
    isOpened: false
  }
)

const modalClasses = ['modal-briefcase-manage']

const emit = defineEmits(['modalClose'])

const modalClose = () => {
  emit('modalClose')
}
</script>

<template>
  <VModal
    :modal-id="props.modalId"
    :modal-classes="modalClasses"
    :is-opened="props.isOpened"
    @modal-close="modalClose"
  >
    <template #body>
      <slot />
    </template>
  </VModal>
</template>

<style lang="scss">
.modal-briefcase-manage {
  .ui-content-block__title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: $white;
  }

  .ui-modal__body {
    width: 47rem;
  }

  &__fields {
    margin-bottom: 1rem;

    & > *:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 0.75rem;
    }
  }
}
</style>
