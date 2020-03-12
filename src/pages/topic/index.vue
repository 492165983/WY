<template>
  <div class="topicContainer">
    <!-- 头部 -->
    <Header>
      <slot name="left" />
      <h2 slot="center" class="header_zdm">值得买</h2>
      <slot name="right" />
    </Header>
    <!-- 轮播图 -->
    <div class="swiper-wrap">
      <div class="swiper-title">
        <img src="./images/zdm.png" class="zdm" />
        <span>严选好物&nbsp;用心生活</span>
        <img src="./images/topic-bg.png" class="bj" />
      </div>
      <div class="swiperTaab-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in navWap" :key="index">
            <img :src="item.picUrl" alt />
            <h3>{{item.mainTitle}}</h3>
            <span>{{item.viceTitle}}</span>
          </li>
        </ul>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="cateList">
      <waterfall :data="recManual">
        <template>
        <div class="cell-wrap" v-for="(item,index) in recManual" :key="index">
          <div class="cell-item">
            <img v-if="item.type" :lazy-src="item.picUrl" alt="加载错误" style="height:172px" />
            <img v-if="!item.type" :lazy-src="item.picUrl" alt="加载错误" class="cell-picUrl" />
            <p v-if="item.title" class="cell-title">{{item.title}}</p>
            <div class="bottom" v-if="item.avatar">
              <div class="left" v-if="item.avatar">
                <img :src="item.avatar" v-if="item.avatar" class="cell-avatar" />
                <span v-if="item.nickname" class="cell-nickname">{{item.nickname}}</span>
              </div>
              <div class="right" v-if="item.readCount">
                <van-icon name="eye-o" size="16px" />
                <span>{{item.readCount }}</span>
              </div>
            </div>
          </div>
          <!-- {{item[0].readCount >= 10000 ?'K ' : '' }} -->
        </div>
        </template>
      </waterfall>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 头部插槽
import Header from '../../components/header'
// 轮播图插件组件
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Topic',
  components: {
    Header
  },
  computed: {
    ...mapState({
      navWap: state => state.topic.navWap,
      recManual: state => state.topic.recManual
    })
  },
  mounted () {
    // 值得买轮播滑动商品数据 调用vuex中的方法并发送请求存储在vuex中
    this.$store.dispatch('getNavWap')
    // 值得买推荐商品数据 调用vuex中的方法并发送请求存储在vuex中
    this.$store.dispatch('getRecManual')
    // 初始化swiper 单列模式
    this.$nextTick(() => {
      new Swiper('.swiperTaab-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.topicContainer
  width 100%
  height 100%
  background-color #eee
  padding 50px 0 60px
  // 头部
  .header_zdm
    font-size 18px
    line-height 50px
    margin-left 55px
  // 轮播图
  .swiper-wrap
    position relative
    width 100%
    height 342px
    .swiper-title
      .bj
        position absolute
        left 0
        top 0
        width 100%
        height 100%
      .zdm
        position absolute
        top 30px
        left 10px
        z-index 10
        width 65px
        height 34px
      span
        z-index 10
        position absolute
        left 82px
        top 41px
        font-size 15px
        color #fff
    .swiperTaab-container
      position absolute
      left 10px
      bottom 0
      width 355px
      height 270px
      background-color #fff
      border-radius 10px
      overflow hidden
      .swiper-wrapper
        display flex
        flex-wrap wrap
        justify-content center
        align-items center
        width 672px
        .swiper-slide
          display flex
          flex-direction column
          justify-content center
          align-items center
          width 84px !important
          height 100px
          img
            width 60px
            height 60px
          h3
            font-size 14px
            font-weight 500
          span
            line-height 20px
            color #666
            font-size 10px
  // 值得买商品列表
  .cateList
    width 100%
    height 100%
    #vueWaterfall
      padding-left 10px
      box-sizing border-box
      .vue-waterfall-column
        padding 10px 10px 0 0
        box-sizing border-box
    .cell-wrap
      .cell-item
        width 100%
          // height 98px
        border-radius 10px
        margin 0 auto
        overflow hidden
        background-color #fff
        margin-bottom 10px
        .cell-picUrl
          width 100%
          height 98px
          vertical-align middle
        .cell-title
          color #333
          padding 4px 10px 0
          line-height 15px
          // white-space nowrap
          // overflow hidden
          // text-overflow ellipsis
          // display block
        .bottom
          // display flex
          // justify-content space-around
          align-items center
          // width 180px
          height 24px
          padding 10px 10px 15px
          .left
            float left
            .cell-avatar
              width 24px
              height 24px
              border-radius 50%
              vertical-align bottom
            .cell-nickname
              color #666
              margin 0 0 0 5px
              line-height 24px
          .right
            float right
            height 24px
            // margin 18px 10px 0 3px
            display flex
            justify-content center
            align-content center
            span
              line-height 24px
              color #666
            .van-icon-eye-o
              // padding-right 5px 5px 0 0
              margin-right 3px
              line-height 24px
</style>
