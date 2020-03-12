
// 引入mutation-type
import { SAVE_ADDUSER, SAVE_DELUSER, SAVE_ADDTOKEN, SAVE_DELTOKEN } from '../mutation-type'
// 用户信息状态数据
const state = {
  user: {},
  token: localStorage.getItem('wy_key_token')
}

const mutations = {
  // 保存用户数据信息
  [SAVE_ADDUSER](state, user){
    state.user = user
  },
  // 保存token
  [SAVE_ADDTOKEN](state, token){
    state.token = token
  },
  // 删除用户信息
  [SAVE_DELUSER](state){
    state.user = {}
  },
  // 删除token
  [SAVE_DELTOKEN](state){
    state.token = ''
  }
}
const actions = {
  // 获取用户数据信息方法
  addUser({ commit }, user){
    // 提取token
    const { token } = user
    commit(SAVE_ADDTOKEN, token)
    // 存储在vuex中
    commit(SAVE_ADDUSER, user)
    // 存储在本地
    localStorage.setItem('wy_key_token', token)
  },
  // 删除用户信息的方法
  delUser({ commit }){
    commit(SAVE_DELUSER)
    commit(SAVE_DELTOKEN)
    // 删除本地token
    localStorage.removeItem('wy_key_token')
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

 