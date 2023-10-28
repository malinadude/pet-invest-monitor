import { PAGE_NAME, PAGE_TITLE } from './consts/dashboard.consts'
import { LAYOUT_NAME_DEFAULT } from '@/shared/consts'

export const pageDashboardRoutes = [
  {
    component: () => import('./ui/PageDashboard.vue'),
    meta: {
      layout: LAYOUT_NAME_DEFAULT,
      title: PAGE_TITLE
    },
    name: PAGE_NAME,
    path: '/'
  }
]
