<template>
  <div class="cateContainer">
    <div class="header_search">
      <div class="search" @click="$router.push('/search')">
        <van-icon name="search" size="18px" />
        <span>搜索商品，共24027款好物</span>
      </div>
    </div>
    <div class="sidebar">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.name"
          v-for="(item,index) in category"
          :key="index"
          @click="currentSidebar"
        />
      </van-sidebar>
    </div>
    <div class="wrap" v-show="subCateList.imgUrl">
      <div class="cate_center">
        <div class="banner" ref="img">
          <img :src="subCateList.imgUrl" :alt="subCateList.name" />
        </div>
        <ul class="cateItem">
          <li v-for="(item,index) in subCateList.subCateList" :key="index">
            <img :src="item.wapBannerUrl" :alt="item.name" />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 引入滚动插件
import BScroll from 'better-scroll'
export default {
  name: 'Category',
  data () {
    return {
      activeKey: 0,// 侧边栏变化值
      subCateList: {} // 侧边栏显示选中显示对应的数据
    }
  },
  computed: {
    ...mapState({
      category: state => state.category.category
    })
  },
  async mounted () {

    // 调用vuex中的方法获取分类数据
    await this.$store.dispatch('getCategory')
    // 初始化第一组数据
    this.onChange(this.activeKey)
    // 单例模式
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll('.wrap', {
          scrollY: true,
          click: true
        })
      }
    })
  },
 
  methods: {
    // 侧边栏发生变化监听事件
    onChange (e) {
      // 处理当前需要显示的内容数据.subCateList
      this.subCateList = this.category[e]
    },
    // 切换侧边栏时
    currentSidebar () {
      const img = this.$refs.img
      if(img){
        this.scroll.scrollToElement(img)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cateContainer
  // 搜索
  height 100%
  overflow hidden
  .header_search
    position fixed
    top 0
    left 0
    width 375px
    height 44px
    padding 0 15px
    box-sizing border-box
    background-color #fff
    z-index 99
    .search
      width 100%
      display flex
      justify-content center
      align-items center
      height 28px
      background-color #EDEDED
      border-radius 5px
      margin 8px 0
      span
        font-size 14px
        color #666
        margin-left 2px
  // 侧边导航
  .sidebar
    width 85px
    position fixed
    left 0
    top 59px
  .wrap
    width 260px
    height 558px
    margin 59px 15px 40px 100px
    overflow hidden
  // 显示内容区域
  .cate_center
    width 260px
    // height 400px
    // margin 59px 15px 40px 100px
    // 大图
    .banner
      width 100%
      height 100%
      img
        width 264px
        height 96px
    // 商品区
    .cateItem
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 77px
        height 108px
        img
          width 77px
          height 77px
        p
          text-align center
          color #666
</style>
