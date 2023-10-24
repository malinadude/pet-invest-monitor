import type { ICurrency } from '../../model/currency.types'

import getIconPath from '../helpers/getIconPath'

export default function mapCurrency(rawData: ICurrency): ICurrency {
  return {
    ...rawData,
    icon: getIconPath(rawData.icon)
  }
}
