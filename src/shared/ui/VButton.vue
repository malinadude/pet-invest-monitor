<script lang="ts" setup>
import { computed } from 'vue'

type ButtonColor =
  | 'transparent-primary'
  | 'transparent-grey'
  | 'primary'
  | 'success'
  | 'info'
  | 'danger'

const props = withDefaults(
  defineProps<{
    color?: ButtonColor
  }>(),
  {
    color: 'primary'
  }
)

const classes = computed(() => {
  const classes = []

  classes.push(`ui-button--${props.color}`)

  return classes
})
</script>

<template>
  <button class="ui-button" :class="classes">
    <slot />
  </button>
</template>

<style lang="scss">
.ui-button {
  border: none;
  padding: 0.55rem 0.75rem;
  font-size: 0.925rem;
  line-height: 1.35;
  border-radius: 0.42rem;
  user-select: none;

  &--transparent-primary {
    background-color: transparent;
    color: $primary;

    &:not(:disabled):hover {
      color: $white;
      background-color: $grey-3;
    }
  }

  &--transparent-grey {
    background-color: transparent;
    color: $grey-7;

    &:not(:disabled):hover {
      color: $primary;
      background-color: $grey-3;
    }
  }

  &--primary {
    background-color: $bg-primary;
    color: $primary;

    &:not(:disabled):hover {
      color: $white;
      background-color: $primary;
    }
  }

  &--success {
    background-color: $bg-success;
    color: $success;
  }

  &--info {
    background-color: $bg-info;
    color: $info;
  }

  &--danger {
    background-color: $bg-danger;
    color: $danger;
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
