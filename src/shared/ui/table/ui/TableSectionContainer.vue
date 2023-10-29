<script lang="ts" setup>
import type { ITableStyles } from '../model/table.types'

const props = defineProps<{
  styles: ITableStyles
}>()
</script>

<template>
  <li class="ui-table-section-container" :style="props.styles">
    <slot />
  </li>
</template>

<style lang="scss">
.ui-table-section-container {
  display: grid;
}
</style>
