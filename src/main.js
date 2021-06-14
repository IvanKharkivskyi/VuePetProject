import Vue from 'vue'
import App from './App'

import Vuelidate from 'vuelidate'

import router from './router'

Vue.use(Vuelidate)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
