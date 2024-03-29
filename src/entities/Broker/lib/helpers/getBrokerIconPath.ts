/**
 * Формируем путь к иконке брокера
 * @param {string} icon
 */
export default function getBrokerIconPath(icon: string) {
  const brokerIconPath = '/src/entities/Broker/assets/images/'

  return `${brokerIconPath}${icon}`
}
