import { getTimestamp } from '@/shared/lib/helpers'

import { EMPTY_BROKER_ID } from '@/entities/Broker'

import type { IBriefcase } from '@/entities/Briefcase'

export const STORE_NAME = 'briefcase'
export const LOCALSTORAGE_KEY_ACTIVE_BRIEFCASE = 'activeBriefcaseId'

interface IBriefcaseDTO extends Omit<IBriefcase, 'id'> {}

export const DEFAULT_BRIEFCASE: IBriefcaseDTO = {
  name: 'Мой портфель',
  broker: EMPTY_BROKER_ID,
  createdAt: getTimestamp()
}
