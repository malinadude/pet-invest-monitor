import { PAGE_NAME, PAGE_TITLE } from './consts/not-found.consts'
import { LAYOUT_NAME_PAGE_NOT_FOUND } from '@/shared/consts'

export const pageNotFoundRoutes = [
  {
    component: () => import('./ui/PageNotFound.vue'),
    meta: {
      layout: LAYOUT_NAME_PAGE_NOT_FOUND,
      title: PAGE_TITLE
    },
    name: PAGE_NAME,
    path: '/:pathMatch(.*)*'
  }
]
