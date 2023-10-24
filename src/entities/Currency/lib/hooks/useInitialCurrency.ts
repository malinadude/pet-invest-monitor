import findCurrency from '../helpers/findCurrency'

import type { ICurrency } from '../../model/currency.types'

import { CURRENCIES, DEFAULT_CURRENCY_CODE } from '../../consts/currency.consts'

export default function useInitialCurrency(): ICurrency {
  const initialCurrencyCode = localStorage.getItem('currentCurrency') || DEFAULT_CURRENCY_CODE

  return findCurrency(initialCurrencyCode) || CURRENCIES[0]
}
