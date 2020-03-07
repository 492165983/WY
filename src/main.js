import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../tools/rem'

import { Tabbar, TabbarItem, Search, Button, Icon, Tab, Tabs  } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)

Vue.config.productionTip = false
/* eslint-disable no-new*/


new Vue({
  render:h=>h(App),
  router
}).$mount('#app')