<script lang="ts" setup>
import { computed } from 'vue'

type SymbolSize = 20 | 30 | 40
type SymbolColor = 'transparent' | 'primary' | 'success' | 'info' | 'danger'

const props = withDefaults(
  defineProps<{
    size?: SymbolSize
    color?: SymbolColor
  }>(),
  {
    size: 20,
    color: 'transparent'
  }
)

const classes = computed(() => {
  const transformedClasses = []

  transformedClasses.push(`ui-symbol--color--${props.color}`)
  transformedClasses.push(`ui-symbol--size--${props.size}`)

  return transformedClasses
})
</script>

<template>
  <div class="ui-symbol" :class="classes">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.42rem;

  &--color {
    &--primary {
      background-color: $bg-primary;
      color: $primary;
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
  }

  &--size {
    &--20 {
      width: 20px;
      height: 20px;
      font-size: 0.75rem;
    }
    &--30 {
      width: 30px;
      height: 30px;
    }
    &--40 {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
