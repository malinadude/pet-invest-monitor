import type { ICurrency } from '@/store/currencies/types'

import { CURRENCIES } from '@/store/currencies/constants'

export function useFindCurrency(currencyCode: string): ICurrency | null {
  return CURRENCIES.find((currency: ICurrency) => currency.code === currencyCode) || null
}
