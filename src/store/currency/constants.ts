import type { ICurrency } from './types'

export const STORE_NAMESPACE = 'currency'
export const DEFAULT_CURRENCY_CODE = 'rub'

export const CURRENCIES: ICurrency[] = [
  {
    icon: 'rub.png',
    code: 'rub',
    title: 'Рубль'
  },
  {
    icon: 'usd.png',
    code: 'usd',
    title: 'Доллар США'
  }
]
