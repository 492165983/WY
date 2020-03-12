// 引入api
import { reqRecommend } from '../../api'
// 引入mutation-type
import { SAVE_RECOMMEND } from '../mutation-type'
// 首页的状态数据
const state = {
  recommend: {}
}

const mutations = {
  // 保存首页的状态数据
  [SAVE_RECOMMEND](state, recommend){
    state.recommend = recommend
  }
}
const actions = {
  // 获取首页的状态数据方法
  async getRecommend({ commit }){
    // 调用api接口并发送请求
    const result = await reqRecommend()
    // 判断请求是否成功
    if(result.code === 0 ){
      const recommend = result.data
      // 保存state数据
      commit(SAVE_RECOMMEND,recommend)
    }
    
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

 