import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutPageNotFound from '@/layouts/LayoutPageNotFound.vue'

import '@/assets/styles/vendors/index.scss'

const app = createApp(App)

app.component('LayoutDefault', LayoutDefault)
app.component('LayoutPageNotFound', LayoutPageNotFound)

app.use(createPinia()).use(router).mount('#app')
