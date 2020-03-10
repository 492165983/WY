<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.isShowFooter"/> 
    <!-- v-show="$route.meta.isShowFooter" -->
  </div>
</template> 

<script>

// 引入FooterGuide 组件
import FooterGuide from './components/FooterGuide'

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    console.log(this.$router);
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html, body
  width 100%
  height 100%
  margin 0
</style>
