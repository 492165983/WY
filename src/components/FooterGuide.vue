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
  name: 'FooterGuide',
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

<style lang='stylus'  rel="stylesheet/stylus">

</style>
