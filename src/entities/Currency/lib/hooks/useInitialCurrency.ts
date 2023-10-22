import findCurrency from '../helpers/findCurrency'

import type { ICurrency } from '../../model/types/base'

import { CURRENCIES, DEFAULT_CURRENCY_CODE } from '../../consts/base'

export default function useInitialCurrency(): ICurrency {
  const initialCurrencyCode = localStorage.getItem('currentCurrency') || DEFAULT_CURRENCY_CODE

  return findCurrency(initialCurrencyCode) || CURRENCIES[0]
}
