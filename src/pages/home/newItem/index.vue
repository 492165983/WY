<template>
  <div class="newItemModule">
    <div class="header">
      <h3>新品首发</h3>
      <div class="right">
        <span>更多</span>
        <van-icon name="arrow" size="15px" />
      </div>
    </div>
    <ul class="center">
      <li v-for="(item,index) in datas" :key="index">
        <img :src="item.primaryPicUrl" />
        <div>
          <p>{{item.name}}</p>
          <span class="retailPrice">￥{{item.retailPrice}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NewItem',data () {
    return {
      datas: []
    }
  },
  props: {
    newItemData: Array
  },
  async mounted () {
    // console.log(this.newItemData);
    this.datas = await this.newItemData
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.newItemModule
  width 355px
  height 350px
  padding 0 10px
  background-color #fff
  .header
    width 100%
    height 50px
    h3
      font-size 16px
      line-height 50px
      float left
      color #444
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
      &:nth-child(-3n+6)
        margin-right 0
      img
        width 108px
        height 108px
        background-color #F5F5F5
        border-radius 4px
      span
        margin-left 5px
      p
        color #444
        text-align justify
        white-space nowrap 
        overflow hidden
        text-overflow ellipsis 
        word-wrap break-all
      .retailPrice
        color #DC143C
</style>
