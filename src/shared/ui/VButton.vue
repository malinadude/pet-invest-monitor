<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<style lang="scss">
.ui-button {
  background-color: $bg-primary;
  color: $primary;
  border: none;
  padding: 0.55rem 0.75rem;
  font-size: 0.925rem;
  line-height: 1.35;
  border-radius: 0.42rem;
  user-select: none;

  &:not(:disabled):hover {
    color: $white;
    background-color: $primary;
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
