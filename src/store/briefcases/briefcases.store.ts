import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { STORE_NAMESPACE } from './constants'

import type { IBriefcase } from './types'

interface IBriefcasesStore {
  state: {
    briefcases: IBriefcase[]
  }

  getBriefcases: () => IBriefcase[]

  addBriefcase: (briefcase: IBriefcase) => void
}

export const useBriefcasesStore = defineStore(STORE_NAMESPACE, (): IBriefcasesStore => {
  const state = reactive({
    briefcases: []
  })

  /**
   * Возвращает портфели пользователя
   * @return {IBriefcase[]}
   */
  const getBriefcases = (): IBriefcase[] => {
    return state.briefcases
  }

  /**
   * Добавление нового портфеля
   * @param {IBriefcase} briefcase
   */
  const addBriefcase = (briefcase: IBriefcase) => {
    state.briefcases.push(briefcase)
  }

  return {
    state,

    getBriefcases,

    addBriefcase
  }
})
