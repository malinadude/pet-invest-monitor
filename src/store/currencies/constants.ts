import type { ICurrency } from './types'

export const STORE_NAMESPACE = 'currencies'

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
