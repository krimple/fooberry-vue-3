import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'

const routes = [
 {
    path: '/game',
    name: 'Game',
    component: Game,
    props: () => ({
      rows: 5,
      cols: 7
    })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/toasts',
    name: 'Toasts',
    component: () => import(/* webpackChunkName: "toasts" */ '../views/Toasts.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
