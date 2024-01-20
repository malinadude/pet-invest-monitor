import type { Ref } from 'vue'

export interface IBriefcase {
  id: number
  name: string
  broker: number
  createdAt: number
}

export interface IBriefcaseStore {
  state: {
    activeBriefcase: IBriefcase
  }
  briefcases: Ref<IBriefcase[]>

  getBriefcase: (briefcaseId: number) => IBriefcase | null
  setActiveBriefcase: (briefcaseId: number) => void
  addBriefcase: (briefcase: IBriefcase) => void
  updateBriefcase: (briefcase: IBriefcase) => void
  deleteBriefcase: (id: number) => void
}
