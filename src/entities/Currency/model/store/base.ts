import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useInitialCurrency from '../../lib/hooks/useInitialCurrency'
import mapCurrency from '../../lib/mappers/currency'

import { STORE_NAME, CURRENCIES } from '../../consts/base'

import type { ICurrency } from '../types/base'

interface ICurrencyStore {
  state: {
    currentCurrency: ICurrency
  }

  getCurrencies: () => ICurrency[]

  setCurrency: (currency: ICurrency) => void
}

export const useCurrencyStore = defineStore(STORE_NAME, (): ICurrencyStore => {
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
