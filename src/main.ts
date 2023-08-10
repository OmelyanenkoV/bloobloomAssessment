import '@/assets/normalize.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())

const runApp = async () => {
  app.mount('#app')
}

runApp()
