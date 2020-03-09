<template>
  <div class="nav">
    <!--  这里是头部下面的导航栏 -->
    <van-tabs>
      <van-tab v-for="(item,index) in navDatas" :title="item.name" :key="index">
        <div v-if="index === 0">
          <!-- 轮播图  将轮播图拆分组件 -->
          <Swiper />
          <!-- 轮播下面的三个描述 -->
          <div class="policyDescList">
            <ul>
              <li v-for="(item,index) in policyDescList" :key="index">
                <img :src="item.icon" alt />
                <span>{{item.desc}}</span>
              </li>
            </ul>
          </div>
          <!-- 这里属于三个描述下面的十张图片区域 -->
          <div class="kingKongList">
            <div v-for="(item,index) in kingKongList" :key="index" class="kingKon">
              <a :href="item.schemeUrl">
                <img :src="item.picUrl" alt />
              </a>
              <span>{{item.text}}</span>
            </div>
          </div>
          <!-- 拆分组件 -->
          <BigPromotion />
          <IndexActivity />
          <CategoryHotSell />
          <FlashSale />
          <NewItem />
          <SceneLight />
        </div>
      </van-tab>
    </van-tabs>
    <van-icon name="arrow-down" class="icon" />
  </div>
</template>

<script>
import Swiper from './Swiper/Swiper'
import navDatas from '../../../../datas/indexCateModule.json'
import indexDatas from '../../../../datas/index.json'
import BigPromotion from './BigPromotion/BigPromotion'
import IndexActivity from './IndexActivity/IndexActivity'
import CategoryHotSell from './CategoryHotSell/CategoryHotSell'
import FlashSale from './FlashSale/FlashSale'
import NewItem from './NewItem/NewItem'
import SceneLight from './SceneLight/SceneLight'
export default {
  name: 'TopNav',
  data () {
    return {
      navDatas: [{ name: '推荐' }],
      policyDescList: [],
      kingKongList: [],
      // itemPicBeanList: [],
    }
  },
  //  注册组件
  components: {
    Swiper,
    BigPromotion,
    IndexActivity,
    CategoryHotSell,
    FlashSale,
    NewItem,
    SceneLight
  },
  //  等页面渲染完毕后
  mounted () {
    this.navDatas = this.navDatas.concat(navDatas)
    this.policyDescList = indexDatas.policyDescList
    this.kingKongList = indexDatas.kingKongModule.kingKongList
    // this.itemPicBeanList = indexDatas.sceneLightShoppingGuideModule
  }
}
</script>

<style lang='stylus' scoped>
.nav
  position relative
  .kingKongList
    background-color #fff
    width 100%
    display flex
    justify-content space-between
    flex-wrap wrap
    .kingKon
      width 15%
      margin 5px
      font-size 12px
      text-align center
      img
        width 100%
  .policyDescList
    background-color #fff
    width 100%
    padding 10px 0
    ul
      padding 0 20px
      display flex
      justify-content space-between
      li
        display flex
        align-items center
        font-size 12px
        img
          width 20px
          height 20px
  .icon
    position absolute
    right 0
    top 0
    background-color #fff
    height 44px
    width 44px
    line-height 44px
    font-size 20px
    text-align center
</style>