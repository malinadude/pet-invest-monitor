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
.ui-dropdown {
  position: relative;

  &__trigger {
    cursor: pointer;
  }

  &__content {
    position: absolute;
    right: 0;
    top: calc(100% + 15px);
    background-color: var(--bg-main-color);
    box-shadow: 0 6px 15px rgba(10, 10, 13, 0.651);
    padding: 15px;
    border: 0 solid hsla(0, 0%, 100%, 0.15);
    border-radius: 0.42rem;
    z-index: 3;
  }
}
</style>
