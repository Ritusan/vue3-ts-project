import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Lyrics from '@/views/Lyrics.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/lyrics',
      name: 'lyrics',
      component: () => import('@/views/Lyrics.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('@/views/AboutView.vue')
    }
  ]
})

export default router
