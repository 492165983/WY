<template>
   <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" @click="goto('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" @click="goto('/classify')">分类</van-tabbar-item>
      <van-tabbar-item icon="cash-on-deliver" @click="goto('/worthbuy')">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" @click="goto('/shopping')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="goto('/mine')">个人</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  name: "FooterGuide",
 data () {
    return {
      active: 0
    }
  },
  methods: {
    goto(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
// @import '../../common/stylus/mixins.styl'
// .footer_guide // footer
//   top-border-1px(#e4e4e4)
//   position fixed
//   z-index 100
//   left 0
//   right 0
//   bottom 0
//   background-color #fff
//   width 100%
//   height 50px
//   display flex
//   .guide_item
//     display flex
//     flex 1
//     text-align center
//     flex-direction column
//     align-items center
//     margin 5px
//     color #999999
//     &.on
//       color #cc0033
//     span
//       font-size 12px
//       margin-top 2px
//       margin-bottom 2px
//       .iconfont
//         font-size 22px
</style>