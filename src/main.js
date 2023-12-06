//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(BootstrapVue);

new Vue({
  router,
  store, // Add the store to your Vue instance
  render: h => h(App)
}).$mount('#app');