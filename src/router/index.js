import { createRouter, createWebHistory } from "vue-router";
import AboutComp from '../views/AboutComp'
import HomeComp from '../views/HomeComp'

const routes = [
  {
    path: '/',
    name: 'HomeComp',
    component: HomeComp
  },

  {
    path: '/about',
    name: 'AboutComp',
    component: AboutComp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes 
})

export default router