import '@/assets/normalize.css'
import '@/assets/scss/globalStyles/main.scss'
import 'vue-skeletor/dist/vue-skeletor.css'
import 'v3-infinite-loading/lib/style.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { Skeletor } from 'vue-skeletor'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.component(Skeletor.name, Skeletor)

const runApp = async () => {
  app.mount('#app')
}

runApp()
