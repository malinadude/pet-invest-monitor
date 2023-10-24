import { PAGE_NAME, PAGE_TITLE } from '../consts/base'
import { LAYOUT_NAME_DEFAULT } from '@/shared/consts'

export const pageDashboardRoutes = [
  {
    component: () => import('../components/PageDashboard.vue'),
    meta: {
      layout: LAYOUT_NAME_DEFAULT,
      title: PAGE_TITLE
    },
    name: PAGE_NAME,
    path: '/'
  }
]
