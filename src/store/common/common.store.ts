import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { useInitialUserTheme } from '@/mixins/common/useInitialUserTheme'

import { STORE_NAMESPACE } from './constants'

interface ICommonStore {
  state: {
    isDarkTheme: boolean
  }

  switchTheme: (changedIsDarkTheme: boolean) => void
}

export const useCommonStore = defineStore(STORE_NAMESPACE, (): ICommonStore => {
  const state = reactive({
    isDarkTheme: useInitialUserTheme()
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
