import { defineStore } from 'pinia'
import { ref } from 'vue'

import { STORE_NAMESPACE } from './constants'

import type { Ref } from 'vue'

interface ICommonStore {
  isDarkTheme: Ref<boolean>

  toggleDarkTheme: (state: boolean) => void
}

export const useCommonStore = defineStore(STORE_NAMESPACE, (): ICommonStore => {
  const isDarkTheme = ref(true)

  /**
   * Переключатель темной темы
   * @param {boolean} state
   */
  const toggleDarkTheme = (state: boolean) => {
    isDarkTheme.value = state
  }

  return {
    isDarkTheme,

    toggleDarkTheme
  }
})
