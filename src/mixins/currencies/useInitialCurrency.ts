import { useFindCurrency } from '@/mixins/currencies/useFindCurrency'

import type { ICurrency } from '@/store/currencies/types'

import { CURRENCIES } from '@/store/currencies/constants'

const DEFAULT_CURRENCY_CODE = 'rub'

export function useInitialCurrency(): ICurrency {
  const initialCurrencyCode = localStorage.getItem('currentCurrency') || DEFAULT_CURRENCY_CODE

  return useFindCurrency(initialCurrencyCode) || CURRENCIES[0]
}
