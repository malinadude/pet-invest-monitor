import findCurrency from '../helpers/findCurrency'

import type { ICurrency } from '../../model/currency.types'

import {
  CURRENCIES,
  DEFAULT_CURRENCY_CODE,
  LOCALSTORAGE_KEY_ACTIVE_CURRENCY
} from '../../consts/currency.consts'

export default function useInitialCurrency(): ICurrency {
  const initialCurrencyCode =
    localStorage.getItem(LOCALSTORAGE_KEY_ACTIVE_CURRENCY) || DEFAULT_CURRENCY_CODE

  return findCurrency(initialCurrencyCode) || CURRENCIES[0]
}
