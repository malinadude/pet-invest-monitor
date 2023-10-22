import type { ICurrency } from './types'

/**
 * Формируем путь к иконке
 * @param {string} icon
 */
const getIconPath = (icon: string) => {
  return `/src/assets/images/currencies/${icon}`
}

export const mapCurrency = (rawData: ICurrency): ICurrency => {
  return {
    ...rawData,
    icon: getIconPath(rawData.icon)
  }
}
