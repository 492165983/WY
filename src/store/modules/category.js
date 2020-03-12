// 引入api
import { reqCategory } from '../../api'
// 引入mutation-type
import { SAVE_CATEGORY } from '../mutation-type'
// 商品分类的数据
const state = {
  category: []
}

const mutations = {
  // 保存商品分类的数据
  [SAVE_CATEGORY](state, category){
    state.category = category
  }
}
const actions = {
  // 获取商品分类的数据方法
  async getCategory({ commit }){
    // 调用api接口并发送请求
    const result = await reqCategory()
    // 判断请求是否成功
    if(result.code === 0 ){
      const category = result.data
      // 保存state数据
      commit(SAVE_CATEGORY,category)
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

 