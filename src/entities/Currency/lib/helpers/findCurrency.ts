import type { ICurrency } from '../../model/types/base'

import { CURRENCIES } from '../../consts/base'

export default function findCurrency(currencyCode: string): ICurrency | null {
  return CURRENCIES.find((currency: ICurrency) => currency.code === currencyCode) || null
}
