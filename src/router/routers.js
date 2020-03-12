// 首页
// import Home from '../pages/home'
const Home = () => import('../pages/home')
// 分类
// import Category from '../pages/category'
const Category = () => import('../pages/category')

// 值得买
// import Topic from '../pages/topic'
const Topic = () => import('../pages/topic')

// 购物车
// import Cart from '../pages/cart'
const Cart = () => import('../pages/cart')

// 个人
// import Ucenter from '../pages/ucenter'
const Ucenter = () => import('../pages/ucenter')

// 登录
// import Login from '../components/login'
const Login = () => import('../components/login')

// 搜索
// import Search from '../pages/search'
const Search = () => import('../pages/search')


export default [{
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/ucenter',
    component: Ucenter,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/home'
  }
]