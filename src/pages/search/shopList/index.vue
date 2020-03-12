<template>
  <div class="shopContainer">
    <div class="shopHeader">
      <div class="search">
        <van-icon name="wap-home-o" @click="$router.replace('/home')" size="30px" />
        <form action="/">
          <van-search
            v-model="shopSearchName"
            placeholder="请输入搜索关键词"
            @search="shopSearch"
          />
        </form>
      </div>
      <ul class="rank">
        <li>综合</li>
        <li>价格</li>
        <li>分类</li>
      </ul>
    </div>
    <ul class="shopList">
      <li v-for="(item) in data" :key="item.id">
        <img :src="item.listPicUrl" :alt="item.name" />
        <p>{{item.name}}</p>
        <div class="price">
          <span v-if="item.retailPrice" class="retailPrice">￥{{item.retailPrice}}</span>
          <span v-if="item.counterPrice" class="counterPrice">￥{{item.counterPrice}}</span>
        </div>
        <div class="tagWraper" v-if="item.itemTagList">
          <div
            class="tagWraper_text"
            v-for="(itemTag,index) in item.itemTagList"
            :key="index"
          >{{itemTag.name}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList',
  data () {
    return {
      shopSearchName: ''
    }
  },
  props: ['data', 'text'],
  mounted () {
    // 显示对应搜索的商品名称
    this.shopSearchName = this.text
  },
  methods: {
    // 商品列表调用搜索方法
    shopSearch () {
      // 提取搜索名
      const text = this.shopSearchName
      // 分发事件
      this.$bus.$emit('onSearch', text)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.shopContainer
  margin 94.7px 0 0
.shopHeader
  position fixed
  left 0
  top 0
  .search
    display flex
    background-color #fff
    .van-cell
      width 280px
    .van-icon
      display flex
      justify-content center
      align-items center
      margin-left 10px
  .rank
    height 40px
    display flex
    border-bottom 0.1px solid #999
    background-color #F9FAFA
    li
      width 125px
      height 40px
      line-height 40px
      font-size 16px
      text-align center
      &:first-child
        color #E1363C
.shopList
  display flex
  flex-wrap wrap
  li
    width 172.5px
    margin 10px 0
    border-radius 10px 10px 0 0
    overflow hidden
    &:nth-child(2n+1)
      margin 10px 10px 10px
    &:nth-child(2n)
      margin-right 10px
    img
      width 172.5px
      height 172.5px
    p
      margin-top 5px
      color #333
      line-height 16px
      text-align justify
    .price
      margin-top 10px
      .retailPrice
        color #E1363C
        font-size 15px
      .counterPrice
        color #ccc
        margin-left 5px
        text-decoration line-through
    .tagWraper
      display flex
      margin-top 10px
      .tagWraper_text
        border 0.34px solid #E1363C
        padding 3px
        border-radius 5px
        font-size 8.5px
        color #E1363C
        margin-right 10px
</style>
