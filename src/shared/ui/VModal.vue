<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    isOpened: boolean
    modalId: string
    modalClasses?: string[]
  }>(),
  {
    isOpened: false,
    modalClasses: () => []
  }
)

const emit = defineEmits(['modalClose'])

const modalClose = () => {
  emit('modalClose')
}
</script>

<template>
  <teleport to="#app-wrapper">
    <Transition>
      <div class="ui-modal" :class="modalClasses" :id="props.modalId" v-if="props.isOpened">
        <div class="ui-modal-wrapper">
          <div class="ui-modal__body">
            <slot name="body" />
          </div>
        </div>

        <div class="ui-modal__overlay" @click="modalClose" />
      </div>
    </Transition>
  </teleport>
</template>

<style lang="scss">
.ui-modal {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 4;

  &-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  &__body {
    position: relative;
    z-index: 2;
  }

  &__overlay {
    z-index: 1;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba($grey-4, 0.5);
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
