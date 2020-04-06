<template>
  <div class="nav-container des-nav">
       <router-link id="home-link" to="/" class="app-name">{{appName}}</router-link>
  </div>
</template>

<script>
import Config from '../../config.json';
export default {
  name: 'NavBar',
  data(){
      return{
         appName: Config.appName
      }
  }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';
  #home-link{
    text-decoration: none;
    color: $des-color-text;
  }

</style>
