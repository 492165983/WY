<template>
  <div class="header">
      <span class="logo">网易严选</span>
      <!-- <h1>
        <img src="./image/logo.png" alt="logo" />
      </h1> -->
      <SearchBtn />
      <van-button plain type="danger" to="/mine" size="mini" class="login">登录</van-button>
  </div>
</template>

<script>
import SearchBtn from '../../../components/SearchBtn'
export default {
  name: 'Header',
  components: {
    SearchBtn
  }
}
</script>

<style lang='stylus' scoped>
.header
  width 100%
  display flex
  align-items center
  padding 10px 0
  background-color #fff
  .logo
    width 75px
    font-size 18px
    margin 0 10px
  .login
    width 20px
    font-size 12px
    margin-left 10px
    margin-right 7px
    border-radius 4px
</style>
