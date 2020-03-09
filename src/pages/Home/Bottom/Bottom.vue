<template>
  <div class="bottom">
    <div class="box">
      <div class="btn">
        <a href="">
          <span> 下载app</span>
        </a>
        <a href="">
          <span> 电脑版</span>
        </a>
      </div>
      <div class="span">
        <span >网易公司版权所有 © 1997-</span>
        <span>2020</span>
        <br>
        <span >食品经营许可证：JY13301080111719</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.bottom
  border-top: 1px solid rgba(0,0,0,.15);
  background-color: #414141;
  width 100%
  .box
    text-align center
    padding 30px 0  25px 
    width 100%
    .btn
      margin 20px
      a
        // margin-bottom 30px
        border 1px solid #999
        border-radius 2px
        margin 20px 15px 20px
        padding 10px
        span 
          color #fff
          font-size 20px 
          margin 20px 10px
    .span
      line-height 30px
      font-size 16px
      color #999
</style>