<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showfoot"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  components: {
    FooterGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
// @import '../../common/stylus/mixins.styl'
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative
</style>
