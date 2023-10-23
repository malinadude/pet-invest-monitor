<script lang="ts" setup>
import { computed } from 'vue'

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
</script>

<template>
  <div class="ui-help">
    <div class="ui-help__trigger" :class="triggerClasses">
      <slot name="trigger" />

      <FontAwesomeIcon
        v-if="props.hasTriggerIconHelp"
        class="ui-help__icon-help"
        :icon="['fas', 'info']"
      />
    </div>

    <div class="ui-help__content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.ui-help {
  &__icon-help {
    border-radius: 50%;
    border: 1px solid;
    width: 0.45rem;
    height: 0.45rem;
    padding: 3px;
    margin-bottom: -4px;
    color: #adb5bd;
  }

  &__trigger {
    display: flex;
    align-items: center;
    border-bottom: 1px dashed transparent;
    padding-bottom: 6px;
    cursor: help;

    & > *:not(:last-child) {
      margin-right: 5px;
    }

    &--bordered {
      border-bottom: 1px dashed #adb5bd;
    }
  }
}
</style>
