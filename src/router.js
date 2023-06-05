import mainPage from "@/pages/mainPage"
import portfolioPage from "@/pages/portfolioPage"
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: mainPage
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: portfolioPage
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    return { top: 0 }
  } // Задаем открытие новой страницы с самого начала
})

export default router