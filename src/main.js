// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import Toast from 'muse-ui-toast'
Vue.use(Toast)

// 样式引入
require('./style/common.scss')

// 引入全局变量
import globalData from './api/global_varable'

// 引入 directive
require('./config/directive')

// 粘贴板
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.prototype.GLOBAL = globalData

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
