import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

import { LayoutDefault, LayoutPageNotFound } from '@/shared/components/layouts'

import '@/app/assets/styles/vendors/index.scss'

library.add(fas)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)
app.component('LayoutDefault', LayoutDefault)
app.component('LayoutPageNotFound', LayoutPageNotFound)

app.use(createPinia()).use(router).mount('#app')
