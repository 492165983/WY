import Vue from 'vue'
import App from './App.vue'
import router from './router'
import waterfall from 'vue-waterfall2'

// 移动端适配
import './tools/rem'
// 引入样式重置
import './tools/reset.css'  

import {  Swipe, SwipeItem,Tabbar, TabbarItem, Button, Icon, Tab, Tabs,Sidebar, SidebarItem  } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
// Vue.use(Search)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(waterfall)


Vue.config.productionTip = false
/* eslint-disable no-new*/


new Vue({
  render:h=>h(App),
  router
}).$mount('#app')