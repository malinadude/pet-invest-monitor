<script lang="ts" setup>
import { ref } from 'vue'

defineProps({
  hasTriggerArrow: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)

const toggleDropdownState = (state: boolean) => {
  isOpen.value = state
}
</script>

<template>
  <div class="ui-dropdown">
    <div class="ui-dropdown__trigger" @click="toggleDropdownState(!isOpen)">
      <div class="ui-dropdown__trigger-wrapper">
        <slot name="trigger" />
      </div>

      <div v-if="hasTriggerArrow" class="ui-dropdown__arrow"></div>
    </div>

    <div class="ui-dropdown__content" v-show="isOpen">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.ui-dropdown__trigger {
  cursor: pointer;
}
</style>
