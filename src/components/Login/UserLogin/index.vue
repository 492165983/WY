<template>
  <div class="userContarner">
    <div class="userLogin">
      <img src="../images/bj.png" class="wy" />
      <div class="btn">
        <input
          type="text"
          placeholder="请输入邮箱账号 / 用户名"
          class="userInput"
          v-model="name"
          name="name"
          maxlength="18"
          v-validate="'required|changePhone'"
        />
        <span style="color:red">{{ errors.first('name') }}</span>
        <input
          type="password"
          placeholder="请输入密码"
          class="userInput"
          name="pwd"
          maxlength="18"
          v-model="pwd"
          v-validate="'required'"
        />
        <span style="color:red">{{ errors.first('pwd') }}</span>
        <!-- <button class="code" @click="getCode">获取验证码</button> -->

        <!-- <van-button type="primary" size="mini">迷你按钮</van-button> -->
        <van-button type="default" color="#DD1A17" size="large" @click="userLogin">登录</van-button>
      </div>
      <div class="loginTab" @click="$bus.$emit('isShowLoginTab',0)">
        <span>其他的登录方式</span>
        <van-icon name="arrow" size="16px" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data () {
    return {
      name: '',
      pwd: ''
    }
  },
  methods: {
    // 用户名和邮箱登录
    userLogin () {
      const { name, pwd } = this
      console.log(name, pwd);

    },

    // 显示选项登录界面
    // isShowLoginTab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.userContarner
  .userLogin
    width 335px
    margin 0 auto
  // bordre 0.1 px solid red
  .wy
    width 135px
    height 45px
    margin 50px 100px 40px
  .btn
    position relative
    .userInput
      width 100%
      height 30px
      margin 7px 0
      font-size 14px
      padding 0 10px
      box-sizing border-box
      border-bottom 0.1px solid #ccc
    .van-button
      margin-top 20px
      .van-button__text
        font-size 16px
  .loginTab
    width 120px
    height 20px
    display flex
    justify-content center
    margin 20px auto 0
    span
      font-size 14px
      padding-right 5px
      line-height 16px
      color #555
      // vertical-align top
</style>
