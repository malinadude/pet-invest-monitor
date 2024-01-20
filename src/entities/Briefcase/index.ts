import VBriefcaseAddButton from './ui/VBriefcaseAddButton.vue'
import VBriefcaseListButton from './ui/VBriefcaseListButton.vue'
import VModalWrapperBriefcaseManage from './ui/VModalWrapperBriefcaseManage.vue'
import getLastBriefcase from './lib/helpers/getLastBriefcase'

export { VBriefcaseAddButton, VBriefcaseListButton, VModalWrapperBriefcaseManage }
export { getLastBriefcase }
export { DEFAULT_BRIEFCASE } from './consts/briefcase.consts'
export { useBriefcaseStore } from './model/briefcase.store'

export type { IBriefcase } from './model/briefcase.types'
