import { PAGE_NAME, PAGE_TITLE } from './consts/briefcases.consts'
import { LAYOUT_NAME_DEFAULT } from '@/shared/consts'

export const pageBriefcasesRoutes = [
  {
    component: () => import('./ui/PageBriefcases.vue'),
    meta: {
      layout: LAYOUT_NAME_DEFAULT,
      title: PAGE_TITLE
    },
    name: PAGE_NAME,
    path: '/briefcases'
  }
]
