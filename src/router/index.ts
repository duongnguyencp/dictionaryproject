import { createRouter, createWebHistory } from 'vue-router'
import App from '@/pages/dictionary.vue'
const routes = [
  {
    path: '/',
    name: 'search',
    component: App,
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
