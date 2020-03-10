<template>
  <div class="worthbuy">
    <!-- 值得买头部搜索 -->
    <div class="head">
      <router-link replace to="/home">
        <van-icon name="wap-home-o" />
      </router-link>
      <span>值得买</span>
      <router-link to="/search" class="searchIcon">
        <van-icon name="search" />
      </router-link>
      <router-link replace to="/shopping">
        <van-icon name="shopping-cart-o" />
      </router-link>
    </div>
    <!-- 值得买轮播图 -->
    <div class="content">
      <div class="content_swiper">
        <div class="title">
          <img src="./img/2.png" alt />
          <span>严选好物 用心生活</span>
        </div>
        <div class="swiper_wrap">
          <van-swipe class="my-swipe" indicator-color="white" :width="87.75" :loop="false">
            <van-swipe-item
              class="item"
              style="width:84px"
              v-for="(item,index) in datas"
              :key="index"
            >
              <a :href="item.arr[0].columnUrl" class="item top">
                <img :src="item.arr[0].picUrl" class="topPic" />
                <p class="mainText">{{item.arr[0].mainTitle}}</p>
                <span class="descText">{{item.arr[0].viceTitle}}</span>
              </a>
              <a :href="item.arr[1].columnUrl" class="item bottom">
                <img :src="item.arr[1].picUrl" class="topPic" />
                <p class="mainText">{{item.arr[1].mainTitle}}</p>
                <span class="descText">{{item.arr[1].viceTitle}}</span>
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="content_list"></div>
    </div>
    <!-- 值得买商品展示区域 -->
    <div class="cateList">
      <waterfall>
        <!-- <template> -->
        <div class="cell-wrap" v-for="(item,index) in items" :key="index">
          <div class="cell-item">
            <img v-if="item.picUrl" :src="item.picUrl" alt="加载错误" class="cell-picUrl" />
            <p v-if="item.title" class="cell-title">{{item.title}}</p>
            <div class="bottom" v-if="item.avatar">
              <div class="left" v-if="item.avatar">
                <img :src="item.avatar" v-if="item.avatar" class="cell-avatar" />
                <span v-if="item.nickname" class="cell-nickname">{{item.nickname}}</span>
              </div>
              <!-- 右侧 -->
              <div class="right" v-if="item.readCount">
                <van-icon name="eye-o" size="16px" />
                <span>{{item.readCount }}</span>
              </div>
            </div>
          </div>
          
        </div>
        <!-- </template> -->
      </waterfall>
    </div>
  </div>
</template>

<script>
import datas from "../../../datas/navWap.json";
import items from '../../../datas/recManual.json'
// import Swiper from 'swiper'
// import 'swiper/css/swiper.css'
export default {
  name: "WorthBuy",
  data() {
    return {
      datas: [],
      items: []
    };
  },
  mounted() {
    this.datas = datas.navList;
    this.items = items.recManual
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.worthbuy
  width 100%
  height 100%
  background-color #EEEEEE
  // 值得买顶部搜素栏
  .head
    width 100%
    height 50px
    font-size 26px
    display flex
    align-items center
    border-bottom 1px solid #000
    padding 0 15px
    span
      width 80%
      text-align center
      font-size 18px
      margin-left 20px
    .searchIcon
      margin-right 10px
      // 值得图片轮播区域
  .content
    width 100%
    .content_swiper
      width 100%
      height 340px
      background url('./img/1.png') no-repeat
      background-size 100% 260px
      padding 30px 10px 0
      .title
        width 100%
        margin-bottom 10px
        img
          width 65px
          height 34px
          vertical-align middle
        span
          color #fff
          font-size 14px
          margin-left 4px
          vertical-align middle
      .swiper_wrap
        width 100%
        background-color #fff
        border-radius 8px
        .my-swipe
          width 100%
          .item
            display flex
            flex-direction column
            align-items center
            margin 8px -4px
            padding 0.06rem
            width 1.68rem
            // height  100px
            padding-top 0.36rem
            img
              width 51px
              height 51px
            .mainText
              font-size 14px
              font-weight 700
              white-space nowrap
            .descText
              font-size 10px
              font-weight 200
              margin 3px 0 0
              white-space nowrap
              // overflow hidden
            .top
              display flex
              flex-direction column
              align-items center
              padding 10px 1px 1px
              margin 2px
            .bottom
              display flex
              flex-direction column
              align-items center
  // 商品展示区域
  .cateList
    width 100%
    height 100%
    #vueWaterfall
      padding-left 10px
      box-sizing border-box
      .vue-waterfall-column
        height 100% //
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