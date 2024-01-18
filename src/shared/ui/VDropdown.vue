<script lang="ts" setup>
import { computed, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const props = defineProps<{
  hasTriggerArrow?: boolean
}>()

const isOpen = ref<boolean>(false)

const toggleDropdownState = (state: boolean) => {
  isOpen.value = state
}

const dropdownClose = () => {
  toggleDropdownState(false)
}

const classes = computed(() => {
  const classes = []

  if (isOpen.value) {
    classes.push('ui-dropdown--active')
  }

  return classes
})
</script>

<template>
  <div class="ui-dropdown" :class="classes" v-on-click-outside="dropdownClose">
    <div class="ui-dropdown__trigger" @click="toggleDropdownState(!isOpen)">
      <div class="ui-dropdown__trigger-wrapper">
        <slot name="trigger" />
      </div>

      <FontAwesomeIcon
        v-if="props.hasTriggerArrow"
        class="ui-dropdown__arrow"
        :icon="['fas', 'chevron-down']"
      />
    </div>

    <Transition>
      <div class="ui-dropdown__content" v-show="isOpen">
        <slot name="content" :dropdownClose="dropdownClose" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.ui-dropdown {
  $uiDropdown: &;

  position: relative;

  &--active {
    #{$uiDropdown}__arrow {
      transform: rotate(180deg);
    }
  }

  &__trigger {
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
  }

  &__arrow {
    margin-left: 6px;
    height: 9px;
  }

  &__content {
    position: absolute;
    right: 0;
    top: 100%;
    background-color: var(--bg-main-color);
    box-shadow: 0 6px 15px rgba(10, 10, 13, 0.651);
    padding: 5px 0;
    border: 0 solid hsla(0, 0%, 100%, 0.15);
    border-radius: 0.42rem;
    z-index: 3;
    user-select: none;
  }
}
</style>
