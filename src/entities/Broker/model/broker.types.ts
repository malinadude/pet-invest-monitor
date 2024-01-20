import type { Ref } from 'vue'

export interface IBroker {
  id: number
  icon: string
  name: string
  code: string
}

export interface IBrokerStore {
  state: {
    activeBroker: IBroker
  }
  brokers: Ref<IBroker[]>

  getBroker: (brokerId: number) => IBroker | null
}
