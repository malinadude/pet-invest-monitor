import { defineStore } from 'pinia'
import { ref } from 'vue'

import { STORE_NAMESPACE, DEFAULT_CURRENCY_CODE, CURRENCIES } from './constants'

import type { Ref } from 'vue'
import type { ICurrency } from './types'

interface ICurrencyStore {
  currentCurrency: Ref<ICurrency>

  getCurrencies: () => ICurrency[]

  setCurrency: (currency: ICurrency) => void
}

const findCurrency = (currencyCode: string): ICurrency | null => {
  return CURRENCIES.find((currency) => currency.code === currencyCode) || null
}

const initialCurrentCurrency = findCurrency(
  localStorage.getItem('currentCurrency') || DEFAULT_CURRENCY_CODE
)

export const useCurrencyStore = defineStore(STORE_NAMESPACE, (): ICurrencyStore => {
  const currentCurrency = ref(initialCurrentCurrency as ICurrency)

  /**
   * Формируем путь к директории флагов валют
   * @param {string} icon
   */
  const getCountryFlagPath = (icon: string) => {
    return `/src/assets/images/currencies/${icon}`
  }

  /**
   * Возвращает доступные валюты
   * @return {ICurrency[]}
   */
  const getCurrencies = (): ICurrency[] => {
    return CURRENCIES.map((currency) => {
      return {
        ...currency,
        icon: getCountryFlagPath(currency.icon)
      }
    })
  }

  /**
   * Обновление текущей валюты
   * @param {ICurrency} currency
   */
  const setCurrency = (currency: ICurrency) => {
    localStorage.setItem('currentCurrency', currency.code)
    currentCurrency.value = currency
  }

  return {
    currentCurrency,

    getCurrencies,

    setCurrency
  }
})
