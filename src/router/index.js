<<<<<<< Updated upstream
import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import UserPage from '../components/UserPage.vue'
import UserLogin from '../components/UserLogin.vue'
import HomePage from '../components/HomePage.vue'
=======
import Vue from "vue";
import VueRouter from "vue-router";
import Skull from "../components/Skull.vue";
import UserPage from "../components/UserPage.vue";
import AdminLogin from "../components/AdminLogin.vue";
import AdminPage from "../components/AdminPage.vue";
import HomePage from "../components/HomePage.vue";
>>>>>>> Stashed changes

Vue.use(VueRouter);

const routes = [
  {
    path: "/skull",
    name: "Skull",
    component: Skull,
  },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
  },
  {
<<<<<<< Updated upstream
    path: '/userlogin',
    name: 'UserLogin',
    component: UserLogin
=======
    path: "/adminlogin",
    name: "AdminLogin",
    component: AdminLogin,
>>>>>>> Stashed changes
  },
 
  {
    path: "/admin",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
