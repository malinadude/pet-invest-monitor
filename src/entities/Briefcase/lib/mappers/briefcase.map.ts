import type { IBriefcase } from '../../model/briefcase.types'

import getBrokerIconPath from '../helpers/getBrokerIconPath'

export default function mapBriefcase(rawData: IBriefcase): IBriefcase {
  let broker = {
    icon: '',
    name: '',
    code: ''
  }

  if (rawData?.broker) {
    broker = {
      icon: getBrokerIconPath(rawData.broker.icon),
      name: rawData.broker.icon || broker.name,
      code: rawData.broker.icon || broker.code
    }
  }

  return {
    ...rawData,
    broker
  }
}
