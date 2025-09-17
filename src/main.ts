import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Main from './main.vue'
import router from '@/router'
import '@/assets/styles/main.scss'

const app = createApp(Main)

app.use(createPinia())
app.use(router)
app.mount('#app')
