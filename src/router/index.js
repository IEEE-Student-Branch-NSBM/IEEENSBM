import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "@/components/MainContent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
