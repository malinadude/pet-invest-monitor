import type { ICurrency } from '../model/currency.types'

export const STORE_NAME = 'currency'
export const DEFAULT_CURRENCY_CODE = 'rub'
export const LOCALSTORAGE_KEY_ACTIVE_CURRENCY = 'activeCurrency'

export const CURRENCIES: ICurrency[] = [
  {
    icon: 'rub.png',
    code: 'rub',
    name: 'Рубль',
    symbol: '₽'
  },
  {
    icon: 'usd.png',
    code: 'usd',
    name: 'Доллар США',
    symbol: '$'
  }
]
