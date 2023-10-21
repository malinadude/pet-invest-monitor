<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  isChecked?: boolean
}>()
const emit = defineEmits(['update:isChecked'])

const modelIsChecked = useVModel(props, 'isChecked', emit)
</script>

<template>
  <label class="ui-ios-switch">
    <input v-model="modelIsChecked" type="checkbox" />

    <div>
      <div></div>
    </div>
  </label>
</template>

<style lang="scss">
.ui-ios-switch {
  cursor: pointer;

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;

    &:checked {
      & + div {
        width: 40px;
        background-position: 0 0;
        background-color: #3b89ec;
        border: 1px solid #0e62cd;
        box-shadow: inset 0 0 0 10px rgba(59, 137, 259, 1);

        & > div {
          transform: translate3d(20px, 0, 0);
          background-color: #ffffff;
          box-shadow:
            0 2px 5px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(8, 80, 172, 1);
        }
      }
    }

    & + div {
      vertical-align: middle;
      width: 40px;
      height: 20px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      border-radius: 999px;
      background-color: rgba(0, 0, 0, 0.1);
      transition-duration: 0.4s;
      transition-property: background-color, box-shadow;
      box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0.4);
      margin: 15px 1.2em 15px 2.5em;

      & > div {
        float: left;
        width: 18px;
        height: 18px;
        border-radius: inherit;
        background: #ffffff;
        transition-timing-function: cubic-bezier(0.54, 1.85, 0.5, 1);
        transition-duration: 0.4s;
        transition-property: transform, background-color, box-shadow;
        box-shadow:
          0 2px 5px rgba(0, 0, 0, 0.3),
          0 0 0 1px rgba(0, 0, 0, 0.4);
        pointer-events: none;
        margin-top: 1px;
        margin-left: 1px;
      }
    }
  }
}
</style>
