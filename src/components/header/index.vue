<template>
  <div class="hwrapper">
    <div slot="left">
      <van-icon name="home-o" size="26px" @click="$router.replace('/home')" />
    </div>
    <slot name="center"/>
    <div class="right" slot="right">
      <van-icon name="search" size="26px" @click="$router.replace('/search')" />
      <van-icon name="cart-o" size="26px" @click="$router.replace('/shopping')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// 头部
.hwrapper
  display flex
  align-items center
  justify-content space-between
  width 100%
  height 50px
  padding 0 15px
  box-sizing border-box
  position fixed
  left 0
  top 0
  z-index 100
  background-color #fff
  .right
    width 80px
    display flex
    justify-content space-around
</style>
