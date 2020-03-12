<template>
  <div class="searchCtainer">
    <div v-if="!isShow">
      <div class="header">
        <form action="/">
          <van-search
            v-model="searchName"
            show-action
            placeholder="复工通勤路，防护怎么做？"
            @search="onSearch"
            @cancel="onCancel"
          />
        </form>
      </div>
      <div class="searchSuggestions">
        <div class="Suggestions">热门搜索</div>
        <ul class="list">
          <li
            v-for="(item,index) in hotKeywordVOList"
            :key="index"
            @click="suggestionsSearch(item.keyword)"
            :style="{color:item.algSort ? '#E1363C' : '',borderColor:item.algSort ? '#E1363C' : ''}"
          >{{item.keyword}}</li>
        </ul>
      </div>
    </div>

    <!-- 搜索列表 -->
    <ShopLsit v-if="isShow" :data="seaerCenter" :text="searchName" />
  </div>
</template>

<script>
import ShopLsit from './shopList'
import { reqSearch, reqHotSearch } from '../../api'
export default {
  name: 'Search',
  components: {
    ShopLsit
  },
  data () {
    return {
      searchName: '',// 搜索名字
      seaerCenter: [],// 搜索数据
      isShow: false,// 默认显示的搜索的内容  true显示搜索的商品内容
      hotKeywordVOList: [] // 热门搜索数据
    }
  },
  async mounted () {
    // 界面渲染完后发送热门搜索的请求
    const result = await reqHotSearch()
    // 判断请求是否成功
    if (result.code === '200') {
      // 热门搜索数据存储在实例上
      this.hotKeywordVOList = result.data.hotKeywordVOList
    }
    // 自定义事件总线 调用search搜索的方法并发送请求
    this.$bus.$on('onSearch', this.onSearch)
  },
  methods: {
    async onSearch (searchName) {
      /* eslint-disable no-undef */
      // 提取搜索内容
      let text = ''
      // 判断是否传参
      if(searchName){
        // 传参 --> 子组件调用
        text = searchName
      }else{
        // 没有传参
        text = this.searchName.trim()
      }
      // 调用发送搜索接口api
      const result = await reqSearch(text)
      
      // 发送成功
      if (result.code === '200') {
        // 修改显示的组件
        this.isShow = true
        // 存储搜商品的数据
        this.seaerCenter = result.data.directlyList
      }
    },
    // 搜索取消按钮
    onCancel () {
      // 返回上一页
      this.$router.back()
      this.isShow = false
    },
    // 推荐的搜索
    suggestionsSearch(text){
      // 修改搜索的名称
      this.searchName = text
      // 调用搜索的方法
      this.onSearch(text)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
.searchCtainer
  width 100%
  height 100%
  // background-color #eee

  // overflow hidden
  .header
    .van-field__control
      font-size 14px
  .searchSuggestions
    margin-top 10px
    background-color #fff
    .Suggestions
      height 45px
      color #666
      padding-left 15px
      font-size 16px
      line-height 45px
    .list
      display flex
      flex-wrap wrap
      padding 0 15px
      li
        padding 8px
        border 0.35px solid #999
        border-radius 5px
        margin 0 10px 10px 0
</style>
