export interface IBroker {
  icon: string
  name: string
  code: string
}

export interface IBriefcase {
  id: number
  name: string
  broker: IBroker
  createdAt: number
}
