import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEventBus } from '@vueuse/core'

import { idb } from '@/shared/api'

import mapBriefcase from '../lib/mappers/briefcase.map'

import {
  DEFAULT_BRIEFCASE,
  IDB_OBJECT_STORE_NAME,
  LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE,
  STORE_NAME
} from '../consts/briefcase.consts'

import type { Ref } from 'vue'
import type { IBriefcase } from './briefcase.types'
import type { INotification } from '@/shared/ui'

interface IBriefcaseStore {
  state: {
    activeBriefcase: IBriefcase
  }
  briefcases: Ref<IBriefcase[]>

  getBriefcase: (briefcaseId: number) => IBriefcase | null
  setActiveBriefcase: (briefcaseId: number) => void
  getLastIdBriefcase: () => number
  addBriefcase: (briefcase: IBriefcase) => void
  updateBriefcase: (briefcase: IBriefcase) => void
  deleteBriefcase: (id: number) => void
}

const busNotificationAdd = useEventBus<INotification>('notificationAdd')

let initialBriefcases = await idb.getAll(IDB_OBJECT_STORE_NAME)

let initialActiveBriefcase: IBriefcase
if (localStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE)) {
  const foundedBriefcase = await idb.get(
    IDB_OBJECT_STORE_NAME,
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE) || '')
  )

  if (foundedBriefcase) {
    initialActiveBriefcase = foundedBriefcase
  } else {
    initialActiveBriefcase = mapBriefcase(DEFAULT_BRIEFCASE)
    localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE, String(DEFAULT_BRIEFCASE.id))
  }
} else {
  if (!initialBriefcases.length) {
    await idb.add(IDB_OBJECT_STORE_NAME, DEFAULT_BRIEFCASE)
    localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE, String(DEFAULT_BRIEFCASE.id))
    initialBriefcases = await idb.getAll(IDB_OBJECT_STORE_NAME)
  }

  initialActiveBriefcase = mapBriefcase(DEFAULT_BRIEFCASE)
}

const useBriefcaseStore = defineStore(STORE_NAME, (): IBriefcaseStore => {
  const state = reactive({
    activeBriefcase: initialActiveBriefcase
  })

  const briefcases: Ref<IBriefcase[]> = ref(initialBriefcases)

  /**
   * Возвращает найденный портфель
   * @param {number} briefcaseId
   * @return {IBriefcase | undefined}
   */
  const getBriefcase = (briefcaseId: number): IBriefcase | null => {
    return briefcases.value.find((briefcase) => briefcase.id === briefcaseId) || null
  }

  /**
   * Смена активного портфеля
   * @param {number} briefcaseId
   */
  const setActiveBriefcase = (briefcaseId: number) => {
    if (briefcaseId === state.activeBriefcase?.id) return

    const foundedBriefcase = getBriefcase(briefcaseId)

    if (foundedBriefcase) {
      localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE, String(foundedBriefcase.id))
      state.activeBriefcase = foundedBriefcase
    } else {
      busNotificationAdd.emit({
        title: `Искомый портфель не найден (id: ${briefcaseId})`,
        type: 'danger'
      })
    }
  }

  /**
   * Возвращает ID последнего элемента
   */
  const getLastIdBriefcase = () => {
    const lastBriefcase = briefcases.value.at(-1)

    if (lastBriefcase === undefined) {
      return 0
    }

    return lastBriefcase.id
  }

  /**
   * Добавление нового портфеля
   * @param {IBriefcase} briefcase
   */
  const addBriefcase = async (briefcase: IBriefcase) => {
    await idb.add(IDB_OBJECT_STORE_NAME, briefcase)
    briefcases.value.push(briefcase)
  }

  /**
   * Изменение данных портфеля
   * @param {IBriefcase} briefcase
   */
  const updateBriefcase = async (briefcase: IBriefcase) => {
    console.log('briefcase', briefcase)
    await idb.put(IDB_OBJECT_STORE_NAME, briefcase)

    const foundedIndex = briefcases.value.findIndex(
      (foundedBriefcase) => foundedBriefcase.id === briefcase.id
    )
    briefcases.value[foundedIndex] = briefcase
  }

  /**
   * Удаление портфеля
   * @param {number} id
   */
  const deleteBriefcase = async (id: number) => {
    await idb.delete(IDB_OBJECT_STORE_NAME, id)

    const deletableBriefcaseIndex = briefcases.value.findIndex((briefcase) => briefcase.id === id)
    briefcases.value.splice(deletableBriefcaseIndex, 1)
  }

  return {
    state,
    briefcases,

    getBriefcase,
    setActiveBriefcase,
    getLastIdBriefcase,
    addBriefcase,
    updateBriefcase,
    deleteBriefcase
  }
})

export { useBriefcaseStore }
