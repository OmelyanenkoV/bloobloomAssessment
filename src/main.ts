import '@/assets/normalize.css'
import '@/assets/scss/globalStyles/main.scss'
import 'vue-skeletor/dist/vue-skeletor.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import { Skeletor } from 'vue-skeletor'

import router from '@/router'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(VueQueryPlugin)
app.component(Skeletor.name, Skeletor)

const runApp = async () => {
  app.mount('#app')
}

runApp()
