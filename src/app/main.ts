import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { LayoutDefault, LayoutPageNotFound } from '@/shared/components/layouts'

import '@/app/assets/styles/vendors/index.scss'

const app = createApp(App)

app.component('LayoutDefault', LayoutDefault)
app.component('LayoutPageNotFound', LayoutPageNotFound)

app.use(createPinia()).use(router).mount('#app')
