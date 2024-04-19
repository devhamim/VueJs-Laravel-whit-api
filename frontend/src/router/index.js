import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServiceView from '@/views/ServiceView.vue'
import BlogView from '@/views/BlogView.vue'
import ContectView from '@/views/ContectView.vue'


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
      component: AboutView
    },
    {
      path: '/service',
      name: 'service',
      component: ServiceView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/contect',
      name: 'contect',
      component: ContectView
    },
  ]
})

export default router
