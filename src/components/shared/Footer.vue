<template>
  <div class="footer">
      <div class="footer-content">
        <div class="left">Developed by <a href="https://zeoxo.com" target="_blank">zeoxo</a> 2020 &copy;</div>
        <div class="right">Destiny is a registered trademark of <a href="https://www.bungie.net/" target="_blank">Bungie</a>. Some content and images are the property of Bungie.</div>
      </div>

  </div>
</template>

<script>
import Config from '../../config.json';
export default {
  name: 'Footer',
  props: {
  },
  computed: {
      appName(){
          console.log(Config.appName)
          return Config.appName;
      }
  }
}
</script>

<style lang='scss' scoped>
@import '../../theme/colors.scss';

.footer{
  font-size: 12px;
  width: 100%;
  padding: 2px;
  padding-left: 10px;
  padding-right: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: $des-color-background-med;

  .footer-content{

    display: flex;
    justify-content: space-between;
  }
}
</style>
