import {
  LAYOUT_DEFAULT,
  LAYOUT_PAGE_NOT_FOUND,

  PAGE_DASHBOARD,
  PAGE_NOT_FOUND,
} from '../constants';

const mainRoutes = [
  {
    component: () => import('@/pages/PageDashboard.vue'),
    meta: {
      layout: LAYOUT_DEFAULT,
      title: 'Дашборд',
    },
    name: PAGE_DASHBOARD,
    path: '/',
  },
  {
    component: () => import('@/pages/PageNotFound.vue'),
    meta: {
      layout: LAYOUT_PAGE_NOT_FOUND,
      title: 'Страница не найдена',
    },
    name: PAGE_NOT_FOUND,
    path: '/:pathMatch(.*)*',
  },
];

export default mainRoutes;
