import type { ICurrency } from '../../model/currency.types'

import { CURRENCIES } from '../../consts/currency.consts'

export default function findCurrency(currencyCode: string): ICurrency | null {
  return CURRENCIES.find((currency: ICurrency) => currency.code === currencyCode) || null
}
