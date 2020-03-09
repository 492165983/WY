<template>
  <div class="classify">
    <!-- 分类搜索栏 -->
    <div class="search">
      <van-icon name="search" class="icon" />
      <span>搜索商品, 共24027款好物</span>
    </div>

    <!-- 分类左侧边栏 -->
    <div class="sidebar">
      <div class="ratings-wrapper" ref="ratingsScroll">
        <div style="transform:translateY(opx)">
          <ul class="content">
            <li v-for="(item,index) in datas" :key="index" class="item">{{item.name}}</li>
          </ul>
        </div>
        
      </div>
    </div>
    
    <!-- 分类右侧 -->
    
  </div>
</template>

<script>
import cateDatas from "../../../datas/cateNavDatas.json";
// 引入滚动插件
import BScroll from "better-scroll";
export default {
  name: "Classify",
  data() {
    return {
      // activeKey: 0,// 侧边栏变化值
      cateDatas, // 分类总数据
      // subCateList: {} ,// 侧边栏显示选中显示对应的数据,
      datas: []
    };
  },
  methods: {
    _initScroll() {
      this.ratingsScroll = new BScroll(this.$refs.ratingsScroll, {
        click: true
      });
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  mounted() {
    this.datas = cateDatas.categoryL1List;
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify
  height 100%
  width 100%
  overflow auto
  // 搜索
  .search
    background-color #ededed
    width 90%
    height 40px
    border-radius 5px
    margin 10px auto
    display flex
    justify-content center
    align-items center
    box-sizing border-box
    padding 10px 15px 10px 0
    .icon
      margin-left 40px
      font-size 20px
      opacity 0.6
    span
      padding 10px 10px
      opacity 0.6
  // 左侧下拉
  .sidebar
    width 100%
    overflow auto
    .ratings-wrapper
      border-top 1px solid #ccc
      border-right 1px solid #ccc
      float left
      width 120px
      height 560px
      background-color #fff
      position relative
      .content
        padding 20px 0
        .item
          width 100%
          font-size 18px
          height 50px
          border none
          text-align center
          margin 5px 4px 4px 2px

  // 显示内容区域
  .cate_center
    width 260px
    // border-top 1px solid #999
    // 大图
    .banner
      width 100%
      height 100%
      img
        width 260px
        height 96px
    // 商品区
    .cateItem
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      li
        width 77px
        height 108px
        img
          width 77px
          height 77px
        p
          text-align center
          color #666
</style>