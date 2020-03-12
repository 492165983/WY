// 引入vue vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入state mutations actions getters
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 引入分割模块
import home from './modules/home'
import topic from './modules/topic'
import category from './modules/category'
import user from './modules/user'
// 使用vuex
Vue.use(Vuex)
// 暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    home,
    topic,
    category,
    user
  }
})