// 引入路由组件
// 分类
import Classify from '../pages/Classify/Classify.vue'
// 主页
import Home from '../pages/Home/Home.vue'
// 个人
import Mine from '../pages/Mine/Mine.vue'
// 购物车
import Shopping from '../pages/Shopping/Shopping.vue'
// 值得买
import WorthBuy from '../pages/WorthBuy/WorthBuy.vue'
import ClassifyItem from '../pages/Classify/ClassifyItem/ClassifyItem.vue'
// 登录
import Login from '../components/Login/index.vue'


// 向外暴露routes数组
export default [
  {
    path: '/classify',
    component: Classify,
    children: [
      {
        path: '/classify/:id',
        component:ClassifyItem
      },
      {
        path: '/classify',
        redirect: '/classify/11'
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/mine',
    component: Mine,
    meta: {
      isShowFooter: true
    }
  },
  { 
    path: '/shopping',
    component: Shopping,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/worthbuy',
    component: WorthBuy,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home'
  }
]