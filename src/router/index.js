import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import UserPage from '../components/UserPage.vue'
import UserLogin from '../components/UserLogin.vue'
import HomePage from '../components/HomePage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/user',
    name: 'UserPage',
    component: UserPage
  },
  {
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin
  },
 
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
