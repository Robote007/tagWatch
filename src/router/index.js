import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page404 from '../views/Page404.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/montres',
    name: 'montres',
    component: () => import(/* webpackChunkName: "about" */ '../views/Montres.vue')
  },
  {
    path: '/univers',
    name: 'univers',
    component: () => import(/* webpackChunkName: "about" */ '../views/Univers.vue')
  },
  {
    path: '/man',
    name: 'man',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManWatch.vue')
  },
  {
    path: '/woman',
    name: 'woman',
    component: () => import(/* webpackChunkName: "about" */ '../views/WomanWatch.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'page404',
    component: () => import(/* webpackChunkName: "about" */ '../views/Page404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
