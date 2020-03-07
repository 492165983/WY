import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../tools/rem'

Vue.config.productionTip = false
/* eslint-disable no-new*/
// new Vue({
//   name: '#app',
//   components: {
//     App
//   },
//   template: '<App/>',
//   // 注册路由器
//   // router
// })

new Vue({
  render:h=>h(App),
  router
}).$mount('#app')