<template>
  <div class="SceneLight" >
    <ul class="clearFix">
      <li v-for="(item,index) in datas" :key="index" class="item">
        <a :href="item.styleItem.targetUrl" :class="{tab:index<=1}">
          <div class="title">
            <p>{{item.styleItem.title}}</p>
            <span>{{item.styleItem.desc}}</span>
          </div>
          <div class="img">
            <img :src="item.styleItem.picUrlList[0]" alt />
            <img :src="item.styleItem.picUrlList[1]" alt />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import indexDatas from '../../../../../datas/index.json'
export default {
  name: 'SceneLight',
  data () {
    return {
      datas: []
    }
  },
  mounted () {
    this.datas = indexDatas.sceneLightShoppingGuideModule
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.SceneLight
  overflow hidden
  background-color #ffffff
  margin 8px 0 8px
  padding 13px 13px 13px 13px
  ul 
    .item
      background #f5f5f5
      display block
      margin 1px 
      padding 10px 0 0 7px  
      width 170px 
      height 140px
      float left
      .title
        p
          // font-family: 'PingFangSC-Medium'
          margin-left 15px
          font-size 21px
        span   
          margin-left 15px
          font-size 12px
          color #7F7F7F
          opacity .7
    .img      
      width 100%
      img 
        width 75px
        height 75px
        float left
        margin-right 1px
</style>