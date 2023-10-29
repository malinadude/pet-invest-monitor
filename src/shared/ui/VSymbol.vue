<script lang="ts" setup>
import { computed } from 'vue'

type SymbolSize = 20 | 25 | 30 | 40
type SymbolColor = 'transparent' | 'primary' | 'success' | 'info' | 'danger' | 'grey'

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
  const classes = []

  classes.push(`ui-symbol--color--${props.color}`)

  return classes
})

const styles = computed(() => {
  return {
    minWidth: `${props.size}px`,
    height: `${props.size}px`
  }
})
</script>

<template>
  <div class="ui-symbol" :class="classes" :style="styles">
    <slot />
  </div>
</template>

<style lang="scss">
.ui-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.42rem;
  font-size: 0.75rem;

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
    &--grey {
      background-color: $grey-3;
      color: $grey-8;
    }
  }
}
</style>
