<template>
  <div>
    <router-view />
    <FooterGuide />
  </div>
</template> 

<script>

// 引入FooterGuide 组件
import FooterGuide from './components/FooterGuide/FooterGuide'
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

<style>

</style>
