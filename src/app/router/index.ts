import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

import { pageDashboardRoutes } from '@/pages/Dashboard'
import { pageNotFoundRoutes } from '@/pages/NotFound'
import { pageBriefcasesRoutes } from '@/pages/Briefcases'

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
