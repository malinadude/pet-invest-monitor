import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

import { idb } from '@/shared/api'
import { IDB_BROKER_STORE_NAME } from '@/shared/consts'

import { LOCALSTORAGE_KEY_ACTIVE_BROKER, STORE_NAME } from '../consts/broker.consts'

import type { Ref } from 'vue'
import type { IBroker, IBrokerStore } from './broker.types'

const initialActiveBroker = {
  id: 0,
  name: '',
  icon: '',
  code: ''
}

const initialBrokers = await idb.getAll(IDB_BROKER_STORE_NAME)

const useBrokerStore = defineStore(STORE_NAME, (): IBrokerStore => {
  const state = reactive({
    activeBroker: initialActiveBroker
  })

  const brokers: Ref<IBroker[]> = ref(initialBrokers)

  /**
   * Возвращает найденного брокера
   * @param {number} brokerId
   * @return {IBroker | null}
   */
  const getBroker = (brokerId: number): IBroker | null => {
    return brokers.value.find((broker) => broker.id === brokerId) || null
  }

  return {
    state,
    brokers,

    getBroker
  }
})

export { useBrokerStore }
