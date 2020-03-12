<template>
  <div class="cartContainer">
    <div class="header">
      <div class="cartHeader">
        <a href="#">领劵</a>
        <div class="cart">购物车</div>
      </div>
      <ul class="servicePolicy">
        <li>
          <van-icon name="circle" size="5px" />
          <span>30天无忧退货</span>
        </li>
        <li>
          <van-icon name="circle" size="5px" />
          <span>48小时快速退款</span>
        </li>
        <li>
          <van-icon name="circle" size="5px" />
          <span>满88元免包邮</span>
        </li>
      </ul>
    </div>
    <div class="defaultPage">
      <div class="container">
        <img src="./image/cart.png" alt="购物车">
        <p>去添加点什么吧</p>
        <van-button type="default" color="#DD1A21" size="large" @click="$router.replace('/login')">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cartContainer
  width 100%
  height 667px
  background-color #F4F4F4
  overflow hidden
  .header
    position fixed
    top 0
    left 0
    z-index 10
    .cartHeader
      width 100%
      height 44px
      // box-sizing border-box
      padding 0 20px
      background-color #fff
      .cart
        font-size 18px
        line-height 44px
      a
        float right
        font-size 16px
        color #FF0000
        margin 14px 10px 0 0
    .servicePolicy
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 35px
      // box-sizing border-box
      padding 0 20px
      background-color #eee
      li
        width 100px
        display flex
        justify-content center
        align-items center
        span
          color #666
          padding-left 5px
  .defaultPage
    position relative
    width 100%
    height 100%
    .container
      position absolute
      left 0
      top 280px
      right 0
      width 240px
      margin 0 auto
      img 
        width 124px
        height  124px
        margin-left 58px
        margin-bottom -10px
      p
        font-size 16px
        color 	#c1c1c1
        text-align center
        margin-bottom 20px
      .van-button__text
        font-size 16px
</style>
