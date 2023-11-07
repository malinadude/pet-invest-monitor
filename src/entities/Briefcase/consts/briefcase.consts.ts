import mapBriefcase from '../lib/mappers/briefcase.map'
import { getTimestamp } from '@/shared/lib/helpers'

import type { IBriefcase, IBroker } from '@/entities/Briefcase'

export const STORE_NAME = 'briefcase'
export const LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE = 'activeBriefcaseId'
export const IDB_OBJECT_STORE_NAME = 'briefcases'
export const DEFAULT_BROKER_ICON = 'default.svg'
export const DEFAULT_BROKER: IBroker = {
  icon: DEFAULT_BROKER_ICON,
  name: '',
  code: ''
}
export const DEFAULT_BRIEFCASE: IBriefcase = mapBriefcase({
  id: 0,
  name: 'Мой портфель',
  broker: DEFAULT_BROKER,
  createdAt: getTimestamp()
})
