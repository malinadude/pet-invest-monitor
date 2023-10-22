import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { STORE_NAME } from '../../consts/base'

import type { IBriefcase } from '../../types/base'

interface IBriefcaseStore {
  state: {
    briefcases: IBriefcase[]
  }

  getBriefcases: () => IBriefcase[]

  addBriefcase: (briefcase: IBriefcase) => void
}

export const useBriefcaseStore = defineStore(STORE_NAME, (): IBriefcaseStore => {
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
