export interface ICurrency {
  icon: string
  code: string
  name: string
  symbol: string
}

export interface ICurrencyStore {
  state: {
    activeCurrency: ICurrency
  }

  getCurrencies: () => ICurrency[]

  setCurrency: (currency: ICurrency) => void
}
