<template>
  <div class="homeContainer">
    <!-- 头部 -->
    <div class="home_headers">
      <!-- 头部搜索 -->
      <div class="home_header">
        <h1>
          <img src="../../common/images/logo.png" alt="logo" />
        </h1>
        <div class="home_header_search" @click="$router.push('/search')">
          <van-icon name="search" size="18px" />
          <span>搜索商品，共24027款好物</span>
        </div>
        <van-button
          type="default"
          size="mini"
          class="home_header_logon"
          @click="$router.replace('/login')"
        >登录</van-button>
      </div>
      <div class="home_nav">
        <!-- 头部导航 -->
        <div class="home_nav_tab">
          <van-tabs
            line-width="50px"
            line-height="2px"
            title-active-color="#EE3B3B"
            title-inactive-color="#000"
            :border="false"
          >
            <van-tab
              v-for="(item,index) in cateNav"
              :name="index"
              :title="item.name"
              :key="index"
              class="home_nav_tab_li"
            ></van-tab>
          </van-tabs>
        </div>
        <div class="home_nav_collapse"></div>
      </div>
    </div>
    <div v-if="datas">
      <!-- 轮播图 -->
      <div class="home_swiper">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in datas.focusList" :key="index">
            <img :src="item.picUrl" :alt="item.name" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 保障 -->
      <ul class="home_grow">
        <li>
          <van-icon name="medal-o" size="15px" />
          <span>网易自营品牌</span>
        </li>
        <li>
          <van-icon name="bookmark-o" size="15px" />
          <span>30天无忧退货</span>
        </li>
        <li>
          <van-icon name="cash-back-record" size="15px" />
          <span>48小时快速退款</span>
        </li>
      </ul>
      <!-- 促销内容容器 -->
      <div class="home_container">
        <!-- 促销服务选项 -->
        <ul class="home_container_swiper_slide" v-if="datas.kingKongModule.kingKongList">
          <li v-for="(item,index) in datas.kingKongModule.kingKongList" :key="index">
            <img :src="item.picUrl" />
            <span>{{item.text}}</span>
          </li>
        </ul>
        <!-- 促销主活动 -->
        <div class="home_bigPromotionModule">
          <div class="huge">
            <img
              :src="datas.bigPromotionModule.floorList[0].cells[0].picUrl"
              alt="促销"
              class="huge_img"
            />
          </div>
          <div class="middle">
            <img :src="datas.bigPromotionModule.floorList[1].cells[0].picUrl" />
            <img :src="datas.bigPromotionModule.floorList[1].cells[1].picUrl" />
          </div>
          <ul class="floor">
            <li>
              <!-- :style="{background:url(datas.bigPromotionModule.floorList[2].cells[0].picUrl)}" -->
              <span>{{datas.bigPromotionModule.floorList[2].cells[0].title}}</span>
              <span>{{datas.bigPromotionModule.floorList[2].cells[0].subTitle}}</span>
              <img :src="datas.bigPromotionModule.floorList[2].cells[0].itemList[0].picUrl" />
            </li>
            <li>
              <span>{{datas.bigPromotionModule.floorList[2].cells[1].title}}</span>
              <span>{{datas.bigPromotionModule.floorList[2].cells[1].subTitle}}</span>
              <img :src="datas.bigPromotionModule.floorList[2].cells[1].itemList[0].picUrl" />
            </li>
            <li>
              <span>{{datas.bigPromotionModule.floorList[2].cells[2].title}}</span>
              <span>{{datas.bigPromotionModule.floorList[2].cells[2].subTitle}}</span>
              <img :src="datas.bigPromotionModule.floorList[2].cells[2].itemList[0].picUrl" />
            </li>
          </ul>
        </div>
        <!-- 新人专享 -->
        <div class="dome_freshmanModule">
          <div class="freshma_header">
            <p>-&nbsp;新人专享礼&nbsp;-</p>
          </div>
          <div class="freshma_centenr">
            <div class="left">
              <p>新人专享礼包</p>
              <div>
                <img src="./images/freshma.png" />
              </div>
            </div>
            <div class="right">
              <div class="top">
                <h3>{{datas.indexActivityModule[0].title}}</h3>
                <p>{{datas.indexActivityModule[0].subTitle}}</p>
                <div class="price">
                  <span>{{datas.indexActivityModule[0].originPrice}}</span>
                  <span>{{datas.indexActivityModule[0].activityPrice}}</span>
                </div>
                <img :src="datas.indexActivityModule[0].picUrl" />
              </div>
              <div class="bottom">
                <h3>{{datas.indexActivityModule[1].title}}</h3>
                <span>{{datas.indexActivityModule[1].tag}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 类目热销榜 -->
        <div class="categoryHotSellModule">
          <div class="header">
            <h3>{{datas.categoryHotSellModule.title}}</h3>
          </div>
          <ul class="center">
            <li v-for="(item,index) in datas.categoryHotSellModule.categoryList" :key="index">
              <p>{{item.categoryName}}</p>
              <img :src="item.picUrl" :alt="item.categoryName" />
            </li>
          </ul>
        </div>
        <!-- 限时购 -->
        <LashSale :lashSaleData="datas.flashSaleModule.itemList" />
        <!-- 新品首发 -->
        <NewItem :newItemData="datas.newItemList" />
        <!-- 标语类 -->
        <ul class="styleBanner">
          <li v-for="(item,index) in datas.sceneLightShoppingGuideModule" :key="index">
            <h3>{{item.styleItem.title}}</h3>
            <span>{{item.styleItem.desc}}</span>
            <div class="imgs">
              <img
                :src="img"
                :alt="item.styleItem.title"
                v-for="(img,index) in item.styleItem.picUrlList"
                :key="index"
              />
            </div>
          </li>
        </ul>
        <!-- 底部 -->
        <footer class="footer">
          <div class="center">
            <div class="bd">
              <a
                class="goapp"
                target="_blank"
                href="https://m.you.163.com/downloadapp?_stat_from=web_search_baidu&appAwakeUrl=http%3a%2f%2fm.you.163.com"
              >下载APP</a>
              <a
                class="goweb"
                target="_blank"
                href="https://you.163.com?_m_forcepc_=true&_m_anonid_=7132af6e-e848-469c-9410-e6ac46cde2df"
              >电脑版</a>
            </div>
            <p>网页公司版权所有&copy;1997-2020</p>
            <p>食品经营许可证：JY13301080111719</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cateNav from '../../datas/cateNavDatas.json'
import LashSale from './lashSale'
import NewItem from './newItem'
export default {
  name: 'Home',
  // 注册组件
  components: {
    LashSale,
    NewItem
  },
  data () {
    return {
      datas: {},
      cateNav: cateNav.categoryL1List
    }
  },
  computed: {
    ...mapState({
      recommend: state => state.home.recommend,
      ...mapState({
        token: state => state.user.token
      })
    })
  },
  async mounted () {
    await this.$store.dispatch('getRecommend')
    // console.log(this.recommend);
  console.log(this.token);
  
    this.datas = this.recommend
    // console.log(this.cateNav);

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homeContainer
  width 375px
  // height 100%
  // overflow hidden
  padding 88px 0 50px
  background-color #eee
  // 头部
  .home_headers
    width 100%
    height 88px
    background-color #fff
    position fixed
    left 0
    top 0
    z-index 99
    .home_header
      display flex
      justify-content center
      align-items center
      height 44px
      h1
        font-size 0
      img
        width 69px
        height 20px
        margin-right 6px
        line-height 0
        vertical-align middle
      .home_header_search
        display flex
        justify-content center
        align-items center
        width 221px
        height 28px
        background-color #EDEDED
        border-radius 5px
        span
          font-size 14px
          color #666
          margin-left 2px
      .home_header_logon
        border 0.5px solid red
        border-color red
        border-radius 5px
        font-size 14px
        color red
        // width 30px
        font-weight 700
        margin-left 6px
    .home_nav
      width 100%
      // height 30px
      .home_nav_tab
        .van-tabs__wrap
          // height 30px!important
          .van-tabs__nav
            // padding 0
            // height 30px!important
  // 轮播图
  .home_swiper
    margin-top 2px
    .my-swipe .van-swipe-item img
      width 100%
      height 100%
  // 保障
  .home_grow
    display flex
    justify-content center
    align-items center
    width 100%
    height 36px
    li
      margin-right 10px
      span
        font-size 13px
        margin-left 4px
        vertical-align middle
      .van-icon
        color #CD3333
        vertical-align middle
  // 促销活动容器
  .home_container
    // 促销服务选项
    .home_container_swiper_slide
      display flex
      flex-wrap wrap
      justify-content center
      align-items center
      background-color #fff
      z-index 1
      li
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin 4px 8px
        img
          width 55px
          height 55px
        span
          color #666
          margin-top 6px
    // 促销主活动
    .home_bigPromotionModule
      width 100%
      .huge
        // margin 0
        .huge_img
          width 100%
          height 120px
          vertical-align middle
      .middle
        // display flex
        // justify-content center
        // align-content center
        width 355px
        height 93px
        padding 10px 10px 4px
        background-color #cc3256
        // margin 0
        img
          width 175px
          height 93px
          vertical-align middle
          &:first-child
            margin-right 5px
      .floor
        display flex
        justify-content center
        align-items center
        // margin 0
        width 355px
        height 110px
        padding 0px 10px 10px
        background-color #cc3256
        li
          width 115px
          height 110px
          display flex
          flex-direction column
          justify-content center
          align-items center
          background-image url('./images/cxbg.png')
          background-size 115px 110px
          margin-right 5px
          span
            color #cc3256
            &:first-child
              font-weight 700
            &:nth-child(2)
              line-height 15px
              font-size 5px
          img
            width 70px
            height 70px
            vertical-align middle
    // 新人专享礼
    .dome_freshmanModule
      width 100%
      height 300px
      margin 10px 0
      background-color #fff
      .freshma_header
        width 345px
        height 45px
        padding 0 15px
        p
          font-weight 300
          font-size 18px
          text-align center
          line-height 45px
      .freshma_centenr
        display flex
        width 345px
        padding 0 15px
        .left
          width 171px
          height 217px
          background-color #F9E9CF
          margin-right 3px
          border-radius 4px
          p
            padding 18px 0 0 15px
            font-size 16px
          div
            width 129px
            margin 18px auto
            img
              width 129px
              height 129px
        .right
          width 171px
          height 217px
          // background-color #ccc
          .top
            position relative
            box-sizing border-box
            width 100%
            height 107px
            margin-bottom 3px
            background-color #FBE2D3
            padding 15px 0 0 15px
            border-radius 4px
            h3
              font-size 16px
              z-index 100
            p
              line-height 30px
              color #666
            img
              position absolute
              right 0
              bottom 0
              width 100px
              height 100px
            .price
              position absolute
              right 15px
              top 7px
              display flex
              flex-direction column
              width 40px
              height 40px
              background-color #F6A447
              padding 12px 12px 0 7px
              border-radius 50%
              box-sizing border-box
              z-index 2
              span
                color #fff
                font-size 10px
                &:last-child
                  text-decoration line-through
          .bottom
            width 100%
            height 107px
            background-color #FBECC2
            border-radius 4px
            h3
              padding 10px 0 0 15px
              font-size 16px
              line-height 30px
            span
              color #fff
              font-size 11px
              display inline-block
              padding 2px 4px
              background-color rgba(0, 0, 0, 0.2)
              border-radius 2px
              margin-left 18px
    // 类目热销榜
    .categoryHotSellModule
      height 355px
      width 355px
      padding 0 10px
      background-color #fff
      // margin-bottom 10px
      .header
        width 100%
        height 50px
        line-height 50px
        h3
          font-size 16px
      .center
        display flex
        flex-wrap wrap
        li
          width 83px
          height 90px
          background-color #F5F5F5
          margin-right 5px
          margin-bottom 5px
          border-radius 4px
          &:first-child
            display flex
            justify-content space-between
            width 170px
            height 100px
            img
              width 100px
              height 100px
              margin 0
            p
              font-size 14px
              margin 40px 0 0 14px
          &:nth-child(2)
            display flex
            justify-content space-between
            width 170px
            height 100px
            img
              width 100px
              height 100px
              margin 0
            p
              font-size 14px
              margin 40px 0 0 14px
          p
            color #666
            margin-top 10px
            text-align center
          img
            display block
            width 60px
            height 60px
            vertical-align middle
            margin 10px auto
    // 标语类
    .styleBanner
      width 355px
      padding 0 10px
      display flex
      flex-wrap wrap
      background-color #fff
      margin 10px 0
      li
        width 162px
        height 122px
        padding 15px 0 0 10px
        margin-bottom 10px
        background-color #F5F5F5
        h3
          font-size 16px
          color #333
        span
          font-size 11px
          color #666
          line-height 25px
        &:nth-child(2n+1)
          margin-right 4px
        &:nth-child(-n+2)
          margin-top 10px
        .imgs
          width 100%
          display flex
          img
            width 75px
            height 75px
    // 底部
    .footer
      overflow hidden
      // position relative
      width 100%
      height 113px
      background-color #414141
      .center
        width 220px
        margin 26px auto 0
        p
          color #999
          text-align center
          line-height 16px
        .bd
          display flex
          justify-content space-around
          margin-bottom 16px
          a
            display block
            width 85px
            height 30px
            color #fff
            font-size 12px
            border 0.4px solid #fff
            text-align center
            line-height 30px
            outline 0
            text-decoration none
            border-radius 4px
</style>
