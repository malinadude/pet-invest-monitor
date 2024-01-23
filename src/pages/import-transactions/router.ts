import { PAGE_NAME, PAGE_TITLE } from './consts/importTransactions.consts'
import { LAYOUT_NAME_DEFAULT } from '@/shared/consts'

export const pageImportTransactionsRoutes = [
  {
    component: () => import('./ui/PageImportTransactions.vue'),
    meta: {
      layout: LAYOUT_NAME_DEFAULT,
      title: PAGE_TITLE
    },
    name: PAGE_NAME,
    path: '/import-transactions'
  }
]
