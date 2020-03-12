// 引入api
import { reqNavWap, reqRecManual, reqRecAuto } from '../../api'
// 引入mutation-type
import { SAVE_NAVWAP, SAVE_RECMANUAL, SAVE_REVAUTO} from '../mutation-type'
// 首页的状态数据
const state = {
  navWap: [], // 轮播商品数据
  recManual: [], // 首屏展示数据
  recAuto: {} // 触底自动加载数据
}

const mutations = {
  // 保存轮播商品数据
  [SAVE_NAVWAP](state, navWap){
    state.navWap = navWap
  },
  // 保存首屏展示数据
  [SAVE_RECMANUAL](state, recManual) {
    state.recManual = recManual
  },
  // 保存触底数据
  [SAVE_REVAUTO](state, recAuto) {
    state.recAuto = recAuto
  }
}
const actions = {
  // 获取轮播商品数据方法
  async getNavWap({ commit }){
    // 调用api接口并发送请求
    const result = await reqNavWap()
    // 判断请求是否成功
    if(result.code === 0 ){
      const navWap = result.data.data.navList
      // 保存state数据
      commit(SAVE_NAVWAP,navWap)
    }
    
  },
  // 获取首屏展示数据的方法
  async getRecManual({ commit }){
    // 调用api接口并发送请求
    const result = await reqRecManual()
    if(result.code === 0){
      const recManual = result.data.result
      // 保存首屏数据
      commit(SAVE_RECMANUAL, recManual)
    }
    
  },
  // 触底获取数据的方法
  async getRecAuto({ commit }, page, size){
    // 调用api就扣并发送请求
    const recAuto = reqRecAuto(page, size)
    // 保存数据
    commit(SAVE_REVAUTO, recAuto)
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}

 