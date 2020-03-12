<template>
  <div class="login">
    <img src="../images/bj.png" class="yx" />
    <div class="btn">
      <van-button type="default" color="#DD1A17" size="large" icon="phone-o" @click="$bus.$emit('isShowLoginTab',1)">手机号码登录</van-button>
      <van-button type="default" color="#000" size="large" icon="envelop-o"  @click="$bus.$emit('isShowLoginTab',2)">邮箱账号登录</van-button>
    </div>
    <div class="restsLogin">
      <div class="ww">
        <img src="../images/wx.png" />
        <span>微信</span>
      </div>
      <div class="line"></div>
      <div class="ww">
        <img src="../images/qq.png" />
        <span>QQ</span>
      </div>
      <div class="line"></div>
      <div class="ww">
        <img src="../images/wb.png" />
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginTab'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.login
    // display flex
    // flex-direction column
    // justify-content center
    // align-items center
    width 335px
    margin 0 auto
    // bordre 0.1 px solid red
    .yx
      width 135px
      height 45px
      margin 70px 100px 100px
    .btn
      .van-button
        margin-top 20px
        .van-button__text
          font-size 16px
    .restsLogin
      position absolute
      left 39px
      bottom 40px
      display flex
      justify-content center
      align-items center
      width 301px
      height 20px
      .ww
        width 80px
        display flex
        justify-content center
        align-items center
        img 
          width 20px
          height 20px
        span 
         padding-left 4px
      .line
        height 20px
        width 0.3px
        border 0.15px solid #666
</style>
