import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'
import axios from 'axios'


// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import './global.scss'

//service worker
import wb from "./registerServiceWorker";

Vue.prototype.$workbox = wb;


import store from './store/store'
import router from './routes/routes'
import './registerServiceWorker'

Vue.prototype.$http= axios;

new Vue({
  store,
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
