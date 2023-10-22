import type { ICurrency } from '../model/types/base'

export const STORE_NAME = 'currency'
export const DEFAULT_CURRENCY_CODE = 'rub'

export const CURRENCIES: ICurrency[] = [
  {
    icon: 'rub.png',
    code: 'rub',
    title: 'Рубль',
    symbol: '₽'
  },
  {
    icon: 'usd.png',
    code: 'usd',
    title: 'Доллар США',
    symbol: '$'
  }
]
