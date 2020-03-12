// 引入
import axios from './axios'


// 值得买轮播商品请求
export const reqNavWap = () => axios.get('/topicnav')

// 值得买首屏数据请求
export const reqRecManual = () => axios.get('/topiclist')

// 触底自动加载请求
export const reqRecAuto = (page, size) => axios({
  method: 'GET',
  url: 'https://m.you.163.com/topic/v1/find/recAuto.json?page=1&size=1',
  params: {
    page,
    size
  }
})

// 分类商品数据请求
export const reqCategory = () => axios.get('/category')

// 首页数据请求
export const reqRecommend = () => axios.get('/home')

// 手机号码登录
export const reqLoginPhone = (phone, code) => axios({
  method: 'POST',
  url: '/login_sms',
  data: {
    phone,
    code
  }
})

// 发送短信验证码
export const reqSendCode = phone => axios({
  method: 'GEt',
  url: '/sendcode',
  params: {
    phone
  }
})

// 用户名登录
export const reqLoginPwd = (name, pwd) => axios({
  method: 'POST',
  url: 'login_pwd',
  data: {
    name,
    pwd
  }
})

/* // 搜索请求
export const reqSearch = searchName => axios({
  method: 'POST',
  url: '/search',
  data: {
    searchName
  }
}) */

// 搜索请求
export const reqSearch = searchName => axios.get(`/xhr/search/search.json?keyword=${searchName}&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=8&needPopWindow=true&_stat_search=hot`)

// 热门搜索请求
export const reqHotSearch = () => axios.get('/xhr/search/init.json')
