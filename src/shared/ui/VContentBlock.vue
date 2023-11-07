<template>
  <div class="ui-content-block">
    <div class="ui-content-block__outside-title">
      <slot name="outside-title" />
    </div>

    <div class="ui-content-block-wrapper">
      <div class="ui-content-block__title">
        <slot name="title" />
      </div>

      <div class="ui-content-block__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-content-block {
  &__outside-title {
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem;
    color: #e9ecef;
  }

  &-wrapper {
    background-color: var(--bg-section-block);
    padding: 2rem 2.25rem;
    box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
    border-radius: 0.42rem;
    flex: 1 1 auto;
  }

  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & > *:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>
