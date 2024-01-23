import { idb } from '@/shared/api'
import { IDB_BRIEFCASE_STORE_NAME } from '@/shared/consts'

import type { IBriefcase } from '../../model/briefcase.types'

/**
 * Возвращает последний портфель
 */
export default async function getLastBriefcase(): Promise<IBriefcase | null> {
  const briefcases = await idb.getAllFromIndex(IDB_BRIEFCASE_STORE_NAME, 'by-id')

  console.log('briefcases', briefcases)

  return briefcases.at(-1) || null
}
