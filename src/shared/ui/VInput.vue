<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue'])

const modelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <label class="ui-input">
    <span class="ui-input__title">
      <slot name="title" />
    </span>

    <input type="text" v-model="modelValue" />
  </label>
</template>

<style lang="scss">
.ui-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .ui-input__title {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #dee2e6;
  }

  input {
    width: 100%;
    background-color: #424451;
    color: #f8f9fa;
    transition: background-color 0.15s ease;
    height: 47px;
    padding: 0.825rem 1.42rem;
    font-size: 1.08rem;
    line-height: 1.5;
    border-radius: 0.42rem;
    border: none;
    outline: none;

    &:active,
    &:focus {
      background-color: #28283c;
    }
  }
}
</style>
