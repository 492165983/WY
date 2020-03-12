<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
// 引入footerGuide组件
import FooterGuide from './components/footerGuide'

export default {
  name: 'App',
  // 注册组件
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus"></style>
