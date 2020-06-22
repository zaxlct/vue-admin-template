import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import {
  Button,
  Scrollbar,
  Menu,
  MenuItem,
  Submenu,
  Input,
  Form,
  FormItem
} from 'element-ui'

Vue.use(Button)
Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
