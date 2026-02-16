import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import About from './pages/About.vue'
import Home from './pages/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: App },
  { path: '/about', name: 'About', component: About },
  { path: '/home', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
