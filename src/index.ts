import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', redirect: '/home' }, // default
  { path: '/home', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // If using browser back/forward buttons
    if (savedPosition) {
      return savedPosition
    }

    // If route has a hash (#section)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Default: scroll to top
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
