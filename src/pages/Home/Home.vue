<template>
  <div class="home">
    <Header />
    <TopNav />
    <Bottom />
  </div>
</template>

<script>
import Header from './Header/Header'
import TopNav from './TopNav/TopNav'
import Bottom from './Bottom/Bottom'
export default {
  name: 'Home',
  components: {
    Header,
    TopNav,
    Bottom
  }
}
</script>

<style lang='stylus' scoped>
.home
  padding-bottom 75px
  background-color rgb(238,238,238)
</style>
