<script setup lang="ts">
import { useEventBus } from '@vueuse/core'

import { VDropdown, VButton } from '@/shared/ui'
import { EMPTY_BROKER_ICON, getBrokerIconPath } from '@/entities/Broker'

const busOpenModalBriefcaseAdd = useEventBus<string>('modalBriefcaseAdd')

const openModalBriefcaseAdd = (callbackDropdownClose: Function) => {
  busOpenModalBriefcaseAdd.emit()
  callbackDropdownClose()
}
</script>

<template>
  <VDropdown class="actions-dropdown">
    <template #trigger>
      <VButton color="transparent-primary">
        <FontAwesomeIcon :icon="['fas', 'plus']" />
      </VButton>
    </template>

    <template #content="dropdownProps">
      <div class="actions-dropdown__content">
        <div class="actions-dropdown__group">
          <div class="actions-dropdown__group-title">Активы / сделки</div>

          <div class="actions-dropdown__group-actions">
            <router-link
              class="actions-dropdown__action"
              to="/import-transactions"
              @click="dropdownProps.dropdownClose()"
            >
              <img
                class="actions-dropdown__icon"
                src="@/shared/assets/images/icon-upload.svg"
                alt=""
              />
              Загрузить отчёт
            </router-link>
          </div>
        </div>

        <div class="actions-dropdown__group">
          <div class="actions-dropdown__group-title">Портфели</div>

          <div class="actions-dropdown__group-actions">
            <div
              class="actions-dropdown__action"
              @click="openModalBriefcaseAdd(dropdownProps.dropdownClose)"
            >
              <img
                class="actions-dropdown__icon"
                :src="getBrokerIconPath(EMPTY_BROKER_ICON)"
                alt=""
              />
              Новый портфель
            </div>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>

<style lang="scss">
.actions-dropdown {
  &__action {
    user-select: none;
    display: flex;
    cursor: pointer;
    width: 100%;
    padding: 0.75rem 1.25rem;
    color: #f8f9fa;
    font-size: 14px;
    align-items: center;
    justify-content: flex-start;
    font-weight: 500;

    &:hover {
      color: #fff;
      background-color: #212529;
    }
  }

  &__icon {
    width: 17.5px;
    margin-right: 0.75rem;
  }

  &__content {
    width: 250px;
  }

  &__group {
    &-title {
      padding: 0.5rem 1.25rem;
      font-size: 0.825rem;
      font-weight: 500;
    }
  }
}
</style>
