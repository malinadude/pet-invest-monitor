import { defineStore } from 'pinia'
import { reactive } from 'vue'

import useInitialCurrency from '../lib/hooks/useInitialCurrency'
import mapCurrency from '../lib/mappers/currency.map'

import { STORE_NAME, CURRENCIES, LOCALSTORAGE_KEY_ACTIVE_CURRENCY } from '../consts/currency.consts'

import type { ICurrency } from './currency.types'

interface ICurrencyStore {
  state: {
    activeCurrency: ICurrency
  }

  getCurrencies: () => ICurrency[]

  setCurrency: (currency: ICurrency) => void
}

export const useCurrencyStore = defineStore(STORE_NAME, (): ICurrencyStore => {
  const state = reactive({
    activeCurrency: mapCurrency(useInitialCurrency())
  })

  /**
   * Возвращает доступные валюты
   * @return {ICurrency[]}
   */
  const getCurrencies = (): ICurrency[] => {
    return CURRENCIES.map((currency: ICurrency) => mapCurrency(currency))
  }

  /**
   * Обновление текущей валюты
   * @param {ICurrency} currency
   */
  const setCurrency = (currency: ICurrency) => {
    if (currency.code === state.activeCurrency.code) return

    localStorage.setItem(LOCALSTORAGE_KEY_ACTIVE_CURRENCY, currency.code)
    state.activeCurrency = currency
  }

  return {
    state,

    getCurrencies,

    setCurrency
  }
})
