import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/OnePage.vue')
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('../views/OnePage.vue')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('../views/TwoPage.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('../views/ThreePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === 'production' ? '/vue-tabs/' : process.env.BASE_URL),
  routes
})

export default router
