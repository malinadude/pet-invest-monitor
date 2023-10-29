import { createRouter, createWebHistory } from 'vue-router'

import { pageDashboardRoutes } from '@/pages/dashboard'
import { pageNotFoundRoutes } from '@/pages/not-found'
import { pageBriefcasesRoutes } from '@/pages/briefcases'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  ...pageDashboardRoutes,
  ...pageNotFoundRoutes,
  ...pageBriefcasesRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
