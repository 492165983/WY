<template>
  <div class="classify">
    <div class="search">
      <van-icon name="search" class="icon" />
      <span>搜索商品, 共24027款好物</span>
    </div>
    <div class="slidebar">
      <van-sidebar v-model="activeKey" class="slide">
        <van-sidebar-item
          :title="item.name"
          class="slide_item"
          v-for="(item,index) in slides"
          :key="index"
          @click="onChange(item.id)"
        />
      </van-sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import datas from '../../../datas/ft1Data.json'
// 引入滚动插件
// import BScroll from "better-scroll";
export default {
  name: 'Classify',
  data () {
    return {
      activeKey: 0,
      slides: [],
      // subCateList: {} ,// 侧边栏显示选中显示对应的数据,
    }
  },
  methods: {
    onChange (id) {
      this.$router.replace('/category/' + id)
    },
    // _initScroll() {
    //   this.slide = new BScroll(this.$refs.slide, {
    //     click: true
    //   });
    // }
  },
  //  created() {
  //   this.$nextTick(() => {
  //     this._initScroll();
  //   });
  // },
  mounted () {
    this.slides = datas.categoryL1List
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify
  height 100%
  width 100%
  overflow hidden
  //顶部搜索栏
  .search
    background-color #ededed
    width 90%
    height 40px
    border-radius 5px
    margin 5px auto
    display flex
    justify-content center
    align-items center
    box-sizing border-box
    padding 7px 10px 7px 0
    .icon
      margin-left 40px
      font-size 20px
      opacity 0.6
    span
      padding 5px 5px
      opacity 0.6
      font-size 10px
    //左侧下拉
  .slidebar
    display flex
    .slide
      width 110px
      height 100%
      padding 15px 0
      border-top 1px solid #ccc
      border-right 1px solid #ccc
      .slide_item
        height 45px
        display flex
        align-items center
        margin 2px
        background-color #fff
 
</style>