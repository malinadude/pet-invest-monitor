import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { useEventBus } from '@vueuse/core'

import { idb } from '@/shared/api'
import { IDB_BRIEFCASE_STORE_NAME } from '@/shared/consts'

import {
  DEFAULT_BRIEFCASE,
  LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE,
  STORE_NAME
} from '../consts/briefcase.consts'
import getLastBriefcase from '../lib/helpers/getLastBriefcase'

import type { Ref } from 'vue'
import type { IBriefcase, IBriefcaseStore } from './briefcase.types'
import type { INotification } from '@/shared/ui'

const busNotificationAdd = useEventBus<INotification>('notificationAdd')

let initialBriefcases = await idb.getAll(IDB_BRIEFCASE_STORE_NAME)

const lastBriefcase = await getLastBriefcase()

const defaultBriefcaseTransformed = {
  ...DEFAULT_BRIEFCASE,
  id: lastBriefcase ? lastBriefcase.id + 1 : 0
}
console.log('defaultBriefcaseTransformed', defaultBriefcaseTransformed)

let initialActiveBriefcase: IBriefcase
if (localStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE)) {
  const foundedBriefcase = await idb.get(
    IDB_BRIEFCASE_STORE_NAME,
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE) || '')
  )

  if (foundedBriefcase) {
    initialActiveBriefcase = foundedBriefcase
  } else {
    initialActiveBriefcase = defaultBriefcaseTransformed
    localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE, String(defaultBriefcaseTransformed.id))
  }
} else {
  if (!initialBriefcases.length) {
    await idb.add(IDB_BRIEFCASE_STORE_NAME, defaultBriefcaseTransformed)
    localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE, String(defaultBriefcaseTransformed.id))
    initialBriefcases = await idb.getAll(IDB_BRIEFCASE_STORE_NAME)
  }

  initialActiveBriefcase = defaultBriefcaseTransformed
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
   * Добавление нового портфеля
   * @param {IBriefcase} briefcase
   */
  const addBriefcase = async (briefcase: IBriefcase) => {
    await idb.add(IDB_BRIEFCASE_STORE_NAME, briefcase)
    briefcases.value.push(briefcase)
  }

  /**
   * Изменение данных портфеля
   * @param {IBriefcase} briefcase
   */
  const updateBriefcase = async (briefcase: IBriefcase) => {
    await idb.put(IDB_BRIEFCASE_STORE_NAME, briefcase)

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
    await idb.delete(IDB_BRIEFCASE_STORE_NAME, id)

    const deletableBriefcaseIndex = briefcases.value.findIndex((briefcase) => briefcase.id === id)
    briefcases.value.splice(deletableBriefcaseIndex, 1)
  }

  return {
    state,
    briefcases,

    getBriefcase,
    setActiveBriefcase,
    addBriefcase,
    updateBriefcase,
    deleteBriefcase
  }
})

export { useBriefcaseStore }
