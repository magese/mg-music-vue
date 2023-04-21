import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'search',
    component: HomeView
  },
  {
    path: '/download',
    name: 'download',
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
