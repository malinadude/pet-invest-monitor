import { useIdb } from '../lib/hooks'
import { IDB_OBJECT_STORE_NAME } from '@/entities/Briefcase'

import type { IBriefcase } from '@/entities/Briefcase'

import type { DBSchema } from 'idb'

interface IIndexedDB extends DBSchema {
  briefcases: {
    value: IBriefcase
    key: number
    indexes: { 'by-created': number }
  }
  investments: {
    value: {
      briefcaseId: number
      assets: string
    }
    key: string
  }
}

const idb = await useIdb<IIndexedDB>('db', 1, {
  upgrade(db) {
    db.createObjectStore(IDB_OBJECT_STORE_NAME, {
      keyPath: 'id'
    })

    db.createObjectStore('investments', {
      keyPath: 'id'
    })
  }
})

export { idb }
