//install bootstrap first
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from "bootstrap-vue";
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { ApplicationInsights } from '@microsoft/applicationinsights-web'

Vue.config.productionTip = false

Vue.use(BootstrapVue);

// Initialize Application Insights
const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.VUE_APP_APPINSIGHTS_KEY,
        
    }
});
appInsights.loadAppInsights();
appInsights.trackPageView(); // Tracks page views

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
