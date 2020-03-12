<template>
  <div>
    <van-tabbar v-model="active" type="line" route active-color="#CC0000" safe-area-inset-bottom :border="false">
      <van-tabbar-item name="home" icon="home-o" replace   to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="category" icon="qr-invalid" replace   to="/category">分类</van-tabbar-item>
      <van-tabbar-item name="topic" icon="photo-o" replace   to="/topic">值得买</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" replace   to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item name="ucenter" icon="user-circle-o" replace   to="/ucenter">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      active: 'home'
    }
  },
 /*  methods: {
    goto (path) {
      console.log(path,this.active);
      this.$router.replace(path)
    }
  } */
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
