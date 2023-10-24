export type IAssetQuoteType = 'percent' | 'sum'

export interface IAssetQuote {
  type: IAssetQuoteType
  value: string
  symbol: string
  isProfit?: boolean
}
