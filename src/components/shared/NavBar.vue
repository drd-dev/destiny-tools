<template>
<div class="nav-container">
   <div class="des-nav">
      <router-link id="home-link" to="/" class="app-name">{{appName}}</router-link>
  </div> 
  <div class="page-title"><span>// </span>{{$route.name}}</div>
</div>

</template>

<script>
export default {
  name: 'NavBar',
  data(){
      return{
         appName: "Destiny Tools"
      }
  }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';


span{
  color: $des-color-gold-border;
}

.nav-container{
  position: fixed;
  z-index: 1000;
  top:0;
  left: 0;
  width: 100%;
  color: $des-color-text;
}

  #home-link{
    text-decoration: none;
    color: $des-color-text;
  }


.des-nav{
  padding: 10px;

  text-align: left;
  font-family: 'Futurist';
  background-color: $des-color-background-med;
  .app-name{
      font-size: 20px;
  }
}

//page title - shown under the nav bar
.page-title{
  padding: 5px;
  padding-left: 20px;
  background-color: $des-color-background-darkest;

}

</style>
