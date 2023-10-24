<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useElementHover } from '@vueuse/core'

const props = defineProps<{
  hasTriggerBorder?: boolean
  hasTriggerIconHelp?: boolean
}>()

const triggerClasses = computed(() => {
  const transformedClasses = []

  if (props.hasTriggerBorder) {
    transformedClasses.push('ui-help__trigger--bordered')
  }

  return transformedClasses
})

const triggerHoverElement = ref()
const isHovered = useElementHover(triggerHoverElement)
</script>

<template>
  <div class="ui-help" ref="triggerHoverElement">
    <div class="ui-help__trigger" :class="triggerClasses">
      <slot name="trigger" />

      <FontAwesomeIcon
        v-if="props.hasTriggerIconHelp"
        class="ui-help__icon-help"
        :icon="['fas', 'info']"
      />
    </div>

    <Transition>
      <div class="ui-help__content" v-if="isHovered">
        <div class="ui-help__content-wrapper">
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.ui-help {
  position: relative;

  &__icon-help {
    border-radius: 50%;
    border: 1px solid;
    width: 0.45rem;
    height: 0.45rem;
    padding: 3px;
    color: #adb5bd;
  }

  &__trigger {
    display: flex;
    align-items: center;
    cursor: help;

    & > *:not(:last-child) {
      margin-right: 5px;
    }

    &--bordered {
      border-bottom: 1px dashed #adb5bd;
      padding-bottom: 6px;
    }
  }

  &__content {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    min-width: 300px;

    &:before {
      content: '';
      background-color: #1e1e2d;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 6px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
    }

    &-wrapper {
      background-color: #1e1e2d;
      margin: 10px 0;
      color: #fff;
      padding: 0.75rem 1rem;
      border-radius: 3px;
    }
  }
}
</style>
