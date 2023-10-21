<script lang="ts" setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

defineProps<{
  hasTriggerArrow?: boolean
}>()

const isOpen = ref<boolean>(false)

const toggleDropdownState = (state: boolean) => {
  isOpen.value = state
}

const dropdownClose = () => {
  toggleDropdownState(false)
}
</script>

<template>
  <div class="ui-dropdown" v-on-click-outside="dropdownClose">
    <div class="ui-dropdown__trigger" @click="toggleDropdownState(!isOpen)">
      <div class="ui-dropdown__trigger-wrapper">
        <slot name="trigger" />
      </div>

      <div v-if="hasTriggerArrow" class="ui-dropdown__arrow"></div>
    </div>

    <div class="ui-dropdown__content" v-show="isOpen">
      <slot name="content" :dropdownClose="dropdownClose" />
    </div>
  </div>
</template>

<style lang="scss">
.ui-dropdown__trigger {
  cursor: pointer;
}
</style>
