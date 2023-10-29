import { openDB } from 'idb'

import type { IDBPDatabase, OpenDBCallbacks } from 'idb'

export async function useIdb<DB>(
  dbName: string,
  dbVersion?: number,
  dbMethods?: OpenDBCallbacks<DB>
): Promise<IDBPDatabase<DB>> {
  return await openDB<DB>(dbName, dbVersion, dbMethods)
}
