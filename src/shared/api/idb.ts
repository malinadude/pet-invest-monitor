import { useIdb } from '../lib/hooks'

import { IDB_BRIEFCASE_STORE_NAME, IDB_BROKER_STORE_NAME } from '../consts/idb.consts'

import type { DBSchema } from 'idb'
import type { IBriefcase } from '@/entities/Briefcase'
import type { IBroker } from '@/entities/Broker'

interface IIndexedDB extends DBSchema {
  briefcases: {
    value: IBriefcase
    key: number
    indexes: { 'by-id': number }
  }
  brokers: {
    value: IBroker
    key: number
    indexes: { 'by-id': number }
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
  upgrade(db, oldDbVersion) {
    if (oldDbVersion < 1) {
      const briefcasesStore = db.createObjectStore(IDB_BRIEFCASE_STORE_NAME, {
        keyPath: 'id'
      })
      briefcasesStore.createIndex('by-id', 'id')

      const brokersStore = db.createObjectStore(IDB_BROKER_STORE_NAME, {
        keyPath: 'id'
      })
      brokersStore.createIndex('by-id', 'id')

      db.createObjectStore('investments', {
        keyPath: 'id'
      })
    }
  }
})

const initDefaultBrokers = async () => {
  const brokers = [
    {
      id: 0,
      icon: 'default.svg',
      name: 'Брокер не установлен',
      code: 'empty'
    },
    {
      id: 1,
      icon: 'alfa.svg',
      name: 'Альфа инвестиции',
      code: 'alfa'
    },
    {
      id: 2,
      icon: 'tinkoff.svg',
      name: 'Тинькофф инвестиции',
      code: 'tinkoff'
    }
  ]

  for (let i = 0; i < brokers.length; i += 1) {
    if (!(await idb.getFromIndex(IDB_BROKER_STORE_NAME, 'by-id', brokers[i].id))) {
      await idb.add(IDB_BROKER_STORE_NAME, brokers[i])
    }
  }
}

await initDefaultBrokers()

export { idb }
