import Vue from 'vue'
import App from './App.vue'
import waterfall from 'vue-waterfall2'
import { Tabbar, TabbarItem, Search, Button, Icon, Tab, Tabs, Swipe, SwipeItem, Sidebar, SidebarItem, Toast } from 'vant'
import VueResource from 'vue-resource'
// 事件总线
Vue.prototype.$bus = new Vue()

Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Toast)


Vue.use(VueResource)


Vue.use(waterfall)
// 路由
import router from './router'
// vuex
import store from './store'
// rem适配根元素文字大小
import './utils/rem'
// 表单验证
import './utils/vee-validate'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // vuex
  store
}).$mount('#app')
