import { defineStore } from 'pinia'
import { reactive } from 'vue'

import { useInitialCurrency } from '@/mixins/currencies/useInitialCurrency'
import { mapCurrency } from './currency.map'

import { STORE_NAMESPACE, CURRENCIES } from './constants'

import type { ICurrency } from './types'

interface ICurrenciesStore {
  state: {
    currentCurrency: ICurrency
  }

  getCurrencies: () => ICurrency[]

  setCurrency: (currency: ICurrency) => void
}

export const useCurrenciesStore = defineStore(STORE_NAMESPACE, (): ICurrenciesStore => {
  const state = reactive({
    currentCurrency: mapCurrency(useInitialCurrency())
  })

  /**
   * Возвращает доступные валюты
   * @return {ICurrency[]}
   */
  const getCurrencies = (): ICurrency[] => {
    return CURRENCIES.map((currency: ICurrency) => {
      return mapCurrency(currency)
    })
  }

  /**
   * Обновление текущей валюты
   * @param {ICurrency} currency
   */
  const setCurrency = (currency: ICurrency) => {
    if (currency.code === state.currentCurrency.code) return

    localStorage.setItem('currentCurrency', currency.code)
    state.currentCurrency = currency
  }

  return {
    state,

    getCurrencies,

    setCurrency
  }
})
