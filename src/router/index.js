import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import ThanksView from '../views/ThanksView.vue'

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormView
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: ThanksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
