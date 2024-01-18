<script lang="ts" setup>
import { ref } from 'vue'
import { useEventBus } from '@vueuse/core'

import type { Ref } from 'vue'
import type { INotification } from '../model/notifications.types'

const notifications: Ref<INotification[]> = ref([])

const busNotificationAdd = useEventBus<INotification>('notificationAdd')
busNotificationAdd.on((notification) => {
  console.log('on notification', notification)
  addNotification(notification)
})

const generateNotificationClasses = (notification: INotification) => {
  const classes = []

  classes.push(`ui-notifications__notification--type-${notification.type}`)

  return classes
}

const addNotification = (notification: INotification) => {
  notifications.value.push(notification)

  setTimeout(() => {
    notifications.value.splice(0, 1)
  }, 6000)
}
</script>

<template>
  <div class="ui-notifications">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="ui-notifications__notification"
      :class="generateNotificationClasses(notification)"
    >
      {{ notification.title }}
    </div>
  </div>
</template>

<style lang="scss">
.ui-notifications {
  position: absolute;
  right: 2vw;
  top: 7vh;
  z-index: 5;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  &__notification {
    max-width: 500px;
    padding: 10px 18px;
    border-radius: 0.42rem;
    cursor: default;
    color: $white;
    user-select: none;

    &--type {
      &-primary {
        background-color: $primary;
      }
      &-success {
        background-color: $success;
      }
      &-info {
        background-color: $info;
      }
      &-danger {
        background-color: $danger;
      }
    }
  }
}
</style>
