import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { useInitialTheme } from '../../lib/hooks/useInitialTheme'

import { STORE_NAME } from '../../consts/common'

interface ICommonStore {
  state: {
    isDarkTheme: boolean
  }

  switchTheme: (changedIsDarkTheme: boolean) => void
}

export const useCommonStore = defineStore(STORE_NAME, (): ICommonStore => {
  const state = reactive({
    isDarkTheme: useInitialTheme()
  })

  /**
   * Переключатель темы
   * @param {boolean} changedIsDarkTheme
   */
  const switchTheme = (changedIsDarkTheme: boolean) => {
    state.isDarkTheme = changedIsDarkTheme
    localStorage.setItem('isDarkTheme', String(state.isDarkTheme))
  }

  return {
    state,

    switchTheme
  }
})
