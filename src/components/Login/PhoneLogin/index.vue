<template>
  <div class="PhoneContarner">
    <div class="PhoneLogin">
      <img src="../images/bj.png" class="wy" />
      <div class="btn">
        <input
          type="text"
          placeholder="请输入手机号"
          class="phoneInput"
          v-model="phone"
          name="phone"
          maxlength="11"
          v-validate="'required|changePhone'"
        />
        <span style="color:red">{{ errors.first('phone') }}</span>
        <input
          type="text"
          placeholder="请输入短信验证码"
          class="phoneInput"
          v-model="code"
          name="code"
          maxlength="8"
          v-validate="'required'"
        />
        <!-- <button class="code" @click="getCode">获取验证码</button> -->
        <span style="color:red">{{ errors.first('code') }}</span>
        <div class="code">
          <van-button
            plain
            hairline
            type="info"
            color="#666"
            @click="getCode"
            size="mini"
          >{{computedTime ? '已发送 '+computedTime+ ' 秒' : '获取验证码'}}</van-button>
        </div>
        <!-- <van-button type="primary" size="mini">迷你按钮</van-button> -->
        <van-button type="default" color="#DD1A17" size="large" @click="phoneLogin">登录</van-button>
      </div>
      <div class="loginTab" @click="$bus.$emit('isShowLoginTab',0)">
        <span>其他的登录方式</span>
        <van-icon name="arrow" size="16px" />
      </div>
    </div>
  </div>
</template>

<script>
import { reqSendCode, reqLoginPhone } from '../../../api'
import { Toast } from 'vant'
export default {
  name: 'PhoneLogin',
  data () {
    return {
      phone: '',// 手机号码
      computedTime: 0, // 下一次验证码发送时间倒计时 
      code: '' // 验证码
    }
  },
  methods: {
    // 发送短信验证码
    async getCode () {
      // 初始化倒计时时间
      this.computedTime = 5
      this.timeId = setInterval(() => {
        this.computedTime--
        // 判断当前倒计时是否到0
        if (this.computedTime <= 0) {
          // 还原默认值
          this.computedTime = 0
          // 清除定时器
          clearInterval(this.timeId)
        }
      }, 1000)
      // 提取手机号码
      const { phone } = this
      const names = ['phone']
      // 表单整体小样
      const success = await this.$validator.validateAll(names)
      // 判断表单效验是否成功
      if (success) {
        // 发送请求
        const result = await reqSendCode(phone)
        // 发送成功
        if (result.code === 0) {
          Toast('发送成功')
        } else {
          // 失败
          Toast(result.msg)
          // console.log(result);
        }
      }
    },
    // 登录
    async phoneLogin () {
      // 提取手机号码和验证码
      let { phone, code } = this
      const names = ['phone', 'code']
      // 表单整体小样
      const success = await this.$validator.validateAll(names)
      // 表单效验成功
      if (success) {
        // 发送请求
        const result = await reqLoginPhone(phone, code)
        // console.log(result);
        // 拿到响应的数据 存储在vuex中和localStorage中
        if(result.code === 0){
          // 存储在vuex中
          this.$store.dispatch('addUser',result.data)
          // 跳转至个人信息
          this.$router.replace('/ucenter')
        }
      }

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.PhoneContarner
  .PhoneLogin
    width 335px
    margin 0 auto
  // bordre 0.1 px solid red
  .wy
    width 135px
    height 45px
    margin 50px 100px 40px
  .btn
    position relative
    .phoneInput
      width 100%
      height 30px
      margin 7px 0
      font-size 14px
      padding 0 10px
      box-sizing border-box
      border-bottom 0.1px solid #ccc
    .code
      position absolute
      top 32px
      right 8px
      .van-button
        .van-button__text
          font-size 12px
          padding 0 5px
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
</style>
