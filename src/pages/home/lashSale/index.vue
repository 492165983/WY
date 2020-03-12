<template>
  <div class="lashSaleModule">
    <div class="header">
      <h3>限时购</h3>
      <div class="nextStartTime">
        <span>01</span>
        <span>:</span>
        <span>19</span>
        <span>:</span>
        <span>01</span>
      </div>
      <div class="right">
        <span>更多</span>
        <van-icon name="arrow" size="15px" />
      </div>
    </div>
    <ul class="center">
      <li v-for="(item,index) in lashSaleData" :key="index">
        <img :src="item.showPicUrl" />
        <div>
          <span class="activityPrice">￥{{item.activityPrice}}</span>
          <span class="originPrice">￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LashSale',
  props: {
    lashSaleData: Array
  },
  mounted () {
    // console.log(this.flashSaleData);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.lashSaleModule
  width 355px
  height 350px
  padding 0 10px
  background-color #fff
  margin 10px 0
  .header
    width 100%
    height 50px
    h3
      font-size 16px
      line-height 50px
      float left
      color #444
    .nextStartTime
      float left
      line-height 50px
    .right
      float right
      line-height 50px
      display flex
      align-items center
      span
        font-size 16px
        vertical-align top
  .center
    width 100%
    display flex
    flex-wrap wrap
    li
      width 108px
      height 135px
      margin-bottom 15px
      margin-right 12px
      // background-origin border-box
      background-clip border-box
      &:nth-child(-3n+6)
        margin-right 0
      img
        width 108px
        height 108px
        background-color #F5F5F5
        border-radius 4px
      span
        margin-left 5px
      .activityPrice
        color #DC143C
      .originPrice
        color #999
        text-decoration line-through
</style>
