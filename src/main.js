import Vue from 'vue'
import 'es6-promise/auto'
import App from './App.vue'


// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './global.scss'

import store from './store/store'
import router from './routes/routes'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
